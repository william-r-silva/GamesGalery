import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Games Galery",
  description: "A Galery of Games",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
