'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Calendar, Users, Settings } from 'lucide-react' // Lucide使用

const navItems = [
  { href: '/home', label: 'Home', icon: Home },
  { href: '/calendar', label: 'Calendar', icon: Calendar },
  { href: '/social', label: 'Social', icon: Users },
  { href: '/settings', label: 'Settings', icon: Settings },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 w-full bg-[#f8f7fa] border-t border-gray-200 shadow z-50">
      <div className="flex justify-around py-2">
        {navItems.map(({ href, label, icon: Icon }) => {
          const isActive = pathname.startsWith(href)
          return (
            <Link
              key={href}
              href={href}
              className="flex flex-col items-center text-xs text-gray-600"
            >
              <Icon
                size={24}
                className={`mb-1 ${
                  isActive ? 'text-purple-500' : 'text-gray-500'
                }`}
              />
              <span
                className={`${
                  isActive ? 'text-purple-500 font-semibold' : 'text-gray-500'
                }`}
              >
                {label}
              </span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
