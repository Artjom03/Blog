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
        <div className="block md:hidden sticky top-0 z-50 bg-gradient-to-r from-blue-900 via-[#1e2432] to-purple-900 shadow-lg border-b border-blue-900/30 px-4 py-2 flex justify-center items-center">
          <MobileNavDropdown />
        </div>
        {children}
        <div className="sticky bottom-0 z-40 w-full">
          <Footer />
        </div>
      </body>
    </html>
  )
}
