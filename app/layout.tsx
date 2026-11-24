import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase:new URL("http://localhost:3000/") ,
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Lumora - Smart Shopping, Powered by AI",
    template: "%s | Lumora"
  },
  description:"Shop electronics, fashion and home essentials with an AI assistant that helps you find the right product.",
  openGraph: {
   type: "website",
  title: "Lumora - Smart Shopping, Powered by AI",
  description: "Shop electronics, fashion and home essentials with an AI assistant that helps you find the right product.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
