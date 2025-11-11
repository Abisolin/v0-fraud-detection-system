"use client"

import Link from "next/link"
import { Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  onViewDashboard: () => void
}

export default function Header({ onViewDashboard }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Shield className="h-5 w-5" />
            </div>
            <span className="text-xl font-semibold text-foreground">GuardianAI</span>
          </div>

          <nav className="hidden gap-8 md:flex">
            <Link
              href="/monitoring"
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              Real-Time Monitoring
            </Link>
            <Link
              href="/solutions"
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              Solutions
            </Link>
            <Link
              href="/resources"
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              Resources
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/demo">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 bg-transparent">
                Request Demo
              </Button>
            </Link>
            <Button onClick={onViewDashboard} className="bg-primary hover:bg-primary/90 text-primary-foreground">
              View Dashboard
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
