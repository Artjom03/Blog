interface WeekSidebarProps {
  keyTechnologies: string[]
  achievements: string[]
}

export default function WeekSidebar({ keyTechnologies, achievements }: WeekSidebarProps) {
  return (
    <div className="lg:w-1/3 space-y-6">
      {/* Technologies */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
        <div className="flex flex-wrap gap-2">
          {keyTechnologies.map((tech) => (
            <span key={tech} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Key Achievements</h2>
        <ul className="space-y-3">
          {achievements.map((achievement) => (
            <li key={achievement} className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Progress */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Progress</h2>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          <span className="font-medium">Completion:</span>
          <div className="flex-1 bg-gray-200 rounded-full h-2">
            <div className="bg-blue-500 rounded-full h-2" style={{width: '100%'}}></div>
          </div>
          <span>100%</span>
        </div>
      </div>
    </div>
  )
} 