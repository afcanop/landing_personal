import type { Metadata } from "next"
import { Syne, Space_Mono } from "next/font/google"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import ScrollToTop from "@/components/ui/ScrollToTop"
import JsonLd from "@/components/ui/JsonLd"
import "./globals.css"

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
})

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  weight: ["400", "700"],
  display: "swap",
})

const siteUrl = "https://afcanop.vercel.app"
const siteName = "Andrés Felipe Cano - Full Stack Developer"

export const metadata: Metadata = {
  title: siteName,
  description:
    "Ingeniero de Software Full Stack con 8+ años de experiencia. Especializado en Angular, Python, Django, PHP, Laravel y arquitectura de software.",
  keywords: [
    "desarrollador full stack",
    "angular",
    "python",
    "django",
    "php",
    "laravel",
    "medellín",
    "colombia",
    "software engineer",
  ],
  authors: [{ name: "Andrés Felipe Cano Piedrahita", url: siteUrl }],
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: siteName,
    description:
      "Ingeniero de Software Full Stack con 8+ años de experiencia. Especializado en Angular, Python, Django, PHP y Laravel.",
    url: siteUrl,
    siteName,
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description:
      "Ingeniero de Software Full Stack con 8+ años de experiencia. Especializado en Angular, Python, Django, PHP y Laravel.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${syne.variable} ${spaceMono.variable}`}>
      <body className="min-h-screen flex flex-col font-sans antialiased">
        <JsonLd />
        <Navbar />
        <main className="flex-1 relative z-10">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}
