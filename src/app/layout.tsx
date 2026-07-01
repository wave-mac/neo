import type { Metadata } from "next";
import { Space_Grotesk, Figtree, Poppins } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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

const siteUrl = "https://vectore.co";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Vectore — Every way you teach, better with a community.",
    template: "%s | Vectore",
  },
  description:
    "Bring courses, cohorts, coaching, workshops, and events into one platform — with community built into the experience from day one. Join the founding waitlist.",
  keywords: [
    "online course platform",
    "community learning",
    "cohort courses",
    "coaching platform",
    "teaching platform",
    "learning management system",
    "creator education",
    "workshop platform",
    "membership site",
    "vectore",
  ],
  authors: [{ name: "Vectore" }],
  creator: "Vectore",
  publisher: "Vectore",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Vectore",
    title: "Vectore — Every way you teach, better with a community.",
    description:
      "Bring courses, cohorts, coaching, workshops, and events into one platform — with community built into the experience from day one.",
    images: [
      {
        url: "/8.png",
        width: 1200,
        height: 630,
        alt: "Vectore — Teaching platform dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vectore — Every way you teach, better with a community.",
    description:
      "Bring courses, cohorts, coaching, workshops, and events into one platform — with community built into the experience from day one.",
    images: ["/8.png"],
    creator: "@vectore",
  },
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
    <html lang="en" className={`${spaceGrotesk.variable} ${figtree.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  );
}
