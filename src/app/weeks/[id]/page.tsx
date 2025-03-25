import Link from 'next/link'
import { notFound } from 'next/navigation'
import WeekSidebar from '@/app/components/WeekSidebar'
import WeekDays from '@/app/components/WeekDays'

interface WeekData {
  number: number
  title: string
  description: string
  dateRange: string
  keyTechnologies: string[]
  achievements: string[]
  content: string
  days?: {
    title: string
    tasks: string[]
    learnings?: string[]
  }[]
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
  // Start with February 17 (week 3's start)
  const startDate = new Date(2025, 1, 17); // Month is 0-based, so 1 is February
  startDate.setDate(startDate.getDate() + ((i-3) * 7)); // Add weeks
  
  const endDate = new Date(startDate);
  endDate.setDate(endDate.getDate() + 4); // Add 4 days to get to Friday

  const formatDateRange = (start: Date, end: Date) => {
    const startMonth = start.toLocaleString('default', { month: 'long' });
    const endMonth = end.toLocaleString('default', { month: 'long' });
    
    if (startMonth === endMonth) {
      return `${startMonth} ${start.getDate()}-${end.getDate()}, 2025`;
    } else {
      return `${startMonth} ${start.getDate()} - ${endMonth} ${end.getDate()}, 2025`;
    }
  };

  weeks.splice(i, 0, {
    number: i,
    title: `Week ${i}`,
    description: `Week ${i} of my internship journey.`,
    dateRange: formatDateRange(startDate, endDate),
    keyTechnologies: ["Angular", "TypeScript", "MySQL"],
    achievements: ["Ongoing project work", "Learning new technologies", "Team collaboration"],
    content: `
      <div class="flex flex-col md:flex-row gap-8 mb-8">
        <div class="md:w-1/2">
          <h2 class="text-xl font-semibold mb-4">This week's focus and achievements:</h2>
          <ul class="space-y-2">
            <li>Continued working on ongoing projects</li>
            <li>Learned new technologies and methodologies</li>
            <li>Collaborated with team members on various tasks</li>
          </ul>
        </div>
        
        <div class="md:w-1/2">
          <h2 class="text-xl font-semibold mb-4">Key learnings and observations:</h2>
          <ul class="space-y-2">
            <li>Technical skills improved in specific areas</li>
            <li>Better understanding of development processes</li>
            <li>Enhanced communication with team members</li>
          </ul>
        </div>
      </div>
    `
  })
}

// Update the content for weeks 1-15
const weekDays = {
  number: 1,
  days: [
    {
      title: "Monday",
      tasks: [
        "Team introduction and office tour",
        "Received work laptop and domain access",
        "Set up development environment",
        "Attended 2 team meetings",
        "Completed Hoxhunt cyber security training"
      ],
      learnings: [
        "Company environment and team structure",
        "Security protocols and best practices",
        "Team bonding (Lunch with ICT team at McDonald's)"
      ]
    },
    {
      title: "Tuesday",
      tasks: [
        "Explored VAB's Angular project",
        "Started phone number form component with country flags",
        "Set up VAB backend environment",
        "Worked on assigned ticket from colleague",
        "Resolved Git push issues"
      ],
      learnings: [
        "Project structure and workflow",
        "Sprint planning process",
        "Git troubleshooting",
        "Security importance (laptop incident)"
      ]
    },
    {
      title: "Wednesday",
      tasks: [
        "Fixed local dev.vab.be access issue",
        "Completed assigned ticket",
        "Studied RxJS fundamentals",
        "Watched tutorial videos on RxJS"
      ],
      learnings: [
        "Local development environment troubleshooting",
        "RxJS concepts and implementation",
        "Ticket completion workflow"
      ]
    },
    {
      title: "Thursday",
      tasks: [
        "Researched Sitecore fields and templates",
        "Observed cross-team project meeting",
        "Created Sitecore fields for phone number component",
        "Completed backend setup for component",
        "Started frontend preparation"
      ],
      learnings: [
        "Sitecore CMS basics",
        "Component development workflow",
        "Backend-frontend integration process"
      ]
    },
    {
      title: "Friday",
      tasks: [
        "Weekly review",
        "Documentation",
        "Planning next week"
      ],
      learnings: [
        "Week reflections",
        "Areas for improvement"
      ]
    }
  ]
}

// After the weekDays definition, add specific content for week 2
const week2Days = {
  number: 2,
  days: weekDays.days.map(day => ({
    ...day,
    tasks: day.title === "Friday" ? [
      "Added additional requirements",
      "Found and documented a bug (to be fixed next week)",
      "Weekly review",
      "Documentation"
    ] : day.tasks,
    learnings: day.title === "Friday" ? [
      "Bug identification and documentation",
      "Week reflections"
    ] : day.learnings
  }))
}

// Add week 3 specific content
const week3Days = {
  number: 3,
  days: [
    {
      title: "Monday",
      tasks: [
        "Investigated reported bug",
        "Fixed initial bug issues",
        "Added custom drop-down implementation",
        "Encountered and documented new bugs"
      ],
      learnings: [
        "Bug investigation process",
        "Custom dropdown development",
        "Issue tracking and documentation"
      ]
    },
    {
      title: "Tuesday",
      tasks: [
        "Continued bug fixes",
        "Completed component development",
        "Prepared component for mentor review"
      ],
      learnings: [
        "Component optimization",
        "Code review preparation",
        "Bug resolution strategies"
      ]
    },
    {
      title: "Wednesday",
      tasks: [
        "Code formatting and optimization",
        "Added extra Sitecore field",
        "Implemented backend changes",
        "Integrated new field in frontend"
      ],
      learnings: [
        "Code optimization techniques",
        "Full-stack integration process",
        "Sitecore field management"
      ]
    },
    {
      title: "Thursday",
      tasks: [
        "Finalized component development",
        "Component review and approval",
        "Started new ticket from colleague"
      ],
      learnings: [
        "Component completion process",
        "Cross-team collaboration",
        "Task transition management"
      ]
    },
    {
      title: "Friday",
      tasks: [
        "Completed assigned ticket",
        "Met with mentor about new major project",
        "Project planning and discussion"
      ],
      learnings: [
        "Project planning",
        "Mentor collaboration",
        "Long-term project preparation"
      ]
    }
  ]
}

// Add week 4 specific content
const week4Days = {
  number: 4,
  days: [
    {
      title: "Monday",
      tasks: [
        "Morning: School intervision moment",
        "Afternoon: Started Sitecore project section",
        "Created initial layout",
        "Started placeholder settings implementation"
      ],
      learnings: [
        "School-work balance management",
        "Sitecore layout fundamentals",
        "Placeholder settings basics"
      ]
    },
    {
      title: "Tuesday",
      tasks: [
        "Completed placeholder settings",
        "Started creating renderings",
        "Project structure optimization"
      ],
      learnings: [
        "Sitecore rendering creation",
        "Placeholder settings configuration"
      ]
    },
    {
      title: "Wednesday",
      tasks: [
        "Continued Sitecore development",
        "Attended event at Antwerp Expo",
        "Documentation update"
      ],
      learnings: [
        "Sitecore development basics"
      ]
    },
    {
      title: "Thursday",
      tasks: [
        "Attended PI Planning",
        "Started template development",
        "Afternoon development session"
      ],
      learnings: [
        "PI Planning process",
        "Template development basics"
      ]
    },
    {
      title: "Friday",
      tasks: [
        "Continued Sitecore development",
        "Advanced template work",
        "Template structure refinement"
      ],
      learnings: [
        "Template development techniques"
      ]
    }
  ]
}

// Update week 5's content
const week5Days = {
  number: 5,
  days: [
    {
      title: "Monday",
      tasks: [
        "Continued Sitecore development",
        "Finalized all Sitecore configurations"
      ],
      learnings: [
        "Sitecore configuration completion"
      ]
    },
    {
      title: "Tuesday",
      tasks: [
        "Sitecore review with mentor",
        "Started Angular component development",
        "Component architecture planning"
      ],
      learnings: [
        "Mentor feedback implementation",
        "Angular component structure"
      ]
    },
    {
      title: "Wednesday",
      tasks: [
        "Continued Angular component development",
        "Worked on previously rejected ticket"
      ],
      learnings: [
        "Component development process",
        "Handling feedback and revisions"
      ]
    },
    {
      title: "Thursday",
      tasks: [
        "Component creation and functionality implementation",
        "Testing and debugging"
      ],
      learnings: [
        "Angular component functionality",
        "Testing procedures"
      ]
    },
    {
      title: "Friday",
      tasks: [
        "Continued component development",
        "Component functionality implementation"
      ],
      learnings: [
        "Component integration",
        "Angular development practices"
      ]
    }
  ]
}

// Update week 6's content - modify Friday
const week6Days = {
  number: 6,
  days: [
    {
      title: "Monday",
      tasks: [
        "Met new Scrum Master",
        "Team introduction session",
        "Component development",
        "Visual testing setup with mentor (ongoing)"
      ],
      learnings: [
        "Team dynamics",
        "Visual testing preparation"
      ]
    },
    {
      title: "Tuesday",
      tasks: [
        "Continued component development",
        "Independent work (mentor unavailable)"
      ],
      learnings: [
        "Independent problem-solving",
        "Component development progress"
      ]
    },
    {
      title: "Wednesday",
      tasks: [
        "Angular component development",
        "Component implementation"
      ],
      learnings: [
        "Angular development techniques",
        "Component structure"
      ]
    },
    {
      title: "Thursday",
      tasks: [
        "Angular development continuation",
        "Git issue resolution with colleague",
        "Extended Git troubleshooting session"
      ],
      learnings: [
        "Git problem-solving",
        "Team collaboration",
        "Version control management"
      ]
    },
    {
      title: "Friday",
      tasks: [
        "Set up visual testing environment",
        "Component testing and adjustments"
      ],
      learnings: [
        "Visual implementation"
      ]
    }
  ]
}

// Update week 7's content - modify Tuesday
const week7Days = {
  number: 7,
  days: [
    {
      title: "Monday",
      tasks: [
        "Component and Sitecore implementation work",
        "Team lunch (Farewell to colleagues)",
        "Attended retrospective meeting"
      ],
      learnings: [
        "Team dynamics",
        "Sprint retrospective process"
      ]
    },
    {
      title: "Tuesday",
      tasks: [
        "Component development with Sitecore",
        "Set up test environment"
      ],
      learnings: [
        "Test environment setup",
        "Visual testing procedures"
      ]
    },
    {
      title: "Wednesday",
      tasks: [
        "Continued component development",
        "Sitecore integration work"
      ],
      learnings: [
        "Component integration",
        "Sitecore development"
      ]
    },
    {
      title: "Thursday",
      tasks: [
        "Follow-up on previous day's work",
        "Component refinements"
      ],
      learnings: [
        "Component optimization",
        "Development continuity"
      ]
    },
    {
      title: "Friday",
      tasks: [
        "Continued development from previous days",
        "Project progress review"
      ],
      learnings: [
        "Progress tracking",
        "Development iteration"
      ]
    }
  ]
}

// Add week 8's content
const week8Days = {
  number: 8,
  days: [
    {
      title: "Monday",
      tasks: [
        "Website component development",
        "Layout improvements",
        "Evaluation meeting with mentor",
        "Progress review"
      ],
      learnings: [
        "Mentor feedback",
        "Website layout optimization"
      ]
    },
    {
      title: "Tuesday",
      tasks: [
        "Component development continuation",
        "Website styling improvements",
        "Bug fixes and problem solving"
      ],
      learnings: [
        "Bug resolution",
        "Component styling"
      ]
    }
  ]
}

// Update the weeks array to include week 7 and 8 content
for (let i = 1; i <= 14; i++) {
  weeks[i] = {
    ...weeks[i],
    days: i === 2 ? week2Days.days : 
          i === 3 ? week3Days.days :
          i === 4 ? week4Days.days :
          i === 5 ? week5Days.days :
          i === 6 ? week6Days.days :
          i === 7 ? week7Days.days :
          i === 8 ? week8Days.days :
          weekDays.days.map(day => ({
            ...day,
            tasks: day.tasks,
            learnings: day.learnings
          }))
  }
}

export default function WeekPage({ params }: { params: { id: string } }) {
  const weekNumber = parseInt(params.id)
  const week = weeks.find(w => w.number === weekNumber)

  if (!week) {
    notFound()
  }

  return (
    <main className="min-h-screen p-4 sm:p-8 animate-fadeIn">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start mb-6 sm:mb-8">
          <div className="text-center sm:text-left mb-4 sm:mb-0">
            <h1 className="text-3xl sm:text-4xl font-bold text-white animate-slideDown hover:scale-105 transition-transform duration-300">
              {week.title}
            </h1>
            <p className="text-gray-400 mt-2 animate-fadeIn text-sm sm:text-base">{week.dateRange}</p>
          </div>
          <span className="text-4xl sm:text-6xl font-bold text-gray-700 hover:text-gray-500 transition-colors duration-300">
            {week.number === 0 ? '00' : week.number.toString().padStart(2, '0')}
          </span>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 sm:gap-8">
          {/* Main Content */}
          <div className={`${week.number === 0 ? 'lg:w-2/3' : 'w-full'} bg-[#1e2432] rounded-lg shadow-md p-4 sm:p-8 hover:shadow-lg transition-shadow duration-300 animate-slideUp`}>
            <div 
              className="prose prose-invert max-w-none prose-headings:text-white prose-p:text-gray-400 prose-li:text-gray-400 prose-strong:text-white prose-sm sm:prose-base [&_ul]:list-none [&_ul]:pl-0"
              dangerouslySetInnerHTML={{ __html: week.content }}
            />
            {week.number > 0 && week.days && (
              <WeekDays days={week.days} />
            )}
          </div>

          {/* Sidebar only for Week 0 */}
          {week.number === 0 && (
            <div className="lg:w-1/3 space-y-4 sm:space-y-6">
              {/* Technologies Used */}
              <div className="bg-[#1e2432] rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
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
              <div className="bg-[#1e2432] rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
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
              <div className="bg-[#1e2432] rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
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
        <div className="mt-6 sm:mt-8 flex justify-between text-sm sm:text-base">
          {week.number > 0 && (
            <Link
              href={`/weeks/${week.number - 1}`}
              className="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-300 hover:-translate-x-1 transform px-3 py-2 rounded-lg hover:bg-[#1e2432]"
            >
              ← Previous Week
            </Link>
          )}
          {week.number < weeks.length - 1 && (
            <Link
              href={`/weeks/${week.number + 1}`}
              className="text-blue-400 hover:text-blue-300 font-medium ml-auto transition-colors duration-300 hover:translate-x-1 transform px-3 py-2 rounded-lg hover:bg-[#1e2432]"
            >
              Next Week →
            </Link>
          )}
        </div>
      </div>
    </main>
  )
} 