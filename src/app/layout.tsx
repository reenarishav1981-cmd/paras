import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/Navbar";
import { AIMentor } from "@/components/widgets/AIMentor";
import { XPTopbar } from "@/components/widgets/XPTopbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ravindras IAS Academy | Premium UPSC Coaching",
  description: "Learn from the legends. The most premium institution for UPSC preparation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="font-sans min-h-screen bg-[#F8FAFC] text-slate-900 selection:bg-orange-500 selection:text-white overflow-x-hidden pt-20">
        <XPTopbar />
        <Navbar />
        <main className="relative z-10 flex flex-col min-h-screen">
          {children}
        </main>
        <AIMentor />
      </body>
    </html>
  );
}
