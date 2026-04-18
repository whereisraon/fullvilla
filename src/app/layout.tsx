import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FullVilla | 프리미엄 빌라 컬렉션",
  description: "지평선 너머의 휴식, 당신만을 위해 엄선된 럭셔리 빌라를 경험해 보세요.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${playfair.variable} ${manrope.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
