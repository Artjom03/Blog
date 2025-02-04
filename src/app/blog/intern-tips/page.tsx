export default function InternTips() {
  const tips = [
    {
      title: "Ask Questions Early and Often",
      description: "Don't hesitate to ask questions when you're unsure. It's better to ask and learn than to make assumptions. Keep a list of questions and ask them during appropriate times.",
      example: "If you're unclear about a task requirement, ask for clarification immediately rather than proceeding with assumptions."
    },
    {
      title: "Document Everything",
      description: "Keep detailed notes of processes, commands, and solutions you learn. This will be invaluable both during your internship and for future reference.",
      example: "Create a personal wiki or use note-taking tools to document terminal commands, debugging steps, and project setup procedures."
    },
    {
      title: "Take Initiative",
      description: "Once you're comfortable with your initial tasks, don't wait to be assigned work. Look for opportunities to contribute and suggest improvements.",
      example: "If you notice outdated documentation, offer to update it. If you see a bug, report it and propose a solution."
    },
    {
      title: "Learn the Development Workflow",
      description: "Understand your team's Git workflow, code review process, and deployment procedures early in your internship.",
      example: "Learn how to create proper pull requests, write meaningful commit messages, and follow the team's branching strategy."
    },
    {
      title: "Build Relationships",
      description: "Network with your team members and other interns. These connections can be valuable for your professional future.",
      example: "Join team lunches, participate in meetings actively, and engage in casual conversations when appropriate."
    },
    {
      title: "Time Management",
      description: "Learn to estimate task durations and communicate progress effectively. Break down large tasks into smaller, manageable pieces.",
      example: "For a complex feature, create a task list with estimated completion times and update your mentor regularly."
    },
    {
      title: "Learn the Codebase",
      description: "Spend time understanding the project structure and architecture. Read through documentation and existing code.",
      example: "Map out the main components and their interactions, understand the data flow in the application."
    },
    {
      title: "Embrace Code Reviews",
      description: "Take code reviews seriously. They're learning opportunities, not criticisms. Learn from feedback and apply it to future work.",
      example: "When receiving feedback, ask questions about alternative approaches and best practices."
    },
    {
      title: "Stay Updated with Technology",
      description: "Keep learning about the technologies used in your project. Follow relevant blogs, documentation updates, and community discussions.",
      example: "Subscribe to Angular blog updates, join TypeScript Discord channels, or follow relevant developers on social media."
    },
    {
      title: "Maintain Work-Life Balance",
      description: "While it's important to work hard, don't forget to maintain a healthy work-life balance. Take breaks and set boundaries.",
      example: "Take your lunch breaks, use your vacation days, and avoid working excessive overtime unless necessary."
    }
  ]

  return (
    <main className="min-h-screen p-8 animate-fadeIn">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-white mb-4 animate-slideDown">
            Top 10 Tips for New Interns
          </h1>
          <p className="text-gray-300 text-lg">
            Essential advice for making the most of your internship experience
          </p>
        </header>

        <div className="space-y-8">
          {tips.map((tip, index) => (
            <article 
              key={index}
              className="bg-[#1e2432] rounded-lg shadow-md p-6 animate-slideUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </span>
                <div className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">
                    {tip.title}
                  </h2>
                  <p className="text-gray-300">
                    {tip.description}
                  </p>
                  <div className="bg-[#2d3548] rounded-lg p-4 mt-2">
                    <h3 className="text-white font-medium mb-2">Example:</h3>
                    <p className="text-gray-400">
                      {tip.example}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400">
            Remember: Every internship is a unique opportunity to learn and grow. 
            Make the most of it by staying proactive, curious, and professional.
          </p>
        </div>
      </div>
    </main>
  )
} 