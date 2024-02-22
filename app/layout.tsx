import "./globals.css";
import Navbar from "./components/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Andrei's Blog",
  description: "Created by create Andrei Macavei",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-800">
        <Navbar />
        <main className="px-4 md:px6 prose prose-xl prose-slate dark:prose-invert mx-auto">
          {children}
        </main>
        </body>
    </html>
  );
}
