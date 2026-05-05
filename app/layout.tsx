import type { Metadata } from "next";
import { Manrope, Newsreader } from "next/font/google";
import "./globals.css";
import Navigator from "@/components/layout/Navigator";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "Actually Edible",
    template: "%s | Actually Edible",
  },
  description:
    "A personal archive of recipes, kitchen notes, and practical technique studies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${newsreader.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full">
        <Navigator>{children}</Navigator>
      </body>
    </html>
  );
}
