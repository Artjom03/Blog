import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  const skills = [
    { name: "Frontend", items: ["Angular", "TypeScript", "Tailwind CSS"] },
    { name: "Backend", items: ["Node.js", "MySQL"] },
    { name: "Tools", items: ["Git", "VS Code","Visual Studio", "Docker", "Azure"] },
  ]

  return (
    <main className="min-h-screen p-8 animate-fadeIn">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900 animate-slideDown">
          My Internship Journey
        </h1>

        {/* About Me Section */}
        <div className="mb-12 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow animate-slideRight">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="relative w-48 h-48 rounded-lg overflow-hidden shadow-md flex-shrink-0">
              <Image
                src="/me.jpeg"
                alt="Artjom Kuzmenko"
                width={192}
                height={192}
                className="object-cover"
                priority
              />
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">About Me</h2>
              <div className="space-y-2 text-gray-700">
                <p><span className="font-medium">Name:</span> Kuzmenko Artjom</p>
                <p><span className="font-medium">Age:</span> 21</p>
                <p><span className="font-medium">Activity:</span> Programming</p>
                <p className="mt-4">
                  Passionate software developer with a focus on web technologies. Currently pursuing an internship
                  to gain hands-on experience in real-world projects.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-12 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">Technical Skills</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((category) => (
              <div key={category.name}>
                <h3 className="font-medium text-gray-900 mb-3">{category.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Weekly Reports Section */}
        <div className="grid gap-6">
          <article className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow animate-slideUp">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Weekly Reports</h2>
            <p className="text-gray-600 mb-6">
              View detailed reports of my internship experience, organized by weeks.
              Follow my journey as I learn and grow in a professional development environment.
            </p>
            <Link 
              href="/weeks" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
            >
              View all weeks →
            </Link>
          </article>
        </div>
      </div>
    </main>
  )
}
