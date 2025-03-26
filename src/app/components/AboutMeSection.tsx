import Image from 'next/image'
import Link from 'next/link'

export default function AboutMeSection() {
  return (
    <div className="space-y-8">
      {/* Profile Section */}
      <div className="p-6 bg-[#1e2432] rounded-lg shadow-md hover:shadow-lg transition-shadow animate-slideRight">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="relative w-48 h-48 rounded-lg overflow-hidden shadow-md flex-shrink-0">
            <Image
              src="/images/me.jpg"
              alt="Artjom Kuzmenko"
              width={192}
              height={192}
              className="object-cover"
              priority
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-white">About Me</h2>
            <div className="space-y-2 text-gray-300">
              <p><span className="font-medium text-white">Name:</span> Kuzmenko Artjom</p>
              <p><span className="font-medium text-white">Education:</span> Software Development Student at Thomas More</p>
              <p><span className="font-medium text-white">Location:</span> Antwerp, Belgium</p>
              <div className="flex gap-4 mt-6">
                <Link
                  href="https://linkedin.com/in/your-profile"
                  target="_blank"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
                >
                  LinkedIn
                </Link>
                <Link
                  href="https://github.com/your-profile"
                  target="_blank"
                  className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md transition-colors"
                >
                  GitHub
                </Link>
                <Link
                  href="/cv.pdf"
                  target="_blank"
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition-colors"
                >
                  Download CV
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Internship Info Section */}
      <div className="p-6 bg-[#1e2432] rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-white">About My Internship</h2>
        <div className="space-y-4 text-gray-300">
          <div>
            <h3 className="text-lg font-medium text-white mb-2">Company</h3>
            <p>VAB - Leading mobility organization in Belgium</p>
            <p>Location: Zwijndrecht, Belgium</p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-white mb-2">My Role</h3>
            <p>Software Development Intern (February - May 2024)</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Frontend development using Angular</li>
              <li>Working with Sitecore CMS</li>
              <li>Component development and integration</li>
              <li>Collaborating with the development team</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium text-white mb-2">Key Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {['Angular', 'TypeScript', 'Sitecore', 'Git', 'Azure DevOps'].map((tech) => (
                <span 
                  key={tech}
                  className="bg-[#252b3b] px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 