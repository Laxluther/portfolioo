"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Code, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeSwitcher } from "@/components/theme-switcher"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500",
        scrolled ? "bg-background/95 backdrop-blur-xl shadow-lg border-b border-border/50" : "bg-transparent",
      )}
    >
      <div className="container flex items-center justify-between h-20">
        <Link href="#home" className="flex items-center gap-2 group">
          <div className="relative">
            <Code className="h-8 w-8 text-primary transition-transform group-hover:rotate-12" />
            <Sparkles className="h-4 w-4 text-primary/60 absolute -top-1 -right-1 animate-pulse" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Sanidhya Rana
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative text-muted-foreground hover:text-foreground transition-colors group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
          ))}
          <div className="ml-4">
            <ThemeSwitcher />
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center gap-4">
          <ThemeSwitcher />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="relative"
          >
            <div className="relative w-6 h-6">
              <Menu
                className={cn(
                  "absolute inset-0 transition-all",
                  isOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100",
                )}
              />
              <X
                className={cn(
                  "absolute inset-0 transition-all",
                  isOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0",
                )}
              />
            </div>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden absolute top-20 left-0 w-full transition-all duration-300 overflow-hidden",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="bg-background/95 backdrop-blur-xl shadow-lg border-b border-border/50">
          <nav className="container py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="py-2 text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
