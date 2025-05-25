import Link from 'next/link'
import { notFound } from 'next/navigation'
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

// Move all .days assignments INSIDE the weeks array definition, not after it.
// For each week object that has days, include the days property directly in the object.

const weeks: WeekData[] = [
  {
    number: 0,
    title: "Preparation Week",
    description: "Journey to securing and preparing for the internship.",
    dateRange: "July 2024 - January 2025",
    keyTechnologies: ["Angular", "TypeScript", "MySQL"],
    achievements: ["Secured internship at VAB", "Completed documentation", "Started learning Angular"],
    content: `
      <h2>Preparation Phase</h2>
      <p>My journey towards this internship started well before the actual start date. Here is a detailed overview of the steps and experiences leading up to my first day at VAB:</p>
      
      <div class="mt-6">
        <h3 class="text-lg font-medium text-gray-900">July 2024: The Search</h3>
        <p class="mt-2">I began actively searching for internship opportunities that would align with my career goals in software development. I researched companies, prepared my CV, and reached out to potential employers.</p>
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

      <div class="mt-6">
        <h3 class="text-lg font-medium text-gray-900">Setting Goals</h3>
        <p class="mt-2">Before starting, I set personal goals for my internship:</p>
        <ul>
          <li>Gain hands-on experience with Angular and modern web development</li>
          <li>Understand real-world software development workflows</li>
          <li>Improve my teamwork and communication skills</li>
          <li>Deliver meaningful contributions to the company</li>
        </ul>
      </div>
    `
  },
  {
    number: 1,
    title: "First Steps at VAB",
    description: "First week at the internship.",
    dateRange: "February 3 - February 9, 2025",
    keyTechnologies: ["Angular", "TypeScript", "MySQL"],
    achievements: ["Environment setup", "First tasks completed", "Team introduction"],
    content: `
      <h2>First Week Highlights</h2>
      <p>My first week was filled with new experiences:</p>
      <ul>
        <li>Team introduction and office tour</li>
        <li>Received work laptop and domain access</li>
        <li>Set up development environment</li>
        <li>Attended 2 team meetings</li>
        <li>Completed Hoxhunt cyber security training</li>
      </ul>
    `,
    days: [
      { title: "Monday", tasks: ["Team introduction and office tour", "Received work laptop and domain access", "Set up development environment", "Attended 2 team meetings", "Completed Hoxhunt cyber security training"], learnings: ["Company environment and team structure", "Security protocols and best practices", "Team bonding"] },
      { title: "Tuesday", tasks: ["Explored VAB's Angular project", "Started phone number form component with country flags", "Set up VAB backend environment", "Worked on assigned ticket from colleague", "Resolved Git push issues"], learnings: ["Project structure and workflow", "Sprint planning process", "Git troubleshooting", "Security importance"] },
      { title: "Wednesday", tasks: ["Fixed local dev.vab.be access issue", "Completed assigned ticket", "Studied RxJS fundamentals", "Watched tutorial videos on RxJS"], learnings: ["Local development environment troubleshooting", "RxJS concepts and implementation", "Ticket completion workflow"] },
      { title: "Thursday", tasks: ["Researched Sitecore fields and templates", "Observed cross-team project meeting", "Created Sitecore fields for phone number component", "Completed backend setup for component", "Started frontend preparation"], learnings: ["Sitecore CMS basics", "Component development workflow", "Backend-frontend integration process"] },
      { title: "Friday", tasks: ["Weekly review", "Documentation", "Planning next week"], learnings: ["Week reflections", "Areas for improvement"] }
    ]
  },
  {
    number: 2,
    title: "Angular Fundamentals",
    description: "Deep dive into Angular framework, setting up first components, and learning about the project structure.",
    dateRange: "February 10-16, 2025",
    keyTechnologies: ["Angular", "TypeScript"],
    achievements: ["Learned Angular basics", "Set up first components", "Understood project structure"],
    content: `
      <h2>Week 2 Highlights</h2>
      <p>This week focused on learning Angular fundamentals and setting up the project:</p>
    `,
    days: [
      { title: "Monday", tasks: [
        "Continued working on the component.",
        "Mentor came to the internship location.",
        "Progress on the component, everything is getting clearer and going better.",
        "Had a meeting with my supervisor.",
        "Component was almost finished, a few problems during testing.",
        "Did a PR, can continue tomorrow."
      ], learnings: ["Component progress"] },
      { title: "Tuesday", tasks: [
        "Checked my component on test.",
        "Would not load, sat together with mentor.",
        "Found the problem, now continue working, solve it and start on CSS."
      ], learnings: ["Debugging and CSS"] },
      { title: "Wednesday", tasks: [
        "Fixed input, the component works completely."
      ], learnings: ["Input handling"] },
      { title: "Thursday", tasks: [
        "Day off."
      ], learnings: ["N/A"] },
      { title: "Friday", tasks: [
        "A few small things still needed to be added.",
        "Meanwhile found a bug, not finished. For next week."
      ], learnings: ["Bug identification"] }
    ]
  },
  {
    number: 3,
    title: "Component Development",
    description: "Building reusable components, implementing responsive designs, and working with Angular services.",
    dateRange: "February 17-21, 2025",
    keyTechnologies: ["Angular", "TypeScript"],
    achievements: ["Built reusable components", "Implemented responsive designs", "Worked with Angular services"],
    content: `
      <h2>Week 3 Highlights</h2>
      <p>This week focused on component development and responsive design:</p>
    `,
    days: [
      { title: "Monday", tasks: [
        "Investigated bug.",
        '"Fixed", then had to add a custom drop-down.',
        "A few other bugs appeared."
      ], learnings: ["Bug fixing"] },
      { title: "Tuesday", tasks: [
        "Continued working on the bugs.",
        "Component is finished, needs to be reviewed by mentor."
      ], learnings: ["Bug resolution"] },
      { title: "Wednesday", tasks: [
        "Formatted and shortened code.",
        "Had to add something else. An extra field. First via Sitecore, then backend, and finally integrated into the frontend."
      ], learnings: ["Code optimization"] },
      { title: "Thursday", tasks: [
        "Component finished.",
        "Received a new ticket from another developer."
      ], learnings: ["Component completion"] },
      { title: "Friday", tasks: [
        "Ticket finished.",
        "In the afternoon, meeting with supervisor to start a big project."
      ], learnings: ["Project planning"] }
    ]
  },
  {
    number: 4,
    title: "Sitecore Integration",
    description: "Learning Sitecore CMS basics, understanding content management, and implementing first integrations.",
    dateRange: "February 24-28, 2025",
    keyTechnologies: ["Sitecore", "Angular"],
    achievements: ["Learned Sitecore basics", "Implemented first integrations", "Understood content management"],
    content: `
      <h2>Week 4 Highlights</h2>
      <p>This week focused on integrating Sitecore CMS with the project:</p>
    `,
    days: [
      { title: "Monday", tasks: [
        "In the morning at school for an intervision session.",
        "Afternoon went to the internship location to start on the Sitecore part of the project."
      ], learnings: ["Sitecore basics"] },
      { title: "Tuesday", tasks: [
        "Continued working on Sitecore."
      ], learnings: ["Sitecore development"] },
      { title: "Wednesday", tasks: [
        "Continued working on Sitecore.",
        "Went to an event at Antwerp Expo in the afternoon."
      ], learnings: ["Event insights"] },
      { title: "Thursday", tasks: [
        "PI Planning.",
        "Continued working in the afternoon."
      ], learnings: ["PI Planning"] },
      { title: "Friday", tasks: [
        "Worked on Sitecore."
      ], learnings: ["Sitecore progress"] }
    ]
  },
  {
    number: 5,
    title: "Advanced Angular Concepts",
    description: "Working with observables, state management, and complex component interactions.",
    dateRange: "March 3-7, 2025",
    keyTechnologies: ["Angular", "TypeScript", "RxJS"],
    achievements: ["Learned observables", "Implemented state management", "Handled complex interactions"],
    content: `
      <h2>Week 5 Highlights</h2>
      <p>This week focused on advanced Angular concepts:</p>
    `,
    days: [
      { title: "Monday", tasks: [
        "Still working on Sitecore."
      ], learnings: ["Sitecore progress"] },
      { title: "Tuesday", tasks: [
        "Started on the Angular code."
      ], learnings: ["Angular basics"] },
      { title: "Wednesday", tasks: [
        "Continued working in Angular on the components."
      ], learnings: ["Component development"] },
      { title: "Thursday", tasks: [
        "Continued working in Angular on the components.",
        "Ticket from last week was rejected, so had to continue working on that, finished it and then continued working on the components."
      ], learnings: ["Ticket resolution"] },
      { title: "Friday", tasks: [
        "Continued creating and making components work."
      ], learnings: ["Component functionality"] }
    ]
  },
  {
    number: 6,
    title: "Team Collaboration",
    description: "Participating in code reviews, team meetings, and improving communication skills.",
    dateRange: "March 10-14, 2025",
    keyTechnologies: ["Angular", "TypeScript"],
    achievements: ["Participated in code reviews", "Improved communication skills", "Collaborated with the team"],
    content: `
      <h2>Week 6 Highlights</h2>
      <p>This week focused on team collaboration and communication:</p>
    `,
    days: [
      { title: "Monday", tasks: [
        "New scrum master, had a short introduction with the team.",
        "Worked on the components.",
        "Sat together with mentor to set up everything for visual testing. Was not finished yet."
      ], learnings: ["Scrum process"] },
      { title: "Tuesday", tasks: [
        "Continued working on the components.",
        "Mentor was busy today, no time to review further."
      ], learnings: ["Independent work"] },
      { title: "Wednesday", tasks: [
        "Worked on the components in Angular."
      ], learnings: ["Component development"] },
      { title: "Thursday", tasks: [
        "Worked in Angular.",
        "Sat together with a colleague regarding a problem I had with Git. Took quite a while."
      ], learnings: ["Git troubleshooting"] },
      { title: "Friday", tasks: [
        "Issue fixed, now I can visually test/see.",
        "Can now adjust what doesn't work well."
      ], learnings: ["Testing and debugging"] }
    ]
  },
  {
    number: 7,
    title: "Project Milestones",
    description: "Achieving key project goals, fixing critical bugs, and implementing new features.",
    dateRange: "March 17-21, 2025",
    keyTechnologies: ["Angular", "TypeScript"],
    achievements: ["Achieved project goals", "Fixed critical bugs", "Implemented new features"],
    content: `
      <h2>Week 7 Highlights</h2>
      <p>This week focused on achieving project milestones:</p>
    `,
    days: [
      { title: "Monday", tasks: [
        "Continued working on the components/Sitecore implementation.",
        "Went out for lunch in the afternoon, as a farewell for 2 colleagues.",
        "Had a retro meeting afterwards."
      ], learnings: ["Team collaboration"] },
      { title: "Tuesday", tasks: [
        "Continued working on the components with Sitecore.",
        "Also set up a test environment to visually see what I have."
      ], learnings: ["Testing setup"] },
      { title: "Wednesday", tasks: [
        "Continued working on the components/Sitecore."
      ], learnings: ["Component development"] },
      { title: "Thursday", tasks: [
        "Follow-up from the previous day."
      ], learnings: ["Task tracking"] },
      { title: "Friday", tasks: [
        "Follow-up from the previous days."
      ], learnings: ["Task completion"] }
    ]
  },
  {
    number: 8,
    title: "Performance Optimization",
    description: "Improving application performance, optimizing code, and enhancing user experience.",
    dateRange: "March 24-28, 2025",
    keyTechnologies: ["Angular", "TypeScript"],
    achievements: ["Optimized application performance", "Improved code efficiency", "Enhanced user experience"],
    content: `
      <h2>Week 8 Highlights</h2>
      <p>This week focused on performance optimization:</p>
    `,
    days: [
      { title: "Monday", tasks: [
        "Worked on the components/website layout.",
        "In between, evaluation meeting with supervisor/mentor."
      ], learnings: ["Component styling", "Mentor feedback"] },
      { title: "Tuesday", tasks: [
        "Worked on the components/website layout.",
        "Also fixed some bugs/problems."
      ], learnings: ["Bug fixing", "Component styling"] },
      { title: "Wednesday", tasks: [
        "Repeat of previous days."
      ], learnings: ["Component work"] },
      { title: "Thursday", tasks: [
        "Repeat of previous days."
      ], learnings: ["Component work"] },
      { title: "Friday", tasks: [
        "Repeat of previous days."
      ], learnings: ["Component work"] }
    ]
  },
  {
    number: 9,
    title: "Header Development Challenges",
    description: "Addressing header issues, collaborating with the mentor, and improving code structure.",
    dateRange: "April 1-5, 2024",
    keyTechnologies: ["Angular", "TypeScript"],
    achievements: ["Solved header issues", "Improved code structure", "Collaboration with mentor"],
    content: `
      <h2>Week 9 Highlights</h2>
      <p>This week focused on header development and problem solving:</p>
    `,
    days: [
      { title: "Monday", tasks: [
        "Problems with the header, does not load correctly/cannot use it properly in Sitecore.",
        "Also a problem with the CSS, it does not load, already checked but no solution yet.",
        "Will look at it once the header works.",
        "In the afternoon had a retrospective (discussed what went well and what didn't), looked at tickets to see who still needs to do what."
      ], learnings: ["Header debugging", "CSS troubleshooting", "Retrospective"] },
      { title: "Tuesday", tasks: [
        "Day off."
      ], learnings: ["N/A"] },
      { title: "Wednesday", tasks: [
        "Continued working on the header issue.",
        "Sat together with mentor to review the status of depannage 2000.",
        "Small silly issue regarding naming. Was able to solve it, had completely overlooked it.",
        "Started reformatting some code and merging unnecessary components into one and removing the others."
      ], learnings: ["Mentor feedback", "Code refactoring"] },
      { title: "Thursday", tasks: [
        "Tried a different approach for the header, which was clearer for me.",
        "Top part of the header was finished."
      ], learnings: ["Header refactor"] },
      { title: "Friday", tasks: [
        "Eventually got stuck when I wanted to start on the navigation.",
        "So I had to remove the previous approach and searched for the 'correct' way."
      ], learnings: ["Navigation approach"] }
    ]
  },
  {
    number: 10,
    title: "Navigation and Language Features",
    description: "Developing the navigation bar and adding language switching functionality.",
    dateRange: "April 8-12, 2024",
    keyTechnologies: ["Angular", "TypeScript"],
    achievements: ["Navigation bar completed", "Language switching feature", "PI demo"],
    content: `
      <h2>Week 10 Highlights</h2>
      <p>This week focused on navigation and language features:</p>
    `,
    days: [
      { title: "Monday", tasks: [
        "Started on the navigation part of the header, this is a bit more complicated than what I've done so far.",
        "We also had a PI demo in the morning.",
        "The navigation bar is finished. Tomorrow I can start on the function so people can choose between 2 languages (nl/fr)."
      ], learnings: ["Navigation bar", "PI demo"] },
      { title: "Tuesday", tasks: [
        "Continued working on the navigation bar and some other clean-ups."
      ], learnings: ["Navigation bar", "Code cleanup"] },
      { title: "Wednesday", tasks: [
        "Working on the language feature."
      ], learnings: ["Language switching"] },
      { title: "Thursday", tasks: [
        "Today PI planning 8b."
      ], learnings: ["PI planning"] },
      { title: "Friday", tasks: [
        "Continued working and in the afternoon sat together with my mentor to review the progress."
      ], learnings: ["Mentor feedback"] }
    ]
  },
  {
    number: 11,
    title: "CSS Debugging and Aansluitingsrecht",
    description: "Resolving CSS issues and starting work on the Aansluitingsrecht project.",
    dateRange: "April 15-19, 2024",
    keyTechnologies: ["Angular", "TypeScript"],
    achievements: ["CSS issues resolved", "Started on Aansluitingsrecht", "Mentor meetings"],
    content: `
      <h2>Week 11 Highlights</h2>
      <p>This week focused on CSS debugging and starting a new project:</p>
    `,
    days: [
      { title: "Monday", tasks: [
        "Tried to find out why the CSS would not work in my project.",
        "With a colleague, found out the CSS now loads.",
        "Had a retro + sprint planning."
      ], learnings: ["CSS debugging", "Sprint planning"] },
      { title: "Tuesday", tasks: [
        "Started working on the CSS, had a meeting with my mentor about Aansluitingsrecht (another project).",
        "I have to work on that (.Net C#), for now I have looked at the documentation/code."
      ], learnings: ["CSS", "Aansluitingsrecht project"] },
      { title: "Wednesday", tasks: [
        "Continued looking at Aansluitingsrecht."
      ], learnings: ["Aansluitingsrecht"] },
      { title: "Thursday", tasks: [
        "Working on Aansluitingsrecht. Meeting with mentor for questions. Continued working."
      ], learnings: ["Mentor feedback", "Aansluitingsrecht"] },
      { title: "Friday", tasks: [
        "Working on Aansluitingsrecht. Got more info about it (mapping)."
      ], learnings: ["Aansluitingsrecht", "Mapping"] }
    ]
  },
  {
    number: 12,
    title: "Aansluitingsrecht Development",
    description: "Focused on developing features for the Aansluitingsrecht project.",
    dateRange: "April 22-26, 2024",
    keyTechnologies: ["Angular", "TypeScript", ".NET", "C#"],
    achievements: ["Progress on Aansluitingsrecht", "Backlog refinement"],
    content: `
      <h2>Week 12 Highlights</h2>
      <p>This week focused on developing features for the Aansluitingsrecht project:</p>
      <ul>
        <li>Worked on mapping-based functionality</li>
        <li>Participated in backlog refinement</li>
        <li>Attended intervision at school</li>
      </ul>
    `,
    days: [
      { title: "Monday", tasks: ["International Holiday"], learnings: ["N/A"] },
      { title: "Tuesday", tasks: ["Worked on a function based on mapping.", "Backlog refinement in the afternoon."], learnings: ["Mapping function", "Backlog refinement"] },
      { title: "Wednesday", tasks: ["Intervision session at school in the morning.", "Came to the office in the afternoon."], learnings: ["Intervision", "Office work"] },
      { title: "Thursday", tasks: ["Working on Aansluitingsrecht"], learnings: ["Aansluitingsrecht"] },
      { title: "Friday", tasks: ["Working on Aansluitingsrecht"], learnings: ["Aansluitingsrecht"] }
    ]
  },
  {
    number: 13,
    title: "Advanced Mapping Techniques",
    description: "Exploring advanced mapping techniques and improving project workflows.",
    dateRange: "April 29 - May 3, 2024",
    keyTechnologies: ["Angular", "TypeScript", ".NET", "C#"],
    achievements: ["Refined mapping functionality", "Sprint review and planning"],
    content: `
      <h2>Week 13 Highlights</h2>
      <p>This week focused on refining mapping techniques and participating in team reviews:</p>
      <ul>
        <li>Worked on Aansluitingsrecht</li>
        <li>Participated in backlog refinement and sprint review</li>
        <li>Processed mentor feedback</li>
      </ul>
    `,
    days: [
      { title: "Monday", tasks: ["Worked a bit on Aansluitingsrecht", "Backlog refinement session in the morning", "Sprint review and retro + sprint planning in the afternoon"], learnings: ["Backlog refinement", "Sprint review", "Retro & planning"] },
      { title: "Tuesday", tasks: ["Worked on Aansluitingsrecht and had a meeting with my mentor."], learnings: ["Aansluitingsrecht", "Mentor feedback"] },
      { title: "Wednesday", tasks: ["Processed feedback from the mentor."], learnings: ["Processing feedback"] },
      { title: "Thursday", tasks: ["Public holiday, day off"], learnings: ["N/A"] },
      { title: "Friday", tasks: ["Worked briefly on Aansluitingsrecht, took the afternoon off."], learnings: ["Aansluitingsrecht"] }
    ]
  },
  {
    number: 14,
    title: "Documentation & Handover",
    description: "Finalizing projects, preparing documentation, and reflecting on the internship experience.",
    dateRange: "May 6-10, 2024",
    keyTechnologies: ["Angular", "TypeScript", "MySQL"],
    achievements: ["Completed final projects", "Prepared documentation", "Received internship completion certificate"],
    content: `
      <h2>Internship Wrap-up</h2>
      <p>As my internship concludes, I reflect on the valuable experiences and skills I've gained:</p>
      <ul>
        <li>Successfully completed all assigned projects and tasks</li>
        <li>Gained hands-on experience in Angular, TypeScript, and MySQL</li>
        <li>Improved problem-solving, communication, and teamwork skills</li>
        <li>Received positive feedback from mentors and colleagues</li>
      </ul>
      <p>I'm grateful for the opportunity to intern at VAB and look forward to applying my skills in future endeavors.</p>
    `,
    days: [
      { title: "Monday", tasks: ["Working on Aansluitingsrecht, backlog refinement.", "In the afternoon, sat together with my mentor, had a few questions.", "Part 1 almost finished."], learnings: ["Aansluitingsrecht", "Backlog refinement", "Mentor meeting"] },
      { title: "Tuesday", tasks: ["Completed Hoxhunt training.", "Worked on the second part of the ticket.", "After the daily stand-up, sat together with a colleague who explained everything about documentation.", "Started documentation for Aansluitingsrecht, almost finished."], learnings: ["Hoxhunt", "Documentation"] },
      { title: "Wednesday", tasks: ["Finished documentation.", "Worked a bit more on Aansluitingsrecht."], learnings: ["Documentation", "Aansluitingsrecht"] },
      { title: "Thursday", tasks: ["Worked on Aansluitingsrecht.", "Meeting with mentor about unit tests.", "Started with unit tests."], learnings: ["Unit tests start"] },
      { title: "Friday", tasks: ["Writing unit tests"], learnings: ["Unit tests"] }
    ]
  },
  {
    number: 15,
    title: "Unit Testing & Sprint Review",
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
    `,
    days: [
      { title: "Monday", tasks: ["Continued writing unit tests.", "Backlog refinements.", "Afternoon:", "-Sprint review", "-Retro / Sprint Planning", "Some more time for unit tests"], learnings: ["Unit tests", "Sprint review", "Retro", "Planning"] },
      { title: "Tuesday", tasks: ["Unit tests"], learnings: ["Unit tests"] },
      { title: "Wednesday", tasks: ["Unit tests"], learnings: ["Unit tests"] },
      { title: "Thursday", tasks: ["Unit tests"], learnings: ["Unit tests"] },
      { title: "Friday", tasks: ["Wrote some more unit tests."], learnings: ["Unit tests"] }
    ]
  },
  {
    number: 16,
    title: "Inspect & Adapt / PI Planning",
    description: "Planning next steps and setting goals for the future.",
    dateRange: "May 20-24, 2024",
    keyTechnologies: [],
    achievements: [],
    content: `
      <h2>Post-Internship Planning</h2>
      <p>Planning next steps and setting goals for the future.</p>
    `,
    days: [
      { title: "Monday", tasks: ["Still working on unit tests, nothing else to work on for now. Also had an Inspect & Adapt session."], learnings: ["Unit tests", "Inspect & Adapt"] },
      { title: "Tuesday", tasks: ["Working on unit tests"], learnings: ["Unit tests"] },
      { title: "Wednesday", tasks: ["Day off"], learnings: ["N/A"] },
      { title: "Thursday", tasks: ["PI Planning"], learnings: ["PI Planning"] },
      { title: "Friday", tasks: ["Last day, finished the last unit tests. Had a meeting with my mentor about wrapping up the internship."], learnings: ["Unit tests", "Internship wrap-up"] }
    ]
  },
  {
    number: 17,
    title: "Final Week Off",
    description: "Reflecting on the internship and preparing for upcoming challenges.",
    dateRange: "May 27-31, 2024",
    keyTechnologies: [],
    achievements: [],
    content: `
      <h2>Looking Ahead</h2>
      <p>Reflecting on the internship and preparing for upcoming challenges.</p>
    `,
    days: [
      { title: "Monday", tasks: ["Day off"], learnings: ["N/A"] },
      { title: "Tuesday", tasks: ["Day off"], learnings: ["N/A"] },
      { title: "Wednesday", tasks: ["Day off"], learnings: ["N/A"] },
      { title: "Thursday", tasks: ["Day off"], learnings: ["N/A"] },
      { title: "Friday", tasks: ["Day off"], learnings: ["N/A"] }
    ]
  }
];

export default function WeekPage({ params }: { params: { id: string } }) {
  const weekNumber = parseInt(params.id)
  const week = weeks.find(w => w.number === weekNumber)

  if (!week) {
    notFound()
  }

  return (
    <main className="min-h-screen p-4 sm:p-8 animate-fadeIn bg-gradient-to-br from-[#1e2432] via-[#23293a] to-[#2d3548]">
      <div className="max-w-7xl mx-auto">
        {/* Add a colorful accent bar */}
        <div className="h-2 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded mb-8"></div>

        {/* Week Quick Navigation */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {weeks.map(w => (
            <Link
              key={w.number}
              href={`/weeks/${w.number}`}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                w.number === weekNumber
                  ? 'bg-blue-600 text-white'
                  : 'bg-[#23293a] text-gray-300 hover:bg-blue-700 hover:text-white'
              }`}
              title={w.title}
            >
              {w.number === 0 ? '0' : w.number}
            </Link>
          ))}
        </div>

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

        <div className="flex flex-col lg:flex-row gap-4 sm:gap-8 items-center">
          {week.number === 0 ? (
            <div className="w-full max-w-3xl bg-[#1e2432] rounded-lg shadow-md p-8 mx-auto flex flex-col items-center justify-center hover:shadow-lg transition-shadow duration-300 animate-slideUp">
              <div
                className="prose prose-invert max-w-none prose-headings:text-white prose-p:text-gray-400 prose-li:text-gray-400 prose-strong:text-white prose-sm sm:prose-base [&_ul]:list-none [&_ul]:pl-0 text-center"
                dangerouslySetInnerHTML={{ __html: week.content }}
              />
            </div>
          ) : (
            <div className={`${week.number === 0 ? 'lg:w-2/3' : 'w-full'} bg-[#1e2432] rounded-lg shadow-md p-4 sm:p-8 hover:shadow-lg transition-shadow duration-300 animate-slideUp`}>
              <div
                className="prose prose-invert max-w-none prose-headings:text-white prose-p:text-gray-400 prose-li:text-gray-400 prose-strong:text-white prose-sm sm:prose-base [&_ul]:list-none [&_ul]:pl-0"
                dangerouslySetInnerHTML={{ __html: week.content }}
              />
              {week.days && <WeekDays days={week.days} />}
            </div>
          )}
        </div>

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