import type { Metadata } from "next";
import { MuseoModerno, Figtree, Poppins } from "next/font/google";
import "./globals.css";

const museoModerno = MuseoModerno({
  variable: "--font-museo-moderno",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Vectore | Every way you teach, better with a community.",
  description: "Bring courses, cohorts, coaching, workshops, and events into one platform, with community built into the experience from day one.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${museoModerno.variable} ${figtree.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  );
}
