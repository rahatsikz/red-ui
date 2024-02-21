import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/ui/Navbar";
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Red UI",
  description: "Tailwind UI Builder",
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang='en'>
      <body className={`${poppins.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
