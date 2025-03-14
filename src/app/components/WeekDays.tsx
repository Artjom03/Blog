interface DayContent {
  title: string;
  tasks: string[];
  learnings?: string[];
}

interface WeekDayProps {
  days: DayContent[];
}

export default function WeekDays({ days }: WeekDayProps) {
  return (
    <div className="mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {days.map((day, index) => (
          <div 
            key={index}
            className="bg-[#252b3b] rounded-lg p-4 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            <h3 className="text-xl font-semibold text-white mb-4">{day.title}</h3>
            
            <div className="space-y-4">
              {day.tasks.length > 0 && (
                <div>
                  <h4 className="text-blue-400 font-medium mb-2">Tasks</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    {day.tasks.map((task, taskIndex) => (
                      <li key={taskIndex} className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {day.learnings && day.learnings.length > 0 && (
                <div>
                  <h4 className="text-green-400 font-medium mb-2">Learnings</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    {day.learnings.map((learning, learningIndex) => (
                      <li key={learningIndex} className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">•</span>
                        <span>{learning}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 