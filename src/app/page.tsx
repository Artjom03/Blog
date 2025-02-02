import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen p-8 animate-fadeIn">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900 animate-slideDown">
          My Internship Journey
        </h1>

        <div className="mb-12 p-6 bg-white rounded-lg shadow-md animate-slideRight">
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
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid gap-6">
          <article className="p-6 bg-white rounded-lg shadow-md animate-slideUp">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Weekly Reports</h2>
            <p className="text-gray-600 mb-6">
              View detailed reports of my internship experience, organized by weeks.
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
