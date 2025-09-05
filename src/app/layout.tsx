import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio | Creative Developer",
  description: "Modern portfolio showcasing creative work, professional skills, and innovative digital solutions. Specializing in React, Next.js, TypeScript, and modern web technologies.",
  keywords: [
    "portfolio", 
    "developer", 
    "web development", 
    "frontend", 
    "react", 
    "nextjs", 
    "typescript",
    "creative developer",
    "ui/ux design",
    "full stack developer",
    "modern web design"
  ],
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  publisher: "Your Name",
  
  // Open Graph / Facebook
  openGraph: {
    title: "Portfolio | Creative Developer",
    description: "Modern portfolio showcasing creative work, professional skills, and innovative digital solutions",
    type: "website",
    locale: "en_US",
    url: "https://yourwebsite.com",
    siteName: "Creative Developer Portfolio",
    images: [
      {
        url: "/og-image.jpg", // You'll need to add this image
        width: 1200,
        height: 630,
        alt: "Creative Developer Portfolio",
      },
    ],
  },
  
  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Creative Developer",
    description: "Modern portfolio showcasing creative work, professional skills, and innovative digital solutions",
    creator: "@yourusername", // Replace with your Twitter handle
    images: ["/og-image.jpg"],
  },
  
  // Additional SEO
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Verification (add your verification codes)
  verification: {
    google: "your-google-verification-code",
    // other: "your-other-verification-codes",
  },
  
  // Canonical URL
  alternates: {
    canonical: "https://yourwebsite.com",
  },
  
  // Additional metadata
  category: "technology",
  classification: "Portfolio Website",
  referrer: "origin-when-cross-origin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-black text-white overflow-x-hidden min-h-screen">
        {children}
      </body>
    </html>
  );
}