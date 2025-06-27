"use client";

import { ModeToggle } from "./mode-toggle";
import { Separator } from "./ui/separator";

export function SiteHeader() {
  return (
    <header className="w-full">
      <nav className="container mx-auto  flex items-center justify-between px-4 py-3">
        <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
          🌱 GROW A GARDEN STOCKS
        </h1>
        <ModeToggle />
      </nav>
      <Separator />
    </header>
  );
}
