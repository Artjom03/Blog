import Link from 'next/link';

export default function MobileNavDropdown() {
  return (
    <div className="md:hidden sticky top-0 z-50 bg-[#181c27] shadow-lg border-b border-blue-900/30 px-0 py-0 flex justify-center items-center">
      <nav className="w-full max-w-sm mx-auto my-3 rounded-2xl bg-gradient-to-r from-blue-900 via-[#23293a] to-purple-900 p-2 flex gap-1 shadow-lg border border-blue-900/40">
        <Link
          href="/"
          className="flex-1 px-1 py-2 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors text-center shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="flex-1 px-1 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-colors text-center shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
        >
          About
        </Link>
        <Link
          href="/weeks"
          className="flex-1 px-1 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 transition-colors text-center shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
        >
          Weeks
        </Link>
        <Link
          href="/blog"
          className="flex-1 px-1 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 transition-colors text-center shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
        >
          Blog
        </Link>
        <Link
          href="/experience"
          className="flex-1 px-1 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-blue-400 to-purple-400 hover:from-blue-500 hover:to-purple-500 transition-colors text-center shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Exp
        </Link>
      </nav>
    </div>
  );
}
