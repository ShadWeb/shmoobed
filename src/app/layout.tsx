import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/components/Layout";


export const metadata: Metadata = {
  title: "Shahrem mobed",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=" h-full bg-gradient-to-br from-blue-500  to-purple-6 blur-ms">
        <Layout> {children}</Layout>
       
      </body>
    </html>
  );
}
