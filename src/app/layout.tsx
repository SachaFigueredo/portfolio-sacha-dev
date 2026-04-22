import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

/* 
  ========================================
  LAYOUT - Root Layout Configuration
  ========================================
  Configures fonts, metadata, and global styles.
  Uses Inter font for clean, modern typography.
*/

// Load Inter font from Google Fonts
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

// SEO Metadata
export const metadata: Metadata = {
  title: "Desarrollador Web Full-Stack | Transformo ideas en aplicaciones",
  description: "Desarrollador web especializado en React, Node.js, PostgreSQL. Creación de aplicaciones web modernas, APIs y dashboards de datos.",
  keywords: "desarrollador web, full-stack, React, Node.js, portfolio, freelance",
  authors: [{ name: "Tu Nombre" }],
  openGraph: {
    title: "Desarrollador Web Full-Stack | Portfolio",
    description: "Transformo ideas en aplicaciones web rápidas y escalables",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="es" 
      className={`${inter.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-bg-primary text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}