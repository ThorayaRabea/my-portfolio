import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thoraya Rabea | Frontend Engineer",
  description: "Senior Frontend Engineer specialized in React.js and Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
