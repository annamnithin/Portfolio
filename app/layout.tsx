import type { Metadata, Viewport } from "next"
import { Zen_Kaku_Gothic_New, Shippori_Mincho } from "next/font/google"
import "./globals.css"

const zenKaku = Zen_Kaku_Gothic_New({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-zen-kaku",
  display: "swap",
})

const shippori = Shippori_Mincho({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-shippori",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Nithin Annam — Full Stack Developer",
  description:
    "The portfolio of Nithin Annam, a full stack developer. A scroll journey through each chapter of his life, told in a Japanese illustrated style.",
  generator: "v0.app",
}

export const viewport: Viewport = {
  themeColor: "#f4efe6",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${zenKaku.variable} ${shippori.variable} bg-background`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
