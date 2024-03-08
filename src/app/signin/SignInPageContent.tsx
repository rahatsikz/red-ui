"use client";
import GitHubSVG from "@/assets/svg/GitHubSVG";
import LoginSVG from "@/assets/svg/LoginSVG";
import React from "react";
import { signIn, useSession } from "next-auth/react";

const SignInPageContent = () => {
  // const { data: session, status } = useSession();
  // console.log("status", status);
  // console.log("session", session);
  return (
    <section className='container mx-auto flex items-center justify-around h-[calc(100vh-5.6rem)]'>
      <LoginSVG />
      <div className='flex flex-col gap-2 items-center'>
        <h1 className='text-3xl font-bold text-center text-primary'>
          Login With Your Social Account
        </h1>
        <p className='text-secondary'>
          Discover exclusive Red UI capabilities. Log in to access premium
          features
        </p>
        <div className='mt-4 -ml-8'>
          <button
            onClick={() =>
              signIn("github", { callbackUrl: "https://red-ui.vercel.app" })
            }
            className='w-fit text-base flex gap-4 tracking-widest rounded-md px-[30px] py-[10px] bg-[radial-gradient(circle,#f87171_0%,#ef4444_100%)] text-white'
          >
            <GitHubSVG />
            Sign In with Github
          </button>
        </div>
      </div>
    </section>
  );
};

export default SignInPageContent;
