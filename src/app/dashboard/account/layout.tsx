import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/shared/styles/globals.css'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cuenta',
}
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      <p>Nelson mandala</p>
      <section>
      {children}
      </section>
    </main>
  )
}
