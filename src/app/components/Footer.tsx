export default function Footer() {
  return (
    <footer className="bg-white shadow-md mt-auto">
      <div className="max-w-4xl mx-auto px-8 py-4">
        <div className="flex justify-between items-center text-sm text-gray-600">
          <p>© 2025 Artjom Kuzmenko</p>
          <div className="flex gap-4">
            <a 
              href="https://github.com/Artjom03" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors"
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/artjom-kuzmenko-187482265" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
} 