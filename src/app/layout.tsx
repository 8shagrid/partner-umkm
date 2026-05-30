import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Partner UMKM | Digitalisasi UMKM Lokal",
  description: "Bantu UMKM Naik Kelas Lewat Website, Sistem Order, dan Dashboard Bisnis. Solusi digital yang sederhana dan sesuai kebutuhan UMKM.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-surface-50 text-primary-900">{children}</body>
    </html>
  );
}
