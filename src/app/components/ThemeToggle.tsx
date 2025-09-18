"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button onClick={() => {setTheme(theme === "dark" ? "light" : "dark"); console.log(theme);}} className="p-1.5 rounded-md bg-gray-100 dark:bg-neutral-900 hover:scale-110 transition cursor-pointer">
      {theme === "dark" ? (
        <Sun className=" text-gray-100" size={18} />
      ) : (
        <Moon className=" text-gray-800" size={18} />
      )}
    </button>
  );
}
