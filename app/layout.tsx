import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "InvestLink",
  description: "Where Investors and Startups Connect",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

