import Image from 'next/image'

export default function AboutMeSection() {
  return (
    <div className="p-6 bg-[#1e2432] rounded-lg shadow-md hover:shadow-lg transition-shadow animate-slideRight">
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <div className="relative w-48 h-48 rounded-lg overflow-hidden shadow-md flex-shrink-0">
          <Image
            src="/me.jpeg"
            alt="Artjom Kuzmenko"
            width={192}
            height={192}
            className="object-cover"
            priority
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-white">About Me</h2>
          <div className="space-y-2 text-gray-300">
            <p><span className="font-medium text-white">Name:</span> Kuzmenko Artjom</p>
            <p><span className="font-medium text-white">Age:</span> 21</p>
            <p><span className="font-medium text-white">Activity:</span> Programming</p>
            <p className="mt-4 text-gray-400">
              Passionate software developer with a focus on web technologies. Currently pursuing an internship
              to gain hands-on experience in real-world projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 