import AboutMeSection from './components/AboutMeSection'
import SkillsSection from './components/SkillsSection'
import WeeklyReportsSection from './components/WeeklyReportsSection'
import HomeSidebar from './components/HomeSidebar'

export default function Home() {
  const skills = [
    { name: "Frontend", items: ["Angular", "TypeScript", "Tailwind CSS"] },
    { name: "Backend", items: ["Node.js", "MySQL"] },
    { name: "Tools", items: ["Git", "VS Code", "Visual Studio", "Docker", "Azure"] },
  ]

  return (
    <main className="min-h-screen p-8 animate-fadeIn">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-4 animate-slideDown">
            Welcome to My Internship Blog
          </h1>
          <p className="text-gray-300 text-lg">
            Documenting my journey as an intern at VAB
          </p>
        </header>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3 space-y-12">
            <AboutMeSection />
            <SkillsSection skills={skills} />
            <WeeklyReportsSection />
          </div>

          {/* Sidebar */}
          <HomeSidebar />
        </div>
      </div>
    </main>
  )
}
