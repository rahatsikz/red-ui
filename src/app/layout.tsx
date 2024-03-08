import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/ui/Navbar";
import { Toaster } from "react-hot-toast";
import { Providers } from "./Providers";
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Red UI",
  description: "Tailwind UI Builder",
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang='en'>
      <Providers>
        <body className={`${poppins.className}`}>
          <Navbar />
          <Toaster />
          {children}
        </body>
      </Providers>
    </html>
  );
}
