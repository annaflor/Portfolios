import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.scss";

const inter = Poppins 
({ subsets: ["latin"],  weight: ['400', '500', '600'] 
});

export const metadata: Metadata = {
  title: "My portfolio",
  description: "Ana Caroline de Andrade Vieira - software engineer responsive portfolio ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
