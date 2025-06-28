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
        <div className=" flex gap-2">
          <ModeToggle />
          <div className="max-w-40">
            <a href="https://www.buymeacoffee.com/usonleomik9" target="_blank">
              <img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=usonleomik9&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff" />
            </a>
          </div>
        </div>
      </nav>
      <Separator />
    </header>
  );
}
