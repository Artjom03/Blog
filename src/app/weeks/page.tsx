'use client'
import { useState } from 'react'
import Link from 'next/link'

type Tag = 'teambuilding' | 'code' | 'lessons-learned' | 'fails' | 'wins' | 'reflection' | 'all'

interface WeeklyReport {
  week: number
  title: string
  description: string
  date: string
  tags: Tag[]
}

export default function WeeklyReports() {
  const [selectedTag, setSelectedTag] = useState<Tag>('all')
  const [searchQuery, setSearchQuery] = useState('')

  const reports: WeeklyReport[] = [
    {
      week: 0,
      title: "Preparation Week",
      description: "Setting up development environment, learning about VAB, and preparing for the internship journey.",
      date: "January 29 - February 2, 2024",
      tags: ['reflection', 'lessons-learned']
    },
    {
      week: 1,
      title: "First Steps at VAB",
      description: "Introduction to the team, getting familiar with the workplace, and initial project briefing.",
      date: "February 5-9, 2024",
      tags: ['teambuilding', 'wins']
    },
    {
      week: 2,
      title: "Angular Fundamentals",
      description: "Deep dive into Angular framework, setting up first components, and learning about the project structure.",
      date: "February 12-16, 2024",
      tags: ['code', 'lessons-learned']
    },
    {
      week: 3,
      title: "Component Development",
      description: "Building reusable components, implementing responsive designs, and working with Angular services.",
      date: "February 19-23, 2024",
      tags: ['code', 'wins']
    },
    {
      week: 4,
      title: "Sitecore Integration",
      description: "Learning Sitecore CMS basics, understanding content management, and implementing first integrations.",
      date: "February 26 - March 1, 2024",
      tags: ['code', 'lessons-learned', 'fails']
    },
    {
      week: 5,
      title: "Advanced Angular Concepts",
      description: "Working with observables, state management, and complex component interactions.",
      date: "March 4-8, 2024",
      tags: ['code', 'wins', 'lessons-learned']
    },
    {
      week: 6,
      title: "Team Collaboration",
      description: "Participating in code reviews, team meetings, and improving communication skills.",
      date: "March 11-15, 2024",
      tags: ['teambuilding', 'reflection']
    },
    {
      week: 7,
      title: "Project Milestones",
      description: "Achieving key project goals, fixing critical bugs, and implementing new features.",
      date: "March 18-22, 2024",
      tags: ['wins', 'code']
    },
    {
      week: 8,
      title: "Performance Optimization",
      description: "Improving application performance, implementing best practices, and code refactoring.",
      date: "March 25-29, 2024",
      tags: ['code', 'wins', 'lessons-learned']
    }
  ]

  const tags: Tag[] = ['all', 'teambuilding', 'code', 'lessons-learned', 'fails', 'wins', 'reflection']

  const filteredReports = reports
    .filter(report => {
      // First apply tag filter
      if (selectedTag !== 'all' && !report.tags.includes(selectedTag)) {
        return false
      }
      
      // Then apply search filter
      const searchLower = searchQuery.toLowerCase()
      return searchQuery === '' || 
        report.title.toLowerCase().includes(searchLower) ||
        report.description.toLowerCase().includes(searchLower)
    })

  return (
    <main className="min-h-screen p-8 animate-fadeIn">
      <div className="max-w-7xl mx-auto">
        {/* Header with Search */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <h1 className="text-4xl font-bold text-white">Weekly Reports</h1>
          
          {/* Search Bar */}
          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="Search in reports..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 bg-[#1e2432] text-gray-300 rounded-lg 
                border border-gray-700 focus:border-blue-500 focus:ring-1 
                focus:ring-blue-500 outline-none transition-colors text-sm"
            />
          </div>
        </div>

        {/* Filter Tags */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {tags.map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedTag === tag
                    ? 'bg-blue-600 text-white'
                    : 'bg-[#1e2432] text-gray-300 hover:bg-[#252b3b]'
                }`}
              >
                {tag.replace('-', ' ')}
              </button>
            ))}
          </div>
        </div>

        {/* No Results Message */}
        {filteredReports.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-400">
              No reports found matching your search criteria.
            </p>
          </div>
        )}

        {/* Reports Grid */}
        <div className="grid gap-6">
          {filteredReports.map((report) => (
            <Link 
              key={report.week}
              href={`/weeks/${report.week}`}
              className="block"
            >
              <article className="bg-[#1e2432] rounded-lg p-6 hover:transform hover:-translate-y-1 transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-semibold text-white">
                    Week {report.week}: {report.title}
                  </h2>
                  <span className="text-gray-400 text-sm">{report.date}</span>
                </div>
                <p className="text-gray-300 mb-4">{report.description}</p>
                <div className="flex flex-wrap gap-2">
                  {report.tags.map(tag => (
                    <span
                      key={tag}
                      className={`px-3 py-1 rounded-full text-sm ${
                        tag === 'all' ? '' : {
                          'teambuilding': 'bg-purple-500/20 text-purple-400',
                          'code': 'bg-blue-500/20 text-blue-400',
                          'lessons-learned': 'bg-green-500/20 text-green-400',
                          'fails': 'bg-red-500/20 text-red-400',
                          'wins': 'bg-yellow-500/20 text-yellow-400',
                          'reflection': 'bg-indigo-500/20 text-indigo-400'
                        }[tag]
                      }`}
                    >
                      {tag.replace('-', ' ')}
                    </span>
                  ))}
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
} 