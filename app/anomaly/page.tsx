"use client"

import { useState } from "react"
import { ArrowLeft, TrendingDown, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts"

const anomalyData = [
  { category: "Behavioral", detected: 245, false_positive: 12 },
  { category: "Geographic", detected: 189, false_positive: 8 },
  { category: "Transaction", detected: 312, false_positive: 15 },
  { category: "Device", detected: 156, false_positive: 6 },
  { category: "Time-Based", detected: 234, false_positive: 11 },
]

const accuracyData = [
  { month: "Jan", accuracy: 94.2, coverage: 96 },
  { month: "Feb", accuracy: 95.1, coverage: 97 },
  { month: "Mar", accuracy: 95.8, coverage: 97.5 },
  { month: "Apr", accuracy: 96.3, coverage: 98 },
  { month: "May", accuracy: 96.9, coverage: 98.2 },
  { month: "Jun", accuracy: 97.4, coverage: 98.5 },
]

export default function AnomalyPage() {
  const [stats, setStats] = useState({
    totalAnomalies: 1136,
    accuracyRate: 97.4,
    falsePositives: 52,
    avgDetectionTime: 145,
  })

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
            <h1 className="text-2xl font-bold text-foreground">Anomaly Detection</h1>
            <div className="w-32" />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Key Metrics */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <Card className="border-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-foreground/70">Total Anomalies Detected</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-foreground">{stats.totalAnomalies.toLocaleString()}</p>
              <p className="text-xs text-foreground/70 mt-1">Last 30 days</p>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-foreground/70 flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Accuracy Rate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-foreground">{stats.accuracyRate}%</p>
              <p className="text-xs text-foreground/70 mt-1">ML model performance</p>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-foreground/70 flex items-center gap-2">
                <TrendingDown className="h-4 w-4 text-blue-500" />
                False Positives
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-foreground">{stats.falsePositives}</p>
              <p className="text-xs text-foreground/70 mt-1">Out of {stats.totalAnomalies}</p>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-foreground/70">Avg Detection Time</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-foreground">{stats.avgDetectionTime}ms</p>
              <p className="text-xs text-foreground/70 mt-1">Real-time processing</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts Grid */}
        <div className="grid gap-6 mb-8">
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-foreground">Anomalies Detected by Category</CardTitle>
              <CardDescription className="text-foreground/70">
                ML detection performance across different anomaly types
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={anomalyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="category" stroke="hsl(var(--foreground))" />
                  <YAxis stroke="hsl(var(--foreground))" />
                  <Tooltip
                    contentStyle={{ backgroundColor: "hsl(var(--background))", border: "1px solid hsl(var(--border))" }}
                  />
                  <Legend />
                  <Bar dataKey="detected" fill="hsl(var(--chart-1))" name="Detected" />
                  <Bar dataKey="false_positive" fill="hsl(var(--chart-2))" name="False Positives" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-foreground">Accuracy & Coverage Trend</CardTitle>
              <CardDescription className="text-foreground/70">
                Monthly improvement in detection accuracy and coverage
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={accuracyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" stroke="hsl(var(--foreground))" />
                  <YAxis stroke="hsl(var(--foreground))" domain={[90, 100]} />
                  <Tooltip
                    contentStyle={{ backgroundColor: "hsl(var(--background))", border: "1px solid hsl(var(--border))" }}
                  />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="accuracy"
                    stroke="hsl(var(--chart-1))"
                    name="Accuracy %"
                    strokeWidth={2}
                  />
                  <Line
                    type="monotone"
                    dataKey="coverage"
                    stroke="hsl(var(--chart-2))"
                    name="Coverage %"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Features Description */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="text-foreground">ML-Powered Anomaly Detection Capabilities</CardTitle>
            <CardDescription className="text-foreground/70">
              Advanced algorithms identify suspicious patterns instantly
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              {[
                {
                  title: "Behavioral Pattern Analysis",
                  desc: "Analyzes user behavior across accounts to identify deviations from normal patterns",
                },
                {
                  title: "Geographic Anomalies",
                  desc: "Detects impossible travel scenarios and unusual location changes",
                },
                {
                  title: "Transaction Amount Outliers",
                  desc: "Identifies unusual transaction amounts based on historical spending patterns",
                },
                {
                  title: "Device Fingerprinting",
                  desc: "Detects authentication anomalies and unauthorized device usage",
                },
                {
                  title: "Time-Based Patterns",
                  desc: "Analyzes transaction timing and frequency for suspicious behavior",
                },
                {
                  title: "Machine Learning Models",
                  desc: "Continuously learning models adapt to new fraud techniques in real-time",
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
