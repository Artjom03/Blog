import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 animate-fadeIn bg-gradient-to-br from-[#1e2432] via-[#23293a] to-[#2d3548]">
      {/* Add a colorful accent bar */}
      <div className="h-2 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded mb-8"></div>
      <div className="text-center bg-gradient-to-br from-blue-900/60 via-[#1e2432] to-purple-900/60 rounded-lg p-10 shadow-lg border border-blue-900/20">
        <h1 className="text-6xl font-bold text-gray-400 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-white mb-6">Page Not Found</h2>
        <p className="text-gray-100 mb-8">
          Sorry, the page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <Link 
          href="/" 
          className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center"
        >
          ← Back to Home
        </Link>
      </div>
    </main>
  )
}