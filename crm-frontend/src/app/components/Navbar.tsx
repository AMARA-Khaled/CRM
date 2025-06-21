'use client'

import Link from "next/link";
import { LayoutDashboard } from "lucide-react";
import { Users } from "lucide-react";
import { UserPlus } from "lucide-react";
import { use, useState } from "react";
import { Menu } from "lucide-react";

type NavbarProps = {
   x: number;
};

export default function Navbar({ x }: NavbarProps) {
   const [isOpen, setIsOpen] = useState(false)
   const [activeIndex, setActiveIndex] = useState(x)
   const setActive = (index: number) => {
      setActiveIndex(index)
   }
   const isActive = (index: number) => {
      return activeIndex === index
   }

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

   const toggleMenu = () => {
      setIsOpen(!isOpen)
   }

   const closeMenu = () => {
      setIsOpen(false)
   }

   return (
      <div className="relative ">
      {/* Desktop Navigation */}
      <nav
        className="hidden md:flex gap-4 p-4 bg-gray-800 text-white justify-evenly rounded-2xl"
        style={{ fontFamily: "Roboto, sans-serif" }}
      >
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <div
              key={item.index}
              className={
                x === item.index ? "text-green-400 animate-pulse flex items-center gap-2" : "flex items-center gap-2"
              }
            >
              <Icon />
              <Link href={item.href}>{item.label}</Link>
            </div>
          )
        })}
      </nav>

      {/* Mobile Bottom Navigation */}
      <nav
        className="md:hidden fixed bottom-0 left-0 right-0 bg-gray-800 text-white border-t border-gray-700 z-50"
        style={{ fontFamily: "Roboto, sans-serif" }}
      >
        <div className="flex justify-around items-center py-2">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.index}
                href={item.href}
                className={`flex flex-col items-center justify-center p-2 min-w-0 flex-1 ${
                  x === item.index ? "text-green-400" : "text-gray-300"
                } hover:text-white transition-colors`}
              >
                <div className={`mb-1 ${x === item.index ? "animate-pulse" : ""}`}>
                  <Icon size={24} />
                </div>
                <span className="text-xs font-medium text-center leading-tight">{item.label}</span>
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
