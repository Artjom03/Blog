import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-[#1e2432] shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8 items-center">
            <Link 
              href="/" 
              className="text-white hover:text-blue-400 px-3 py-2 text-base font-medium transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-white hover:text-blue-400 px-3 py-2 text-base font-medium transition-colors"
            >
              About
            </Link>
            <Link 
              href="/weeks" 
              className="text-white hover:text-blue-400 px-3 py-2 text-base font-medium transition-colors"
            >
              Weekly Reports
            </Link>
            <Link 
              href="/blog" 
              className="text-white hover:text-blue-400 px-3 py-2 text-base font-medium transition-colors"
            >
              Blog & Tutorials
            </Link>
            <Link 
              href="/experience" 
              className="text-white hover:text-blue-400 px-3 py-2 text-base font-medium transition-colors"
            >
              My Experience
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 