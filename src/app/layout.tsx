import { ChakraProvider } from "@chakra-ui/react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@/shared/styles/globals.css"
import { ThemeProvider } from '@/shared/theme/provider';

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}