import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "@/components/navbar";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#212531] px-8 py-4`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
