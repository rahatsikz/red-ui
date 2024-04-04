import  { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions  = {
    // Configure one or more authentication providers
    providers: [
      GithubProvider({
        clientId: process.env.GITHUB_ID as string,
        clientSecret: process.env.GITHUB_SECRET as string,
      }),
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
      })
    ],
  
    secret: process.env.NEXTAUTH_SECRET as string,
    callbacks: {
      async redirect({ url, baseUrl }: { url: string, baseUrl: string }) {
        const isRelativeUrl = url.startsWith("/");
        if (isRelativeUrl) {
          return `${baseUrl}${url}`;
        }
  
        const isSameOriginUrl = new URL(url).origin === baseUrl;
        const alreadyRedirected = url.includes('callbackUrl=')
        if (isSameOriginUrl && alreadyRedirected) {
          const originalCallbackUrl = decodeURIComponent(url.split('callbackUrl=')[1]);
  
          return originalCallbackUrl;
        }
  
        if (isSameOriginUrl) {
          return url;
        }
  
        return baseUrl;
      }
    },
    pages: {
      signIn: "/signin",
    },
    
};