import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen p-8 animate-fadeIn bg-gradient-to-br from-[#1e2432] via-[#23293a] to-[#2d3548]">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Add a colorful accent bar */}
        <div className="h-2 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded mb-8"></div>
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-900/60 via-[#1e2432] to-purple-900/60 rounded-lg p-8 text-center shadow-lg border border-blue-900/20">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 animate-slideDown drop-shadow">
            Welcome to My Internship Journey
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Follow my 15-week experience as a Software Development Intern at VAB, 
            where I document my growth, challenges, and achievements in web development.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/about"
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 py-3 rounded-lg transition-colors shadow"
            >
              About Me
            </Link>
            <Link
              href="/weeks"
              className="bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-white px-6 py-3 rounded-lg transition-colors shadow"
            >
              View Weekly Reports
            </Link>
          </div>
        </div>

        {/* Latest Blog Post */}
        <div className="bg-gradient-to-br from-purple-900/60 via-[#1e2432] to-blue-900/60 rounded-lg p-8 shadow-lg border border-purple-900/20">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">Latest Update</h2>
            <Link 
              href="/weeks"
              className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2"
            >
              View All →
            </Link>
          </div>
          <div className="bg-[#252b3b] rounded-lg p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold text-white">Week 8: Component Development</h3>
              <span className="text-sm text-gray-400">March 18-22, 2025</span>
            </div>
            <p className="text-gray-300 mb-4">
              This week focused on component development and bug fixing. Key highlights include evaluation 
              meetings with mentors and significant progress in website styling improvements.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Angular</span>
              <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">Development</span>
              <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">Mentorship</span>
            </div>
            <Link 
              href="/weeks/8"
              className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2"
            >
              Read More →
            </Link>
          </div>
        </div>

        {/* Quick Overview */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-900/60 via-[#1e2432] to-purple-900/60 rounded-lg p-6 shadow-lg border border-blue-900/20">
            <h3 className="text-lg font-semibold text-white mb-4">About the Internship</h3>
            <p className="text-gray-300 mb-4">
              A 15-week journey at VAB, focusing on Angular development and Sitecore implementation.
            </p>
            <Link 
              href="/about"
              className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2"
            >
              Learn More →
            </Link>
          </div>

          <div className="bg-gradient-to-br from-pink-900/60 via-[#1e2432] to-blue-900/60 rounded-lg p-6 shadow-lg border border-pink-900/20">
            <h3 className="text-lg font-semibold text-white mb-4">Weekly Progress</h3>
            <p className="text-gray-300 mb-4">
              Detailed weekly reports covering tasks, learnings, and achievements.
            </p>
            <Link 
              href="/weeks"
              className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2"
            >
              View Reports
            </Link>
          </div>

          <div className="bg-gradient-to-br from-purple-900/60 via-[#1e2432] to-pink-900/60 rounded-lg p-6 shadow-lg border border-purple-900/20">
            <h3 className="text-lg font-semibold text-white mb-4">Blog & Tutorials</h3>
            <p className="text-gray-300 mb-4">
              Technical insights, coding challenges, and solutions discovered during the internship.
            </p>
            <Link 
              href="/blog"
              className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2"
            >
              Read Posts
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
