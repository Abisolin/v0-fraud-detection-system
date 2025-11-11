"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface HeroProps {
  onGetStarted: () => void
}

export default function Hero({ onGetStarted }: HeroProps) {
  return (
    <section className="relative w-full overflow-hidden bg-background py-20 sm:py-32">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "url(/placeholder.svg?height=1200&width=1200&query=digital-pattern)",
          backgroundSize: "400px 400px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 inline-block rounded-full bg-secondary/20 px-4 py-2">
            <span className="text-sm font-medium text-secondary-foreground">Real-time Protection</span>
          </div>

          <h1 className="text-balance mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Advanced Fraud Detection
          </h1>

          <p className="text-balance mb-8 max-w-2xl text-lg text-foreground/70">
            Protect your financial transactions with AI-powered anomaly detection. Identify and prevent fraudulent
            activities in real-time using advanced machine learning algorithms.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              size="lg"
              onClick={onGetStarted}
              className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              View Live Demo <ArrowRight className="h-4 w-4" />
            </Button>
            <Link href="/demo">
              <Button
                size="lg"
                variant="outline"
                className="border-border text-foreground hover:bg-secondary bg-transparent"
              >
                Request Demo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
