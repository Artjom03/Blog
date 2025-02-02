import Link from 'next/link'

export default function Weeks() {
  const weeks = [
    {
      number: 0,
      title: "Before We Begin",
      description: "Introduction and preparation before starting the internship."
    },
    ...Array.from({ length: 15 }, (_, i) => ({
      number: i + 1,
      title: `Week ${i + 1}`,
      description: `Overview and learnings from week ${i + 1} of my internship.`
    }))
  ]

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Weekly Reports</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {weeks.map((week) => (
            <Link 
              key={week.number}
              href={`/weeks/${week.number}`}
              className="block group"
            >
              <article className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all h-full">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-2xl font-semibold mb-2 text-gray-900">
                      {week.title}
                    </h2>
                    <p className="text-gray-600 mb-4">{week.description}</p>
                    <span className="text-blue-600 hover:text-blue-800 font-medium">
                      Read more →
                    </span>
                  </div>
                  <span className="text-3xl font-bold text-gray-200 transition-colors group-hover:text-gray-400">
                    {week.number === 0 ? '00' : week.number.toString().padStart(2, '0')}
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
} 