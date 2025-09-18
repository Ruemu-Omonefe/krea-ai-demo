"use client";

import NextImage from "next/image";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {Home, Image, Video, Wand2, Pen, Ruler, Folder, Bell, BookImage} from "lucide-react";

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

  return (
    <header className="sticky top-0 z-50 flex justify-between items-center px-4 md:px-6 py-3 bg-background">
      {/* Left */}
      <div className="flex items-center gap-8">
        <NextImage src="/images/k-logo.png" alt="Logo" className="w-8 h-8" width={32} height={32} />

        <div className="hidden sm:flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-200 to-blue-400"></div>
          <span className="font-semibold text-gray-900 dark:text-gray-100">benevolenttime</span>
        </div>
      </div>
      {/* Center Toolbar */}
      <nav className="flex items-center bg-gray-100 dark:bg-neutral-900 rounded-2xl px-2 py-1 overflow-x-auto scrollbar-hide">
        {navItems.map(({ path, icon: Icon }) => {
          const isActive = pathname === path;
          return (
            <Link key={path} href={path} className={`flex justify-center items-center h-10 w-13 rounded-xl transition-colors 
                ${isActive ? "bg-white dark:bg-gray-200 text-black" : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-neutral-800 hover:text-black dark:hover:text-white"
              }`}
            >
              <Icon size={20} />
            </Link>
          );
        })}
      </nav>

      {/* Right nav */}
      <nav className="flex items-center gap-3">
        <div className="hidden sm:inline">
          <button className="flex gap-1 items-center text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-neutral-900 hover:scale-110 transition p-1.5 rounded-md text-sm font-medium" ><BookImage size={15} /> Gallery </button>
        </div>
        <div className="hidden sm:inline">
          <button className="flex gap-1 items-center text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-neutral-900 hover:scale-110 transition p-1.5 rounded-md text-sm font-medium" ><BookImage size={15} /> Support</button>
        </div>
        <button className="p-1.5 bg-gray-100 dark:bg-neutral-900 rounded-md cursor-pointer hover:scale-110 transition"><Bell className="text-gray-700 dark:text-gray-300" size={18} /></button>
        
        <ThemeToggle />
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-200 to-blue-400"></div>
      </nav>
    </header>
  );
}
