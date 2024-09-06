import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Date Picker",
  description: "Date Picker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
