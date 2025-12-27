import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { MobileDepartmentMenu } from "@/components/mobile-department-menu"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Malletts Home Hardware - 125 Years of Quality in Truro",
  description:
    "Over 20,000 products, competitive pricing and an unbeatable local service. Your trusted independent department store in Truro since 1899.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
        <MobileDepartmentMenu />
      </body>
    </html>
  )
}

