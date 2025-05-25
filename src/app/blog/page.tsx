'use client'
import Link from 'next/link'
import { useState } from 'react'

interface BlogPost {
  id: string
  title: string
  description: string
  category: 'tutorial' | 'tip'
  date: string
  readTime: string
}

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'tutorial' | 'tip'>('all')

  const posts: BlogPost[] = [
    {
      id: 'getting-started-angular',
      title: 'Getting Started with Angular at VAB',
      description: 'A comprehensive guide for new interns on setting up and understanding Angular development environment.',
      category: 'tutorial',
      date: 'Week 1 - Getting Started',
      readTime: '8 min read'
    },
    {
      id: 'intern-tips',
      title: 'Top 10 Tips for New Interns',
      description: 'Essential advice and insights for making the most of your internship experience.',
      category: 'tip',
      date: 'Before We Begin',
      readTime: '5 min read'
    },
    {
      id: 'typescript-best-practices',
      title: 'TypeScript Best Practices in Production',
      description: 'Learn the best practices for writing clean and maintainable TypeScript code.',
      category: 'tutorial',
      date: 'Week 2 - Best Practices',
      readTime: '10 min read'
    }
  ]

  const filteredPosts = selectedCategory === 'all' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory)

  return (
    <main className="min-h-screen p-8 animate-fadeIn bg-gradient-to-br from-[#1e2432] via-[#23293a] to-[#2d3548]">
      <div className="max-w-7xl mx-auto">
        {/* Add a colorful accent bar */}
        <div className="h-2 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded mb-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-white animate-slideDown mb-4 md:mb-0 drop-shadow">
            Blog & Tutorials
          </h1>

          {/* Category Filter */}
          <div className="flex gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                selectedCategory === 'all' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-[#2d3548] text-gray-300 hover:bg-[#353d54]'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setSelectedCategory('tutorial')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                selectedCategory === 'tutorial' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-[#2d3548] text-gray-300 hover:bg-[#353d54]'
              }`}
            >
              Tutorials
            </button>
            <button
              onClick={() => setSelectedCategory('tip')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                selectedCategory === 'tip' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-[#2d3548] text-gray-300 hover:bg-[#353d54]'
              }`}
            >
              Tips
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredPosts.map((post) => (
            <Link 
              key={post.id}
              href={`/blog/${post.id}`}
              className="block"
            >
              <article className="p-6 bg-gradient-to-br from-blue-900/60 via-[#1e2432] to-purple-900/60 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-blue-900/20 relative overflow-hidden group">
                {/* Decorative gradient circle */}
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-20 rounded-full blur-2xl pointer-events-none group-hover:opacity-40 transition-opacity"></div>
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-start mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      post.category === 'tutorial' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-green-600 text-white'
                    }`}>
                      {post.category === 'tutorial' ? 'Tutorial' : 'Tip'}
                    </span>
                    <span className="text-gray-400 text-sm">{post.readTime}</span>
                  </div>
                  <h2 className="text-2xl font-semibold mb-2 text-white">
                    {post.title}
                  </h2>
                  <p className="text-gray-300 mb-4 flex-grow">
                    {post.description}
                  </p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-gray-400 text-sm">{post.date}</span>
                    <span className="text-blue-400 hover:text-blue-300 font-medium">
                      Read more
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}