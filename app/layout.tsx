import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Common Core For Old People",
  description: "Grade-by-grade Common Core math guides for parents who learned math the old way. Start with the why, then the how.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
