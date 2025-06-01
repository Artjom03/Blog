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
        <div className="md:hidden sticky top-0 z-50 bg-[#181c27] shadow-lg border-b border-blue-900/30 px-0 py-0 flex justify-center items-center">
          <nav className="w-full max-w-sm mx-auto my-3 rounded-2xl bg-gradient-to-r from-blue-900 via-[#23293a] to-purple-900 p-2 flex gap-1 shadow-lg border border-blue-900/40">
            <a href="/" className="flex-1 px-1 py-2 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors text-center shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400">Home</a>
            <a href="/about" className="flex-1 px-1 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-colors text-center shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400">About</a>
            <a href="/weeks" className="flex-1 px-1 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 transition-colors text-center shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400">Weeks</a>
            <a href="/blog" className="flex-1 px-1 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 transition-colors text-center shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400">Blog</a>
            <a href="/experience" className="flex-1 px-1 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-blue-400 to-purple-400 hover:from-blue-500 hover:to-purple-500 transition-colors text-center shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300">Exp</a>
          </nav>
        </div>
        {children}
        <Footer />
      </body>
    </html>
  )
}
