import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thoraya Rabea | Front-End Developer",
  description: "Front-End Developer specialized in React.js, Next.js and TypeScript. Cairo, Egypt.",
  openGraph: { title: "Thoraya Rabea | Front-End Developer", images: ["/photo.jpg"] },
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
