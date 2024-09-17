import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navber from "@/app/components/navber"
import { ThemeProvider } from "next-themes"
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-row">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            >
            <Navber/>
            {children}
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
