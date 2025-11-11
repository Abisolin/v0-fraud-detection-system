"use client"

import { ArrowLeft, TrendingUp, BarChart3, Calendar } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

const performanceData = [
  { month: "Jan", detection_rate: 92.1, false_positive: 3.2, accuracy: 94.2 },
  { month: "Feb", detection_rate: 93.5, false_positive: 2.8, accuracy: 95.1 },
  { month: "Mar", detection_rate: 94.8, false_positive: 2.5, accuracy: 95.8 },
  { month: "Apr", detection_rate: 95.6, false_positive: 2.2, accuracy: 96.3 },
  { month: "May", detection_rate: 96.2, false_positive: 1.9, accuracy: 96.9 },
  { month: "Jun", detection_rate: 97.1, false_positive: 1.6, accuracy: 97.4 },
]

const fraudTypeData = [
  { type: "Card Not Present", count: 2340, amount: 145000 },
  { type: "Account Takeover", count: 1240, amount: 82000 },
  { type: "Synthetic ID", count: 856, amount: 156000 },
  { type: "Payment Fraud", count: 1456, amount: 98000 },
  { type: "Refund Fraud", count: 624, amount: 45000 },
]

export default function AnalyticsPage() {
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
            <h1 className="text-2xl font-bold text-foreground">Analytics Dashboard</h1>
            <div className="w-32" />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Key Metrics */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <Card className="border-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-foreground/70 flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-green-500" />
                Detection Rate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-foreground">97.1%</p>
              <p className="text-xs text-foreground/70 mt-1">+0.9% this month</p>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-foreground/70 flex items-center gap-2">
                <BarChart3 className="h-4 w-4 text-blue-500" />
                Frauds Blocked
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-foreground">6,516</p>
              <p className="text-xs text-foreground/70 mt-1">This month</p>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-foreground/70">Total Saved</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-foreground">$8.9M</p>
              <p className="text-xs text-foreground/70 mt-1">In prevented losses</p>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-foreground/70 flex items-center gap-2">
                <Calendar className="h-4 w-4 text-purple-500" />
                Report Period
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-foreground">6M</p>
              <p className="text-xs text-foreground/70 mt-1">Jan - Jun 2024</p>
            </CardContent>
          </Card>
        </div>

        {/* Performance Trends */}
        <Card className="border-border mb-8">
          <CardHeader>
            <CardTitle className="text-foreground">Performance Metrics Trend</CardTitle>
            <CardDescription className="text-foreground/70">6-month historical performance analysis</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <AreaChart data={performanceData}>
                <defs>
                  <linearGradient id="colorDetection" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--foreground))" />
                <YAxis stroke="hsl(var(--foreground))" />
                <Tooltip
                  contentStyle={{ backgroundColor: "hsl(var(--background))", border: "1px solid hsl(var(--border))" }}
                />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="accuracy"
                  stroke="hsl(var(--chart-1))"
                  fillOpacity={1}
                  fill="url(#colorDetection)"
                  name="Accuracy %"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Fraud Type Distribution */}
        <Card className="border-border mb-8">
          <CardHeader>
            <CardTitle className="text-foreground">Fraud Types Detected</CardTitle>
            <CardDescription className="text-foreground/70">
              Distribution of fraud types and transaction amounts
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={fraudTypeData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="type" stroke="hsl(var(--foreground))" angle={-45} textAnchor="end" height={100} />
                <YAxis stroke="hsl(var(--foreground))" />
                <Tooltip
                  contentStyle={{ backgroundColor: "hsl(var(--background))", border: "1px solid hsl(var(--border))" }}
                />
                <Legend />
                <Bar dataKey="count" fill="hsl(var(--chart-1))" name="Cases Detected" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Analytics Features */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="text-foreground">Comprehensive Analytics Platform</CardTitle>
            <CardDescription className="text-foreground/70">
              Detailed fraud reports and business insights
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              {[
                {
                  title: "Fraud Detection Rates",
                  desc: "Track detection accuracy, false positive rates, and coverage metrics",
                },
                {
                  title: "Trend Analysis",
                  desc: "Monitor fraud pattern evolution and emerging threat trends",
                },
                {
                  title: "Industry Benchmarking",
                  desc: "Compare your performance against industry standards and best practices",
                },
                {
                  title: "Custom Reports",
                  desc: "Generate customizable reports for compliance and executive reviews",
                },
                {
                  title: "Data Export",
                  desc: "Export detailed data in multiple formats for external analysis",
                },
                {
                  title: "Real-Time KPIs",
                  desc: "Live dashboards with key performance indicators updated in real-time",
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
