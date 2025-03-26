import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="bg-[#1e2432] border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8">
            <Link 
              href="/"
              className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/weeks"
              className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors"
            >
              Weekly Reports
            </Link>
            <Link 
              href="/blog"
              className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors"
            >
              Blog & Tutorials
            </Link>
            <Link 
              href="/experience"
              className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors"
            >
              My Experience
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 