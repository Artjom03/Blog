import Link from 'next/link'

export default function Weeks() {
  const weeks = Array.from({ length: 15 }, (_, i) => ({
    number: i + 1,
    title: `Week ${i + 1}`,
    description: `Overview and learnings from week ${i + 1} of my internship.`
  }))

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex items-center gap-4">
          <Link 
            href="/"
            className="text-blue-600 hover:text-blue-800"
          >
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-gray-900">Weekly Reports</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {weeks.map((week) => (
            <article 
              key={week.number}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow h-full"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-semibold mb-2 text-gray-900">
                    {week.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{week.description}</p>
                  <Link 
                    href={`/weeks/${week.number}`}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Read more →
                  </Link>
                </div>
                <span className="text-3xl font-bold text-gray-200">
                  {week.number.toString().padStart(2, '0')}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
} 