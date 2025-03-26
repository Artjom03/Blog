import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen p-8 animate-fadeIn">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Hero Section */}
        <div className="bg-[#1e2432] rounded-lg p-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 animate-slideDown">
            Welcome to My Internship Journey
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Follow my 15-week experience as a Software Development Intern at VAB, 
            where I document my growth, challenges, and achievements in web development.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/about"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              About Me
            </Link>
            <Link
              href="/weeks"
              className="bg-[#252b3b] hover:bg-[#2a3141] text-white px-6 py-3 rounded-lg transition-colors"
            >
              View Weekly Reports
            </Link>
          </div>
        </div>

        {/* Latest Blog Post */}
        <div className="bg-[#1e2432] rounded-lg p-8">
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
          <div className="bg-[#1e2432] rounded-lg p-6">
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

          <div className="bg-[#1e2432] rounded-lg p-6">
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

          <div className="bg-[#1e2432] rounded-lg p-6">
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
