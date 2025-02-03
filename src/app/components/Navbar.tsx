import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-8">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8 items-center">
            <Link 
              href="/" 
              className="text-gray-900 hover:text-blue-600 px-3 py-2 text-base font-medium transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/weeks" 
              className="text-gray-900 hover:text-blue-600 px-3 py-2 text-base font-medium transition-colors"
            >
              Weekly Reports
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 