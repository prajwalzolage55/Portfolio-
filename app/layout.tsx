import type { Metadata, Viewport } from "next";
import "./globals.css";
import JsonLd from "@/components/JsonLd";

const SITE_URL = "https://prajwalzolage-portfolio-hrfj.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Prajwal Zolage | Software Developer & AI/ML Enthusiast",
    template: "%s | Prajwal Zolage",
  },

  description:
    "Prajwal Zolage — Software Developer and AI/ML Enthusiast specializing in Python, FastAPI, Flask, Machine Learning, Data Analytics, Next.js, MongoDB, and Firebase. Explore my projects, skills, and experience.",

  keywords: [
    "Prajwal Zolage",
    "Prajwal Zolage portfolio",
    "Software Developer",
    "AI ML Enthusiast",
    "Machine Learning Developer",
    "Data Science Student",
    "Python Developer",
    "FastAPI Developer",
    "Flask Developer",
    "Next.js Developer",
    "Full Stack Developer India",
    "AI projects",
    "Data Analytics",
    "MongoDB",
    "Firebase",
    "Terna Engineering College",
    "DataLens AI",
    "NanoPDF",
    "SchemeSaathi",
  ],

  authors: [{ name: "Prajwal Zolage", url: SITE_URL }],
  creator: "Prajwal Zolage",
  publisher: "Prajwal Zolage",

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

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "Prajwal Zolage — Portfolio",
    title: "Prajwal Zolage | Software Developer & AI/ML Enthusiast",
    description:
      "Explore the portfolio of Prajwal Zolage — Software Developer and AI/ML Enthusiast building intelligent, scalable systems with Python, Flask, FastAPI, Next.js, and more.",
    images: [
      {
        url: "/profile.jpg",
        width: 1024,
        height: 1024,
        alt: "Prajwal Zolage — Software Developer & AI/ML Enthusiast",
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Prajwal Zolage | Software Developer & AI/ML Enthusiast",
    description:
      "Software Developer and AI/ML Enthusiast building intelligent systems. Explore my projects and skills.",
    images: ["/profile.jpg"],
    creator: "@prajwalzolage",
  },

  alternates: {
    canonical: SITE_URL,
  },

  verification: {
    google: "eb71be0c0bbfc33a",
  },

  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#121212",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
