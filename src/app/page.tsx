import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen p-8 animate-fadeIn bg-gradient-to-br from-[#1e2432] via-[#23293a] to-[#2d3548] overflow-x-hidden">
      <div className="max-w-7xl mx-auto space-y-8 overflow-x-hidden">
        {/* Add a colorful accent bar */}
        <div className="h-2 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded mb-8"></div>
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-900/60 via-[#1e2432] to-purple-900/60 rounded-lg p-8 text-center shadow-lg border border-blue-900/20">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 animate-slideDown drop-shadow">
            Welcome to My Internship Journey
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Follow my 17-week experience as a Software Development Intern at VAB, 
            where I document my growth, challenges, and achievements in web development.
          </p>
          {/* Navigation inside hero for all screens */}
          <div className="flex flex-col md:flex-row gap-4 justify-center flex-wrap mt-6">
            <Link
              href="/about"
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 py-3 rounded-lg transition-colors shadow text-center"
            >
              About Me
            </Link>
            <Link
              href="/weeks"
              className="bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-white px-6 py-3 rounded-lg transition-colors shadow text-center"
            >
              View Weekly Reports
            </Link>
          </div>
        </div>

        {/* Latest Blog Post */}
        <div className="bg-gradient-to-br from-purple-900/60 via-[#1e2432] to-blue-900/60 rounded-lg p-8 shadow-lg border border-purple-900/20 overflow-x-hidden">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-2">
            <h2 className="text-2xl font-bold text-white">Latest Update</h2>
            <Link 
              href="/weeks"
              className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2"
            >
              View All →
            </Link>
          </div>
          <div className="bg-[#252b3b] rounded-lg p-6">
            <div className="flex flex-col sm:flex-row justify-between items-start mb-4 gap-2">
              <h3 className="text-xl font-semibold text-white">Week 16: Unit Testing</h3>
              <span className="text-sm text-gray-400">May 20-24, 2025</span>
            </div>
            <p className="text-gray-300 mb-4">
              This week focused on Unit testing and bug fixing. Key highlights include evaluation 
              meetings with mentors and significant progress in website styling improvements.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Goals</span>
              <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">Reflection</span>
            </div>
            <Link 
              href="/weeks/16"
              className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2"
            >
              Read More →
            </Link>
          </div>
        </div>

        {/* Quick Overview */}
        <div className="grid md:grid-cols-3 gap-6 overflow-x-hidden">
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

          <div className="bg-gradient-to-br from-blue-900/60 via-[#1e2432] to-purple-900/60 rounded-lg p-6 shadow-lg border border-blue-900/20">
            <h3 className="text-lg font-semibold text-white mb-4">About the Internship</h3>
            <p className="text-gray-300 mb-4">
              A 17-week journey at VAB, focusing on Angular development and Sitecore implementation.
            </p>
            <Link 
              href="/about"
              className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2"
            >
              Learn More →
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
