"use client"

import { Activity, Zap, TrendingUp, Lock, AlertCircle, BarChart3 } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    icon: Activity,
    title: "Real-Time Monitoring",
    description: "Continuous analysis of transactions with millisecond response times",
    href: "/monitoring",
  },
  {
    icon: AlertCircle,
    title: "Anomaly Detection",
    description: "ML-powered algorithms identify suspicious patterns instantly",
    href: "/anomaly",
  },
  {
    icon: TrendingUp,
    title: "Pattern Recognition",
    description: "Advanced behavioral analysis detects new fraud tactics",
    href: "/patterns",
  },
  {
    icon: Zap,
    title: "Instant Alerts",
    description: "Immediate notifications for suspicious transactions",
    href: "/alerts",
  },
  {
    icon: Lock,
    title: "Secure Processing",
    description: "Enterprise-grade encryption and compliance standards",
    href: "/security",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Comprehensive insights and detailed fraud reports",
    href: "/analytics",
  },
]

export default function Features() {
  return (
    <section className="w-full bg-secondary py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-secondary-foreground sm:text-4xl">
            Powerful Protection
          </h2>
          <p className="text-lg text-secondary-foreground/70">
            Comprehensive fraud detection powered by machine learning
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Link key={index} href={feature.href} className="group">
                <Card className="border-border bg-background hover:shadow-lg transition-shadow cursor-pointer h-full group-hover:border-primary/50">
                  <CardHeader>
                    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-foreground">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-foreground/70">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
