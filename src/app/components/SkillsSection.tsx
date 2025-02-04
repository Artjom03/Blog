interface SkillCategory {
  name: string;
  items: string[];
}

interface SkillsSectionProps {
  skills: SkillCategory[];
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <div className="p-6 bg-[#1e2432] rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <h2 className="text-2xl font-semibold mb-6 text-white">Technical Skills</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {skills.map((category) => (
          <div key={category.name}>
            <h3 className="font-medium text-white mb-3">{category.name}</h3>
            <div className="flex flex-wrap gap-2">
              {category.items.map((skill) => (
                <span 
                  key={skill}
                  className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 