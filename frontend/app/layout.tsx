import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Sidebar from "@/components/layout/Sidebar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Justiniano I | Pesquisa Jurídica Inteligente",
  description: "Encontre jurisprudência dos tribunais brasileiros em segundos com IA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} font-sans text-white min-h-screen antialiased`}
      >
        <Sidebar />
        <main className="ml-20">
          {children}
        </main>
        <Toaster 
          position="top-right"
          toastOptions={{
            style: {
              background: '#1e293b',
              color: '#fff',
              border: '1px solid #334155',
            },
          }}
        />
      </body>
    </html>
  );
}
