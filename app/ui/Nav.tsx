// app/components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full bg-gray-400 border-b border-gray-200 shadow-lg p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-white text-xl font-bold">
          NBA Stats
        </div>
        <div className="space-x-4">
          <Link href="/" className="text-white hover:text-gray-200">
            Home
          </Link>
          {/* Add more links as needed */}
        </div>
      </div>
    </nav>
  );
}
