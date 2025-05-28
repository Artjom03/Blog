"use client";
import { useRouter } from "next/navigation";

export default function MobileNavDropdown() {
  const router = useRouter();
  return (
    <nav className="block sm:hidden w-full mb-6">
      <select
        className="w-full px-4 py-2 rounded-lg bg-[#23293a] text-gray-200 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
        onChange={e => {
          if (e.target.value) router.push(e.target.value);
        }}
        defaultValue=""
      >
        <option value="" disabled>Navigate to...</option>
        <option value="/">Home</option>
        <option value="/about">About Me</option>
        <option value="/weeks">Weekly Reports</option>
        <option value="/blog">Blog & Tutorials</option>
        <option value="/experience">Experience</option>
      </select>
    </nav>
  );
}
