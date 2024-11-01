import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "@/components/navbar";
import "./globals.css";
import Lenis from "@/components/lenis";
// import { Sora } from 'next/font/google'

// const sora = Sora({
//   weight: ['400', '500', '700'], 
//   style: 'normal', 
//   subsets: ['latin'],
// })

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

const clashDisplay = localFont({
  src: "./fonts/ClashDisplay-Regular.woff2",
  variable: "--font-clash-display",
  weight: "100 900",
  });

  const clashDisplaySemiBold = localFont({
    src: "./fonts/ClashDisplay-Semibold.woff2",
    variable: "--font-clash-display-semibold",
    weight: "100 900",
  });
export const metadata: Metadata = {
  title: "parshav portfolio",
  description: "a lil about myself",
  keywords: "full-stack developer, blockchain developer, Next.js, Tailwind CSS, smart contracts, Web3, portfolio"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Lenis>
      <body
        className={`${clashDisplay.variable} ${clashDisplaySemiBold.variable} font-clash-display antialiased scroll-smooth scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#212531] bg-[hsl(0,0%,8%)]`}
      >
        <Navbar />
        {children}
      </body>
      </Lenis>
    </html>
  );
}
