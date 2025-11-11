"use client"

import { ArrowLeft, Network, TrendingUp, Shield } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const patternData = [
  { type: "Network Rings", detected: 34, risk_level: "Critical" },
  { type: "Account Linkage", detected: 67, risk_level: "High" },
  { type: "Similar Sequences", detected: 156, risk_level: "High" },
  { type: "Seasonal Patterns", detected: 89, risk_level: "Medium" },
  { type: "Cross-Channel", detected: 45, risk_level: "High" },
]

export default function PatternsPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 text-foreground hover:text-foreground/70 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium">Back to Home</span>
            </Link>
            <h1 className="text-2xl font-bold text-foreground">Pattern Recognition</h1>
            <div className="w-32" />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Key Metrics */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <Card className="border-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-foreground/70">Fraud Rings Detected</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-foreground">34</p>
              <p className="text-xs text-foreground/70 mt-1">Organized fraud networks</p>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-foreground/70 flex items-center gap-2">
                <Network className="h-4 w-4 text-purple-500" />
                Linked Accounts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-foreground">2,847</p>
              <p className="text-xs text-foreground/70 mt-1">Suspicious account connections</p>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-foreground/70 flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-orange-500" />
                Pattern Match Rate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-foreground">94.2%</p>
              <p className="text-xs text-foreground/70 mt-1">Accuracy in matching</p>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-foreground/70 flex items-center gap-2">
                <Shield className="h-4 w-4 text-green-500" />
                Prevented Losses
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-foreground">$2.3M</p>
              <p className="text-xs text-foreground/70 mt-1">This quarter</p>
            </CardContent>
          </Card>
        </div>

        {/* Pattern Detection Chart */}
        <Card className="border-border mb-8">
          <CardHeader>
            <CardTitle className="text-foreground">Fraud Patterns Detected</CardTitle>
            <CardDescription className="text-foreground/70">
              Distribution of detected fraud pattern types
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={patternData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="type" stroke="hsl(var(--foreground))" angle={-45} textAnchor="end" height={100} />
                <YAxis stroke="hsl(var(--foreground))" />
                <Tooltip
                  contentStyle={{ backgroundColor: "hsl(var(--background))", border: "1px solid hsl(var(--border))" }}
                />
                <Bar dataKey="detected" fill="hsl(var(--chart-1))" name="Detected Patterns" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Features Description */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="text-foreground">Advanced Pattern Recognition</CardTitle>
            <CardDescription className="text-foreground/70">
              Behavioral analysis detects new fraud tactics
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              {[
                {
                  title: "Fraud Ring Detection",
                  desc: "Network analysis to detect organized fraud rings operating together",
                },
                {
                  title: "Account Linkage",
                  desc: "Identifies connections between accounts used for coordinated fraud",
                },
                {
                  title: "Transaction Sequences",
                  desc: "Detects similar transaction patterns suggesting coordinated activity",
                },
                {
                  title: "Seasonal Analysis",
                  desc: "Trend-based pattern analysis accounting for seasonal variations",
                },
                {
                  title: "Cross-Channel Correlation",
                  desc: "Correlates fraud patterns across multiple channels and platforms",
                },
                {
                  title: "Adaptive Learning",
                  desc: "System learns and adapts to emerging fraud patterns continuously",
                },
              ].map((feature, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-secondary/50 border border-border/50">
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-foreground/70">{feature.desc}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
