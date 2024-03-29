import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import RecoilContextProvider from "./_components/recoilContextProvider";
import DataProvider from "./_components/dataProvider";

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
      <RecoilContextProvider>
        <DataProvider />
        <body className={inter.className}>{children}</body>
      </RecoilContextProvider>
    </html>
  );
}
