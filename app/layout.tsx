import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "K.S. Beauty | High-Quality Cosmetics & Jewelry",
  description: "Premium cosmetics and imitation jewelry designed for modern women.",
  keywords: "beauty, cosmetics, jewelry, fashion, women, makeup",
  author: "K.S. Beauty",
  openGraph: {
    title: "K.S. Beauty - Premium Cosmetics & Jewelry",
    description: "Discover high-quality cosmetics and imitation jewelry for modern women.",
    type: "website",
    url: "https://www.ksbeauty.com",
    images: [
      {
        url: "/logo.jpg", // Change to your Open Graph image
        width: 1200,
        height: 630,
        alt: "K.S. Beauty Banner",
      },
    ],
  },
  instagram: {
    card: "summary_large_image",
    title: "K.S. Beauty - High-Quality Cosmetics & Jewelry",
    description: "Explore a collection of premium cosmetics and imitation jewelry.",
    image: "/logo.jpg", // Change to your Twitter image
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Moon+Dance&display=swap" rel="stylesheet" />

        <link rel="icon" href="/logo.jpg?round" type="image/png" sizes="32x32" />
        {/* Favicon */}
        {/* <link rel="icon" href="/favicon.ico" sizes="32x32" type="image/png" /> */}

        {/* Meta Tags */}
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />

        {/* Open Graph Meta */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:width" content={metadata.openGraph.images[0].width.toString()} />
        <meta property="og:image:height" content={metadata.openGraph.images[0].height.toString()} />
        <meta property="og:image:alt" content={metadata.openGraph.images[0].alt} />

      </head>
      <body className={inter.className}>
        {/* <Layout>{children}</Layout> */}
        {children}
      </body>
    </html>
  )
}

