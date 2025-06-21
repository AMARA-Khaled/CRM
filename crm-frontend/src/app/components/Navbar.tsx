"use client"

import Link from "next/link"
import { LayoutDashboard, Users, UserPlus } from "lucide-react"
import { useState } from "react"

type NavbarProps = {
  x: number
}

export default function Navbar({ x }: NavbarProps) {
  const [activeIndex, setActiveIndex] = useState(x)

  const navItems = [
    {
      icon: LayoutDashboard,
      label: "Dashboard",
      href: "/dashboard",
      index: 0,
    },
    {
      icon: Users,
      label: "Clients List",
      href: "/client-list",
      index: 1,
    },
    {
      icon: UserPlus,
      label: "Add a Client",
      href: "/add-client",
      index: 2,
    },
  ]

  return (
    <div className="relative">
      {/* Desktop Navigation */}
      <nav
        className="hidden md:flex gap-2 lg:gap-4 p-3 lg:p-4 bg-gray-800 text-white justify-center sm:justify-evenly rounded-xl lg:rounded-2xl max-w-4xl mx-auto"
        style={{ fontFamily: "Roboto, sans-serif" }}
      >
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <Link
              key={item.index}
              href={item.href}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 hover:bg-gray-700 ${
                x === item.index ? "text-green-400 bg-gray-700 animate-pulse" : "text-white hover:text-green-300"
              }`}
            >
              <Icon size={20} className="lg:w-6 lg:h-6" />
              <span className="text-sm lg:text-base font-medium">{item.label}</span>
            </Link>
          )
        })}
      </nav>

      {/* Mobile Bottom Navigation */}
      <nav
        className="md:hidden fixed bottom-0 left-0 right-0 bg-gray-800 text-white border-t border-gray-700 z-50 safe-area-pb"
        style={{ fontFamily: "Roboto, sans-serif" }}
      >
        <div className="flex justify-around items-center py-2 px-2">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.index}
                href={item.href}
                className={`flex flex-col items-center justify-center p-2 min-w-0 flex-1 rounded-lg transition-all duration-200 ${
                  x === item.index ? "text-green-400 bg-gray-700" : "text-gray-300 hover:text-white hover:bg-gray-700"
                }`}
              >
                <div className={`mb-1 ${x === item.index ? "animate-pulse" : ""}`}>
                  <Icon size={20} />
                </div>
                <span className="text-xs font-medium text-center leading-tight px-1">{item.label}</span>
              </Link>
            )
          })}
        </div>
      </nav>

      {/* Mobile bottom padding to prevent content from being hidden behind navbar */}
      <div className="md:hidden h-16"></div>
    </div>
  )
}
