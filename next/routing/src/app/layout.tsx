import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@/styles/globals.css"

import { Header } from "@/components/header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Routing",
  description: "Routing",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-full container mx-auto">
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
