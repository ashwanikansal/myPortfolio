import type { Metadata } from "next";
import { Inter, Tilt_Neon, Carattere } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const tiltNeon = Tilt_Neon({
  variable: "--font-tilt-neon",
  subsets: ["latin"],
});

const carattere = Carattere({
  weight: "400",
  variable: "--font-carattere",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ashwani Kansal",
  description: "My Personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${tiltNeon.variable} ${carattere.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
