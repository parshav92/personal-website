import type { Metadata } from "next";
// import localFont from "next/font/local";
import Navbar from "@/components/navbar";
import "./globals.css";
import { Sora } from 'next/font/google'

const sora = Sora({
  weight: ['400', '500', '700'], 
  style: 'normal', 
  subsets: ['latin'],
})

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "pd portfolio",
  description: "a lil about myself",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sora.className} antialiased scroll-smooth scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#212531] bg-[hsl(0,0%,8%)]`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
