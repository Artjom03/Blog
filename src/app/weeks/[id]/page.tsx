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
    title: "Before We Begin",
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
    title: "Week 1",
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
      { title: "Monday", tasks: ["Begonnen met verder werken van component.", "Mentor gekomen naar de stageplaats.", "Progressie op het component, alles wordt duidelijker en het lukt beter.", "Samen gezeten met mijn begeleider.", "Component was bijna af, paar problemen bij het testen.", "Een PR gedaan, morgen kan ik verder doen."], learnings: ["Component progress"] },
      { title: "Tuesday", tasks: ["Op test gekeken naar mijn component.", "Wilt niet inladen, samen gezeten met mentor.", "Probleem gevonden, nu verder werken, oplossen en aan CSS beginnen."], learnings: ["Debugging and CSS"] },
      { title: "Wednesday", tasks: ["Input gefixt, het component werkt volledig."], learnings: ["Input handling"] },
      { title: "Thursday", tasks: ["Verlof."], learnings: ["N/A"] },
      { title: "Friday", tasks: ["Nog enkele kleine dingen moesten toegevoegd worden.", "Ondertussen een bug gevonden, niet afgewerkt. Voor volgende week."], learnings: ["Bug identification"] }
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
      { title: "Monday", tasks: ["Onderzoek bug.", '"Gefixt", dan nog een zelfgemaakt drop-down moeten toevoegen.', "Paar andere bugs ontstaan."], learnings: ["Bug fixing"] },
      { title: "Tuesday", tasks: ["Verder werken aan de bugs.", "Component is af, moet bekeken worden door mentor."], learnings: ["Bug resolution"] },
      { title: "Wednesday", tasks: ["Code formatteren en verkorten.", "Nog iets moeten toevoegen. Een extra field. Eerst via Sitecore dan de backend en ten slotte integreren in de frontend."], learnings: ["Code optimization"] },
      { title: "Thursday", tasks: ["Component afgewerkt.", "Een nieuwe ticket gekregen van een andere programmeur."], learnings: ["Component completion"] },
      { title: "Friday", tasks: ["Ticket afgewerkt.", "In de namiddag meeting met begeleider om aan een groot project te beginnen."], learnings: ["Project planning"] }
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
      { title: "Monday", tasks: ["In de voormiddag op school voor een intervisiemoment.", "Namiddag naar stageplaats om aan het Sitecore gedeelte van het project te beginnen."], learnings: ["Sitecore basics"] },
      { title: "Tuesday", tasks: ["Verder werken aan Sitecore."], learnings: ["Sitecore development"] },
      { title: "Wednesday", tasks: ["Verder werken aan Sitecore.", "In de middag naar evenement gaan in Antwerp Expo."], learnings: ["Event insights"] },
      { title: "Thursday", tasks: ["PI Planning.", "Namiddag verder werken."], learnings: ["PI Planning"] },
      { title: "Friday", tasks: ["Werken aan Sitecore."], learnings: ["Sitecore progress"] }
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
      { title: "Monday", tasks: ["Nog steeds bezig aan Sitecore."], learnings: ["Sitecore progress"] },
      { title: "Tuesday", tasks: ["Begonnen aan de Angular code."], learnings: ["Angular basics"] },
      { title: "Wednesday", tasks: ["Was verder bezig in Angular aan de componenten."], learnings: ["Component development"] },
      { title: "Thursday", tasks: ["Was verder bezig in Angular aan de componenten.", "Ticket van vorige week was afgekeurd, dus moest ik daaraan verder werken, dat was af en toen verder gewerkt aan de componenten."], learnings: ["Ticket resolution"] },
      { title: "Friday", tasks: ["Componenten verder aanmaken en laten functioneren."], learnings: ["Component functionality"] }
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
      { title: "Monday", tasks: ["Nieuwe scrum-master, beetje kennismaking gehad met het team.", "Werken aan de componenten.", "Samengezeten met mentor om alles op te zetten voor visueel te testen. Was nog niet af."], learnings: ["Scrum process"] },
      { title: "Tuesday", tasks: ["Verder werken aan de componenten.", "Mentor was druk vandaag, geen tijd om verder te bekijken."], learnings: ["Independent work"] },
      { title: "Wednesday", tasks: ["Werken aan de components in Angular."], learnings: ["Component development"] },
      { title: "Thursday", tasks: ["Werken in Angular.", "Samengezeten met collega ivm met probleem dat ik met Git had. Heeft wel even geduurd."], learnings: ["Git troubleshooting"] },
      { title: "Friday", tasks: ["Issue gefixt, nu kan ik visueel testen/zien.", "Wat er niet goed werkt, kan ik aanpassen."], learnings: ["Testing and debugging"] }
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
      { title: "Monday", tasks: ["Verder werken aan de componenten/Sitecore implementatie.", "In de middag samen gaan eten, vanwege afscheid 2 collega's.", "Erna nog een retro meeting gehad."], learnings: ["Team collaboration"] },
      { title: "Tuesday", tasks: ["Nu is het verder werken op de componenten met Sitecore.", "Ook een testomgeving opgezet, om visueel te zien wat ik heb."], learnings: ["Testing setup"] },
      { title: "Wednesday", tasks: ["Verder werken aan de componenten/Sitecore."], learnings: ["Component development"] },
      { title: "Thursday", tasks: ["Opvolging van de vorige dag."], learnings: ["Task tracking"] },
      { title: "Friday", tasks: ["Opvolging van de vorige dagen."], learnings: ["Task completion"] }
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
      { title: "Monday", tasks: ["Sitecore en Angular verder geïntegreerd.", "Probleem met de testomgeving opgelost."], learnings: ["Integration troubleshooting"] },
      { title: "Tuesday", tasks: ["Verder werken aan de optimalisatie van de applicatie.", "Code reviews gedaan."], learnings: ["Code optimization techniques"] },
      { title: "Wednesday", tasks: ["Optimalisatie van de applicatie voortgezet.", "Voorbereidingen getroffen voor de presentatie."], learnings: ["Performance tuning"] },
      { title: "Thursday", tasks: ["Laatste hand gelegd aan de optimalisaties.", "Feedbacksessie gehad met het team."], learnings: ["Feedback incorporation"] },
      { title: "Friday", tasks: ["Presentatie voorbereid en geoefend.", "Eindevaluatie van de stage."], learnings: ["Presentation skills"] }
    ]
  },
  {
    number: 9,
    title: "Documentation and Knowledge Sharing",
    description: "Focusing on documentation, knowledge sharing, and preparing for the internship conclusion.",
    dateRange: "March 31 - April 4, 2025",
    keyTechnologies: ["Angular", "TypeScript"],
    achievements: ["Improved project documentation", "Conducted knowledge sharing sessions", "Prepared for internship conclusion"],
    content: `
      <h2>Week 9 Highlights</h2>
      <p>This week focused on documentation and knowledge sharing:</p>
    `,
    days: [
      { title: "Monday", tasks: ["Documentatie van het project verbeterd.", "Kennisdelingssessies voorbereid."], learnings: ["Documentation best practices"] },
      { title: "Tuesday", tasks: ["Kennisdelingssessies uitgevoerd.", "Feedback op documentatie ontvangen."], learnings: ["Knowledge sharing"] },
      { title: "Wednesday", tasks: ["Laatste aanpassingen aan documentatie gedaan.", "Voorbereidingen getroffen voor de afsluitende presentatie."], learnings: ["Final presentation preparation"] },
      { title: "Thursday", tasks: ["Afsluitende presentatie gegeven.", "Feedbacksessie gehad."], learnings: ["Receiving and incorporating feedback"] },
      { title: "Friday", tasks: ["Stage geëvalueerd en feedback gegeven.", "Documentatie en code opgeleverd."], learnings: ["Project delivery"] }
    ]
  },
  {
    number: 10,
    title: "Internship Conclusion",
    description: "Wrapping up the internship, reflecting on experiences, and planning future steps.",
    dateRange: "April 7-11, 2025",
    keyTechnologies: ["Angular", "TypeScript"],
    achievements: ["Successfully concluded the internship", "Received positive feedback", "Gained valuable industry experience"],
    content: `
      <h2>Internship Conclusion</h2>
      <p>As my internship comes to an end, I reflect on the valuable experiences and skills I've gained:</p>
      <ul>
        <li>Successfully completed all assigned projects and tasks</li>
        <li>Gained hands-on experience in Angular, TypeScript, and Sitecore</li>
        <li>Improved problem-solving, communication, and teamwork skills</li>
        <li>Received positive feedback from mentors and colleagues</li>
      </ul>
      <p>I'm grateful for the opportunity to intern at VAB and look forward to applying my skills in future endeavors.</p>
    `
  },
  {
    number: 11,
    title: "Post-Internship Reflections",
    description: "Reflecting on the internship journey and outlining future learning goals.",
    dateRange: "April 14-18, 2025",
    keyTechnologies: ["Angular", "TypeScript"],
    achievements: ["Reflected on internship experiences", "Outlined future learning goals", "Prepared for upcoming challenges"],
    content: `
      <h2>Post-Internship Reflections</h2>
      <p>Reflecting on my internship journey, I recognize the significant growth and learning I've experienced:</p>
      <ul>
        <li>Enhanced technical skills in Angular and TypeScript</li>
        <li>Developed a strong understanding of project workflows and collaboration</li>
        <li>Gained confidence in problem-solving and independent work</li>
        <li>Established valuable professional relationships</li>
      </ul>
      <p>Moving forward, I aim to continue building on these skills, exploring advanced Angular concepts, and deepening my knowledge of full-stack development.</p>
    `
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
      { title: "Monday", tasks: ["Internationale Feestdag"], learnings: ["N/A"] },
      { title: "Tuesday", tasks: ["Bezig met een functie te schrijven op basis van de mapping.", "Backlog refinement in de namiddag gehad."], learnings: ["Mapping functie", "Backlog refinement"] },
      { title: "Wednesday", tasks: ["Voormiddag intervisiemoment op school.", "Namiddag naar kantoor gekomen."], learnings: ["Intervisie", "Kantoorwerk"] },
      { title: "Thursday", tasks: ["Bezig met aansluitingsrecht"], learnings: ["Aansluitingsrecht"] },
      { title: "Friday", tasks: ["Bezig met aansluitingsrecht"], learnings: ["Aansluitingsrecht"] }
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
      { title: "Monday", tasks: ["beetje bezig met aansluitingsrecht", "backlog refinement session in de voormiddag", "in de namiddag een sprint review met ons team en retro +sprint planning"], learnings: ["Backlog refinement", "Sprint review", "Retro & planning"] },
      { title: "Tuesday", tasks: ["werken aan aansluitingsrecht en meeting met mentor."], learnings: ["Aansluitingsrecht", "Mentor feedback"] },
      { title: "Wednesday", tasks: ["Feedback van de mentor verwerken."], learnings: ["Feedback verwerken"] },
      { title: "Thursday", tasks: ["Feestdag, verlof"], learnings: ["N/A"] },
      { title: "Friday", tasks: ["Kort nog gewerkt aan aansluitingsrecht, namiddag verlof genomen."], learnings: ["Aansluitingsrecht"] }
    ]
  },
  {
    number: 14,
    title: "Internship Wrap-up",
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
      { title: "Monday", tasks: ["Werken aan aansluitingsrecht, backlog refinement.", "In de namiddag samengezeten met mentor, had een paar vragen.", "Deel 1 zo goed als af."], learnings: ["Aansluitingsrecht", "Backlog refinement", "Mentor overleg"] },
      { title: "Tuesday", tasks: ["Hoxhunt training gedaan.", "Werken aan het 2e deel van het ticketje.", "Na de daily stand-up samen gezeten met een collega die me alles omtrent documentatie heeft uitgelegd.", "Begonnen aan documentatie voor aansluitingsrecht, bijna af."], learnings: ["Hoxhunt", "Documentatie"] },
      { title: "Wednesday", tasks: ["Doucmentatie afgewerkt.", "Verder nog wat aan aansluitingsrecht gewerkt."], learnings: ["Documentatie", "Aansluitingsrecht"] },
      { title: "Thursday", tasks: ["Wat aan aansluitingsrecht werken.", "Meeting met mentor in verband met unit tests.", "Opstart voor unit tests gedaan."], learnings: ["Unit tests opstart"] },
      { title: "Friday", tasks: ["Bezig met schrijven van de unit tests"], learnings: ["Unit tests"] }
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
      { title: "Monday", tasks: ["Unit tests verder schrijven.", "Backlog refinements.", "Namiddag:", "-Sprint review", "-Retro / Sprint Planning", "Nog wat tijd voor unit tests"], learnings: ["Unit tests", "Sprint review", "Retro", "Planning"] },
      { title: "Tuesday", tasks: ["Unit tests"], learnings: ["Unit tests"] },
      { title: "Wednesday", tasks: ["Unit tests"], learnings: ["Unit tests"] },
      { title: "Thursday", tasks: ["Unit tests"], learnings: ["Unit tests"] },
      { title: "Friday", tasks: ["Nog wat unit tests schrijven."], learnings: ["Unit tests"] }
    ]
  },
  {
    number: 16,
    title: "Post-Internship Planning",
    description: "Planning next steps and setting goals for the future.",
    dateRange: "May 20-24, 2024",
    keyTechnologies: [],
    achievements: [],
    content: `
      <h2>Post-Internship Planning</h2>
      <p>Planning next steps and setting goals for the future.</p>
    `,
    days: [
      { title: "Monday", tasks: ["Nog bezig met unit tests, niets anders waar ik voorlopig aan moet werken. Voor de rest nog een Inspect & Adapt gehad."], learnings: ["Unit tests", "Inspect & Adapt"] },
      { title: "Tuesday", tasks: ["Werken aan unit tests"], learnings: ["Unit tests"] },
      { title: "Wednesday", tasks: ["Vrij genomen"], learnings: ["N/A"] },
      { title: "Thursday", tasks: ["PI Planning"], learnings: ["PI Planning"] },
      { title: "Friday", tasks: ["Laatste dag, nog de laatste unit tests geschreven. En een meeting met mijn mentor gehad ivm de afronding van de stage."], learnings: ["Unit tests", "Stage afronding"] }
    ]
  },
  {
    number: 17,
    title: "Looking Ahead",
    description: "Reflecting on the internship and preparing for upcoming challenges.",
    dateRange: "May 27-31, 2024",
    keyTechnologies: [],
    achievements: [],
    content: `
      <h2>Looking Ahead</h2>
      <p>Reflecting on the internship and preparing for upcoming challenges.</p>
    `,
    days: [
      { title: "Monday", tasks: ["Vrij genomen"], learnings: ["N/A"] },
      { title: "Tuesday", tasks: ["Vrij genomen"], learnings: ["N/A"] },
      { title: "Wednesday", tasks: ["Vrij genomen"], learnings: ["N/A"] },
      { title: "Thursday", tasks: ["Vrij genomen"], learnings: ["N/A"] },
      { title: "Friday", tasks: ["Vrij genomen"], learnings: ["N/A"] }
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
          <div className={`${week.number === 0 ? 'lg:w-2/3' : 'w-full'} bg-[#1e2432] rounded-lg shadow-md p-4 sm:p-8 hover:shadow-lg transition-shadow duration-300 animate-slideUp`}>
            <div 
              className="prose prose-invert max-w-none prose-headings:text-white prose-p:text-gray-400 prose-li:text-gray-400 prose-strong:text-white prose-sm sm:prose-base [&_ul]:list-none [&_ul]:pl-0"
              dangerouslySetInnerHTML={{ __html: week.content }}
            />
            {week.days && <WeekDays days={week.days} />}
          </div>
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