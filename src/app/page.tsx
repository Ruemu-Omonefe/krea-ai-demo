"use client";

import Hero from "./components/Hero";
import { BookCopy, Banknote } from "lucide-react";
import Prompt from "./prompt/page";


export default function Home() {

  return (
    <div className="bg-background items-center justify-items-center py-8 pl-8 pb-20 gap-16">
      {/* Hero Section */}
      <Hero />
      {/* Prompt Section */}
      <Prompt/>
      {/* Gallery Section */}
      <section className="p-6 w-full">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-semibold dark:text-white">Gallery</h2>
          <div className="flex gap-2">
             <button className="flex gap-1 items-center text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-neutral-900 hover:scale-110 transition p-1.5 rounded-md text-sm font-medium" ><BookCopy size={15} /> Legal</button>
             <button className="flex gap-1 items-center text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-neutral-900 hover:scale-110 transition p-1.5 rounded-md text-sm font-medium" ><Banknote size={15} /> Pricing</button>
          </div>
        </div>
      </section>
    </div>
  );
}
