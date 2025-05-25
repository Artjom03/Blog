import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <main className="min-h-screen p-8 animate-fadeIn bg-gradient-to-br from-[#1e2432] via-[#23293a] to-[#2d3548]">
      <div className="max-w-7xl mx-auto">
        {/* Add a colorful accent bar */}
        <div className="h-2 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded mb-8"></div>
        {/* Profile Section */}
        <div className="bg-gradient-to-br from-blue-900/60 via-[#1e2432] to-purple-900/60 rounded-lg p-8 mb-8 shadow-lg border border-blue-900/20">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-48 h-48 relative rounded-full overflow-hidden border-4 border-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
              <Image
                src="/me.jpeg"
                alt="Artjom's profile picture"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl font-bold text-white mb-4 drop-shadow">Artjom Kuzmenko</h1>
              <p className="text-gray-400 mb-6">
                Full-stack Development Student | Intern at VAB
              </p>
              <div className="flex gap-4 justify-center md:justify-start">
                <Link
                  href="https://www.linkedin.com/in/artjom-kuzmenko-187482265/"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  LinkedIn
                </Link>
                <Link
                  href="https://github.com/Artjom03"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  GitHub
                </Link>
                <Link
                  href="/cv.pdf"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Download CV
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* About VAB Section */}
        <div className="bg-gradient-to-br from-pink-900/60 via-[#1e2432] to-blue-900/60 rounded-lg p-8 mb-8 shadow-lg border border-pink-900/20">
          <h2 className="text-2xl font-bold text-white mb-4">About VAB</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300">
              VAB is a leading mobility organization in Belgium, providing roadside assistance, 
              car diagnostics, and travel assistance. Located in Zwijndrecht, VAB employs over 
              400 people and serves millions of customers.
            </p>
            <h3 className="text-xl font-semibold text-white mt-6 mb-3">My Role</h3>
            <p className="text-gray-300">
              As a Software Development Intern, I work on:
            </p>
            <ul className="list-disc pl-5 text-gray-300 mt-2">
              <li>Frontend development using Angular</li>
              <li>Sitecore CMS implementation</li>
              <li>Component development and integration</li>
              <li>Collaboration with the development team on various projects</li>
            </ul>
          </div>
        </div>

        {/* Skills Section */}
        <div className="bg-gradient-to-br from-blue-900/60 via-[#1e2432] to-purple-900/60 rounded-lg p-8 shadow-lg border border-blue-900/20">
          <h2 className="text-2xl font-bold text-white mb-6">Technical Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              'Angular', 'TypeScript', 'HTML/CSS', 'Git',
              'Sitecore', 'SQL', 'React', 'Node.js'
            ].map(skill => (
              <div 
                key={skill}
                className="bg-[#252b3b] p-4 rounded-lg text-gray-400 hover:bg-[#2a3141] transition-colors border border-blue-900/20"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}