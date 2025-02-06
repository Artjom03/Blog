interface DayContent {
  title: string;
  tasks: string[];
  learnings?: string[];
}

interface WeekDaysProps {
  days: DayContent[];
}

export default function WeekDays({ days }: WeekDaysProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-6">
      {days.map((day, index) => (
        <div key={index} className="bg-[#252d3d] p-4 rounded-lg">
          <h3 className="text-lg font-medium text-white mb-3">{day.title}</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-blue-400 text-sm font-medium mb-2">Tasks</h4>
              <ul className="space-y-2">
                {day.tasks.map((task, i) => (
                  <li key={i} className="text-gray-300 text-sm">• {task}</li>
                ))}
              </ul>
            </div>
            {day.learnings && (
              <div>
                <h4 className="text-green-400 text-sm font-medium mb-2">Learnings</h4>
                <ul className="space-y-2">
                  {day.learnings.map((learning, i) => (
                    <li key={i} className="text-gray-300 text-sm">• {learning}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
} 