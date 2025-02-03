import Link from 'next/link'
import { notFound } from 'next/navigation'
import WeekSidebar from '@/app/components/WeekSidebar'

interface WeekData {
  number: number
  title: string
  description: string
  dateRange: string
  keyTechnologies: string[]
  achievements: string[]
  content: string
}

const weeks: WeekData[] = [
  {
    number: 0,
    title: "Before We Begin",
    description: "Journey to securing and preparing for the internship.",
    dateRange: "July 2024 - January 2025",
    keyTechnologies: ["Angular", "TypeScript", "MySQL"],
    achievements: ["Secured internship at VAB", "Completed documentation", "Started learning Angular"],
    content: `
      <h2>Preparation Phase</h2>
      <p>My journey towards this internship started well before the actual start date:</p>
      
      <div class="mt-6">
        <h3 class="text-lg font-medium text-gray-900">July 2024: The Search</h3>
        <p class="mt-2">Started actively searching for internship opportunities that would align with my career goals in software development.</p>
      </div>

      <div class="mt-6">
        <h3 class="text-lg font-medium text-gray-900">August 2024: The Opportunity</h3>
        <p class="mt-2">A significant milestone was reached when I discovered the opportunity at VAB:</p>
        <ul class="mt-2">
          <li>Had a successful Teams meeting with the company</li>
          <li>Received an office tour and met the team</li>
          <li>Got introduced to the company culture and work environment</li>
        </ul>
      </div>

      <div class="mt-6">
        <h3 class="text-lg font-medium text-gray-900">Documentation Phase</h3>
        <p class="mt-2">After the initial acceptance, I worked on finalizing the necessary paperwork:</p>
        <ul>
          <li>Completed and submitted VAB's required documentation</li>
          <li>Processed school internship contracts and agreements</li>
          <li>Received final approval from both VAB and school</li>
        </ul>
      </div>

      <div class="mt-6">
        <h3 class="text-lg font-medium text-gray-900">Technical Preparation</h3>
        <p class="mt-2">Upon learning that VAB uses Angular for development, I took initiative to prepare myself:</p>
        <ul>
          <li>Started self-learning Angular in my free time</li>
          <li>Transitioned from React knowledge to Angular concepts</li>
          <li>Focused on understanding key differences between React and Angular</li>
        </ul>
      </div>

      
    `
  },
  {
    number: 1,
    title: "Week 1",
    description: "First week at the internship.",
    dateRange: "February 3 - February 9, 2025",
    keyTechnologies: ["Angular", "TypeScript", "MySQL"],
    achievements: ["Environment setup", "First tasks completed", "Team introduction"],
    content: `
      <h2>First Week Highlights</h2>
      <p>My first week was filled with new experiences:</p>
      <ul>
        <li>Met the team and got introduced to the company culture</li>
        <li>Set up my workstation and development environment</li>
        <li>Started working on my first tasks</li>
      </ul>
    `
  },
  {
    number: 2,
    title: "Week 2",
    description: "Second week of learning and development.",
    dateRange: "February 10 - February 16, 2025",
    keyTechnologies: ["Angular", "TypeScript", "MySQL"],
    achievements: ["Code contributions", "Team meetings", "Project progress"],
    content: `
      <h2>Week 2 Progress</h2>
      <p>Building on the foundation from week 1:</p>
      <ul>
        <li>Deepened understanding of the codebase</li>
        <li>Started contributing to real projects</li>
        <li>Participated in team meetings</li>
      </ul>
    `
  },
  // ... weeks 3-14 with similar structure
  {
    number: 15,
    title: "Final Week",
    description: "Wrapping up the internship experience.",
    dateRange: "April 29 - May 3, 2024",
    keyTechnologies: ["Angular", "TypeScript", "MySQL"],
    achievements: ["Project completion", "Final presentation", "Feedback session"],
    content: `
      <h2>Final Week Reflections</h2>
      <p>Looking back on my internship journey:</p>
      <ul>
        <li>Completed all assigned projects</li>
        <li>Presented my work to the team</li>
        <li>Received feedback and future recommendations</li>
      </ul>
    `
  }
]

// Generate the middle weeks automatically
for (let i = 3; i <= 14; i++) {
  weeks.splice(i, 0, {
    number: i,
    title: `Week ${i}`,
    description: `Week ${i} of my internship journey.`,
    dateRange: `February ${3 + ((i-1) * 7)} - February ${9 + ((i-1) * 7)}, 2025`,
    keyTechnologies: ["Angular", "TypeScript", "MySQL"],
    achievements: ["Ongoing project work", "Learning new technologies", "Team collaboration"],
    content: `
      <h2>Week ${i} Overview</h2>
      <p>This week's focus and achievements:</p>
      <ul>
        <li>Continued working on ongoing projects</li>
        <li>Learned new technologies and methodologies</li>
        <li>Collaborated with team members on various tasks</li>
      </ul>
      <p>Key learnings and observations:</p>
      <ul>
        <li>Technical skills improved in specific areas</li>
        <li>Better understanding of development processes</li>
        <li>Enhanced communication with team members</li>
      </ul>
    `
  })
}

export default function WeekPage({ params }: { params: { id: string } }) {
  const weekNumber = parseInt(params.id)
  const week = weeks.find(w => w.number === weekNumber)

  if (!week) {
    notFound()
  }

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-bold text-gray-900">{week.title}</h1>
            <span className="text-5xl font-bold text-gray-200">
              {week.number === 0 ? '00' : week.number.toString().padStart(2, '0')}
            </span>
          </div>
          <p className="text-gray-600 mt-2">{week.dateRange}</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className={`${week.number === 0 ? 'lg:w-2/3' : 'w-full'} bg-white rounded-lg shadow-md p-8`}>
            <div 
              className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-h2:text-3xl prose-h3:text-2xl"
              dangerouslySetInnerHTML={{ __html: week.content }}
            />
          </div>

          {/* Sidebar only for Week 0 */}
          {week.number === 0 && (
            <WeekSidebar 
              keyTechnologies={week.keyTechnologies}
              achievements={week.achievements}
            />
          )}
        </div>

        {/* Navigation */}
        <div className="mt-8 flex justify-between">
          {week.number > 0 && (
            <Link
              href={`/weeks/${week.number - 1}`}
              className="text-blue-600 hover:text-blue-800"
            >
              ← Previous Week
            </Link>
          )}
          {week.number < weeks.length - 1 && (
            <Link
              href={`/weeks/${week.number + 1}`}
              className="text-blue-600 hover:text-blue-800 ml-auto"
            >
              Next Week →
            </Link>
          )}
        </div>
      </div>
    </main>
  )
} 