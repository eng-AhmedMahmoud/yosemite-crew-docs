import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yosemite Crew Docs",
  description:
    "Developer documentation for Yosemite Crew — the open-source operating system for animal health.",
  icons: {
    icon: "https://d2il6osz49gpup.cloudfront.net/YC.svg",
  },
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
