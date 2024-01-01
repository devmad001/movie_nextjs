import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import SearchBox from "@/components/SearchBox";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MovieHub',
  description: 'A movie database created by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>

      <Header/>
      <Navbar/>
      <SearchBox/>

      {children}</body>
    </html>
  )
}
