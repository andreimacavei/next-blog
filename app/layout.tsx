import Navbar from "./components/Navbar";
import MyProfilePic from "./components/MyProfilePic";
import "./globals.css";

export const metadata = {
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
        <MyProfilePic />
        {children}
        </body>
    </html>
  );
}
