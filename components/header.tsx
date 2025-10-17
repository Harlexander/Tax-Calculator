"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
            AI
          </div>
          <span className="font-bold text-lg hidden sm:inline">AI Drive Tax</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/calculator" className="text-sm font-medium hover:text-primary transition-colors">
            Calculator
          </Link>
          <Link href="/tax-reform-2025" className="text-sm font-medium hover:text-primary transition-colors">
            Tax Reform 2025
          </Link>
          <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">
            Features
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" asChild>
            <Link href="/calculator">Try Calculator</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/tax-reform-2025">Tax Reform 2025</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
