import Link from 'next/link'

export default function WeeklyReportsSection() {
  return (
    <div className="grid gap-6">
      <article className="p-6 bg-[#1e2432] rounded-lg shadow-md hover:shadow-lg transition-shadow animate-slideUp">
        <h2 className="text-2xl font-semibold mb-4 text-white">Weekly Reports</h2>
        <p className="text-gray-400 mb-6">
          View detailed reports of my internship experience, organized by weeks.
          Follow my journey as I learn and grow in a professional development environment.
        </p>
        <Link 
          href="/weeks" 
          className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium"
        >
          View all weeks →
        </Link>
      </article>
    </div>
  )
} 