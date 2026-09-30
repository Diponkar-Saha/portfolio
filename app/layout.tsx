import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const font = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "Diponkar Saha | Software Developer",
  description: "Full stack developer building ERP, inventory and HR software with ASP.NET Core, Angular and React.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.className}>{children}</body>
    </html>
  );
}
