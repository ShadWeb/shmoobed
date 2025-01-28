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
      <body className=" h-full bg-blue-100  ">
        <Layout> {children}</Layout>
       
      </body>
    </html>
  );
}
