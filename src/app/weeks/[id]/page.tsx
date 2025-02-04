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
    <main className="min-h-screen p-8 animate-fadeIn">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white animate-slideDown">
              {week.title}
            </h1>
            <p className="text-gray-400 mt-2">{week.dateRange}</p>
          </div>
          <span className="text-6xl font-bold text-gray-700">
            {week.number === 0 ? '00' : week.number.toString().padStart(2, '0')}
          </span>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className={`${week.number === 0 ? 'lg:w-2/3' : 'w-full'} bg-[#1e2432] rounded-lg shadow-md p-8`}>
            <div 
              className="prose prose-invert max-w-none prose-headings:text-white prose-p:text-gray-400 prose-li:text-gray-400 prose-strong:text-white"
              dangerouslySetInnerHTML={{ __html: week.content }}
            />
          </div>

          {/* Sidebar only for Week 0 */}
          {week.number === 0 && (
            <div className="lg:w-1/3 space-y-6">
              {/* Technologies Used */}
              <div className="bg-[#1e2432] rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4 text-white">Technologies Used</h2>
                <div className="flex flex-wrap gap-2">
                  {week.keyTechnologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Achievements */}
              <div className="bg-[#1e2432] rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4 text-white">Key Achievements</h2>
                <ul className="space-y-3">
                  {week.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-400">
                      <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Progress */}
              <div className="bg-[#1e2432] rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4 text-white">Progress</h2>
                <div className="space-y-2">
                  <div className="flex justify-between text-gray-400">
                    <span>Completion:</span>
                    <span>100%</span>
                  </div>
                  <div className="w-full bg-[#252b3b] rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full w-full"></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="mt-8 flex justify-between">
          {week.number > 0 && (
            <Link
              href={`/weeks/${week.number - 1}`}
              className="text-blue-400 hover:text-blue-300 font-medium"
            >
              ← Previous Week
            </Link>
          )}
          {week.number < weeks.length - 1 && (
            <Link
              href={`/weeks/${week.number + 1}`}
              className="text-blue-400 hover:text-blue-300 font-medium ml-auto"
            >
              Next Week →
            </Link>
          )}
        </div>
      </div>
    </main>
  )
} 