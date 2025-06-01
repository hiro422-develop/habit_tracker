// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { createClient } from "@/lib/supabaseServer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Loopi",
  description: "習慣トラッカーアプリ",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="flex flex-col min-h-screen">
        <main className="flex-1">{children}</main>
        <Navbar /> {/* ← いったん無条件で表示 */}
      </body>
    </html>
  )
}
