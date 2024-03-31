import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Russian alphabet",
  description: "Colorized and romanized Russian alphabet"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
