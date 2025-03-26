export default function HomeSidebar() {
  const quickLinks = [
    { title: "Latest Week", href: "/weeks/1", description: "View my most recent internship week" },
    { title: "Before We Begin", href: "/weeks/0", description: "How I prepared for the internship" },
    { title: "All Reports", href: "/weeks", description: "Browse all weekly reports" }
  ]

  const internshipInfo = {
    company: "VAB Solutions",
    duration: "15 weeks",
    period: "February - May 2025",
    location: "Zwijndrecht, Belgium"
  }

  return (
    <div className="lg:w-1/3 space-y-6">
      {/* Contact Information */}
      <div className="bg-[#1e2432] rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4 text-white">Contact Information</h2>
        <div className="space-y-4">
          <div>
            <p className="text-gray-400">Email:</p>
            <a 
              href="mailto:artjom.kuzmenko03@gmail.com"
              className="text-blue-400 hover:text-blue-300"
            >
              artjom.kuzmenko03@gmail.com
            </a>
          </div>
          <div>
            <p className="text-gray-400">School:</p>
            <p className="text-white">AP Hogeschool</p>
          </div>
          <div>
            <p className="text-gray-400">Program:</p>
            <p className="text-white">Software Development</p>
          </div>
          <div className="pt-2">
            <a 
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-[#2d3548] w-full justify-center text-white rounded-lg hover:bg-[#353d54] transition-colors border border-transparent hover:border-blue-400"
            >
              <span className="mr-2">📄</span>
              View Resume
            </a>
          </div>
        </div>
      </div>

      {/* Internship Details */}
      <div className="bg-[#1e2432] rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4 text-white">Internship Details</h2>
        <div className="space-y-3">
          <p className="flex justify-between">
            <span className="text-gray-400">Company:</span>
            <span className="font-medium text-white">{internshipInfo.company}</span>
          </p>
          <p className="flex justify-between">
            <span className="text-gray-400">Duration:</span>
            <span className="font-medium text-white">{internshipInfo.duration}</span>
          </p>
          <p className="flex justify-between">
            <span className="text-gray-400">Period:</span>
            <span className="font-medium text-white">{internshipInfo.period}</span>
          </p>
          <p className="flex justify-between">
            <span className="text-gray-400">Location:</span>
            <span className="font-medium text-white">{internshipInfo.location}</span>
          </p>
        </div>
      </div>

      {/* Quick Links - Moved to bottom */}
      <div className="bg-[#1e2432] rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4 text-white">Quick Links</h2>
        <div className="space-y-4">
          {quickLinks.map((link) => (
            <a 
              key={link.title}
              href={link.href}
              className="block p-4 bg-[#2d3548] rounded-lg hover:bg-[#353d54] transition-colors border border-transparent hover:border-blue-400"
            >
              <h3 className="font-medium text-blue-400 hover:text-blue-300">{link.title}</h3>
              <p className="text-sm text-gray-400 mt-1">{link.description}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
} 