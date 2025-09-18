"use client";

import NextImage from "next/image";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {Home, Image, Video, Wand2, Pen, Ruler, Folder, Bell, BookImage, ChevronDown} from "lucide-react";
import { useState } from "react";

const navItems = [
  { path: "/", icon: Home },
  { path: "/images", icon: Image },
  { path: "/videos", icon: Video },
  { path: "/magic", icon: Wand2 },
  { path: "/draw", icon: Pen },
  { path: "/design", icon: Ruler },
  { path: "/files", icon: Folder },
];

export default function Header() {
  const pathname = usePathname();
  const [dropdown, setDropdown] = useState(false);

  return (
   <header className="sticky top-0 z-50 flex items-center justify-between px-4 md:px-6 py-3 bg-transparent">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        {/* Logos */}
        <NextImage src="/images/logo-dark.png" alt="Logo" className="w-8 h-8 hidden dark:block" width={32} height={32} />
        <NextImage src="/images/logo-light.jpg" alt="Logo" className="w-8 h-8 dark:hidden" width={32} height={32} />

        {/* Mobile hamburger */}
        <div className="relative md:hidden " onClick={() => setDropdown(!dropdown)}>
          <button className="p-1.5 bg-gray-100 dark:bg-neutral-900 rounded-md cursor-pointer">
            <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
            {dropdown && (
              <div className="absolute left-0 mt-2 w-48 rounded-lg shadow-lg bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 py-2 z-50">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-neutral-800">Profile</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-neutral-800">Settings</a>
                <button className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-neutral-800">Logout</button>
              </div>
            )}
        </div>

        {/* Profile dropdown */}
        <div className="relative hidden sm:block">
          <button onClick={() => setDropdown(!dropdown)} className="flex items-center gap-2 cursor-pointer">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-pink-200 to-blue-400"></div>
            <span className="font-semibold text-gray-900 dark:text-gray-100">benevolenttime</span>
            <ChevronDown className={`h-4 w-4 text-gray-600 dark:text-gray-300 transition-transform ${dropdown ? "rotate-180" : ""}`} />
          </button>

          {dropdown && (
            <div className="absolute right-0 mt-2 w-48 rounded-lg shadow-lg bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 py-2 z-50">
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-neutral-800">Profile</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-neutral-800">Settings</a>
              <button className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-neutral-800">Logout</button>
            </div>
          )}
        </div>
      </div>

      {/* Middle Section */}
      <nav className="hidden md:flex items-center bg-gray-100 dark:bg-neutral-900 rounded-2xl p-1.5">
        {navItems.map(({ path, icon: Icon }) => {
          const isActive = pathname === path;
          return (
            <Link
              key={path}
              href={path}
              className={`flex justify-center items-center h-10 w-12 rounded-xl transition-colors ${
                isActive
                  ? "bg-white dark:bg-gray-200 text-black"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-neutral-800 hover:text-black dark:hover:text-white"
              }`}
            >
              <Icon size={20} />
            </Link>
          );
        })}
      </nav>

      {/* Right Nav */}
      <nav className="flex items-center gap-3">
        {/* Desktop buttons */}
        <div className="hidden sm:flex gap-2">
          <button className="flex gap-1 items-center text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-neutral-900 hover:scale-110 transition p-1.5 rounded-md text-sm font-medium"><BookImage size={15} /> Gallery</button>
          <button className="flex gap-1 items-center text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-neutral-900 hover:scale-110 transition p-1.5 rounded-md text-sm font-medium"><BookImage size={15} /> Support</button>
        </div>

        {/* Notifications + Theme toggle */}
        <button className="p-1.5 bg-gray-100 dark:bg-neutral-900 rounded-md cursor-pointer hover:scale-110 transition">
          <Bell className="text-gray-700 dark:text-gray-300" size={18} />
        </button>
        <ThemeToggle />

        {/* Mobile profile avatar */}
        <div className="w-7 h-7 rounded-full bg-gradient-to-r from-pink-200 to-blue-400 sm:hidden"></div>
      </nav>
    </header>

  );
}
