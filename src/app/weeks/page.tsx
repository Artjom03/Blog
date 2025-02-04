'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Weeks() {
  const [searchQuery, setSearchQuery] = useState('')
  const [hoveredWeek, setHoveredWeek] = useState<number | null>(null)

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

  const filteredWeeks = weeks.filter(week => 
    week.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    week.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <main className="min-h-screen p-8 animate-fadeIn">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-white animate-slideDown mb-4 md:mb-0">
            Weekly Reports
          </h1>
          
          {/* Search Bar */}
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search in weeks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 bg-[#2d3548] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
              >
                ×
              </button>
            )}
          </div>
        </div>

        {/* Interactive Timeline */}
        <div className="mb-12">
          <div className="flex items-center justify-between px-4">
            {weeks.map((week) => (
              <Link 
                key={week.number}
                href={`/weeks/${week.number}`}
                className="relative cursor-pointer"
                onMouseEnter={() => setHoveredWeek(week.number)}
                onMouseLeave={() => setHoveredWeek(null)}
              >
                <div className={`w-6 h-6 rounded-full ${
                  hoveredWeek === week.number ? 'bg-blue-400 scale-150' : 'bg-[#2d3548]'
                } transition-all duration-200`} />
                <div className={`absolute -bottom-8 left-1/2 -translate-x-1/2 ${
                  hoveredWeek === week.number ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'
                } transition-all duration-200 whitespace-nowrap bg-[#2d3548] text-white px-2 py-1 rounded text-sm z-10`}>
                  {week.title}
                </div>
              </Link>
            ))}
          </div>
        </div>

        {filteredWeeks.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No weeks found matching your search.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredWeeks.map((week) => (
              <Link 
                key={week.number}
                href={`/weeks/${week.number}`}
                className="block"
              >
                <div className="p-6 bg-[#1e2432] rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-2xl font-semibold mb-2 text-white">
                        {week.title}
                      </h2>
                      <p className="text-gray-100 mb-4">{week.description}</p>
                      <span className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center">
                        Read more
                      </span>
                    </div>
                    <span className="text-4xl font-bold text-gray-400">
                      {week.number === 0 ? '00' : week.number.toString().padStart(2, '0')}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  )
} 