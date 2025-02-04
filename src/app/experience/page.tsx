export default function Experience() {
  const phases = [
    {
      title: "Before Internship",
      content: "Before starting at VAB, I had basic knowledge of web development and was eager to gain real-world experience. I was particularly interested in learning modern frameworks and best practices in a professional environment.",
      period: "Preparation Phase",
      expectations: [
        "Learn professional development practices",
        "Gain hands-on experience with Angular",
        "Work in a real development team"
      ]
    },
    {
      title: "During Internship",
      content: "The internship provided hands-on experience with Angular, TypeScript, and professional development workflows. Working with the team at VAB gave me valuable insights into real-world software development.",
      period: "Current Phase",
      achievements: [
        "Mastered Angular fundamentals",
        "Learned version control with SourceTree",
        "Participated in code reviews",
        "Built features for production projects",
        "Having meetings"
      ]
    },
    {
      title: "After Internship",
      content: "Looking ahead, I plan to build upon the foundation established during this internship. The skills and experience gained here will be invaluable for my future career in software development.",
      period: "Future Goals",
      goals: [
        "Continue developing Angular expertise",
        "Apply learned best practices in future projects",
        "Maintain professional connections",
        "Build more complex applications"
      ]
    }
  ]

  const skills = [
    {
      category: "Technical Skills",
      items: [
        "Angular Development",
        "TypeScript",
        "Git with SourceTree",
        "Code Review Process",
        "Next.js Development"
      ]
    },
    {
      category: "Soft Skills",
      items: [
        "Team Collaboration",
        "Communication",
        "Time Management",
        "Problem Solving",
        "Adaptability"
      ]
    }
  ]

  const quickStats = [
    {
      label: "Weeks Completed",
      value: "4+",
      icon: "📅"
    },
    {
      label: "Projects Contributed",
      value: "3",
      icon: "💻"
    },
    {
      label: "Pull Requests",
      value: "15+",
      icon: "🔄"
    },
    {
      label: "Documentation Pages",
      value: "5",
      icon: "📝"
    }
  ]

  return (
    <main className="min-h-screen p-8 animate-fadeIn">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-4 animate-slideDown">
            My Internship Experience
          </h1>
          <p className="text-gray-300 text-lg">
            A personal reflection on my journey as an intern at VAB
          </p>
        </header>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Timeline Column */}
          <section className="lg:w-2/3 space-y-6">
            <h2 className="text-2xl font-semibold text-white mb-8">Journey Timeline</h2>
            {phases.map((phase, index) => (
              <div key={index} className="bg-[#1e2432] rounded-lg p-6">
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                    {phase.period}
                  </span>
                  <h3 className="text-xl font-medium text-white">
                    {phase.title}
                  </h3>
                </div>
                <p className="text-gray-300 mb-4">
                  {phase.content}
                </p>
                <ul className="list-none space-y-2">
                  {phase.expectations && phase.expectations.map((item, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <span className="text-blue-400 mr-2">•</span>
                      {item}
                    </li>
                  ))}
                  {phase.achievements && phase.achievements.map((item, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <span className="text-green-400 mr-2">✓</span>
                      {item}
                    </li>
                  ))}
                  {phase.goals && phase.goals.map((item, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <span className="text-yellow-400 mr-2">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Key Takeaways - Moved inside timeline column */}
            <section className="bg-[#1e2432] rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-white mb-6">Key Takeaways</h2>
              <div className="space-y-4">
                <p className="text-gray-300">
                  This internship has been an incredible learning experience, providing me with both technical skills and professional growth opportunities. Working with the team at VAB has given me valuable insights into real-world software development practices.
                </p>
                <p className="text-gray-300">
                  The combination of hands-on coding, team collaboration, and mentorship has helped me develop a strong foundation for my future career in software development.
                </p>
              </div>
            </section>
          </section>

          {/* Right Column - Stats and Skills */}
          <div className="lg:w-1/3 lg:pt-16">
            {/* Quick Stats */}
            <section className="bg-[#1e2432] rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-semibold text-white mb-6">Quick Stats</h2>
              <div className="grid grid-cols-2 gap-4">
                {quickStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl mb-1">{stat.icon}</div>
                    <div className="text-xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Skills Gained */}
            <section className="bg-[#1e2432] rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-white mb-6">Skills Gained</h2>
              <div className="space-y-6">
                {skills.map((skillSet, index) => (
                  <div key={index} className="bg-[#1e2432] rounded-lg p-6">
                    <h3 className="text-xl font-medium text-white mb-4">
                      {skillSet.category}
                    </h3>
                    <ul className="space-y-2">
                      {skillSet.items.map((skill, i) => (
                        <li key={i} className="flex items-center text-gray-300">
                          <span className="text-blue-400 mr-2">•</span>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
} 