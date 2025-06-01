import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MobileNavDropdown from './components/MobileNavDropdown'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Artjom\'s Internship Blog',
  description: 'Documenting my journey and experiences during my internship',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#1a1f2b] min-h-screen flex flex-col`}>
        {/* Show Navbar on desktop (md+) and MobileNavDropdown on mobile */}
        <div className="hidden md:block">
          <Navbar />
        </div>
        <div className="md:hidden">
          <MobileNavDropdown />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  )
}
