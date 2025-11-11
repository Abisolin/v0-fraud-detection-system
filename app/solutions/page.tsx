"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Shield, TrendingUp, AlertCircle, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

export default function SolutionsPage() {
  const [timeRange, setTimeRange] = useState("24h")

  const getTimeRangeData = () => {
    const baseData = {
      "24h": {
        label: "Last 24 Hours",
        chartData: [
          { time: "00:00", prevention: 45, detected: 12, blocked: 8 },
          { time: "04:00", prevention: 52, detected: 15, blocked: 10 },
          { time: "08:00", prevention: 78, detected: 22, blocked: 18 },
          { time: "12:00", prevention: 95, detected: 28, blocked: 25 },
          { time: "16:00", prevention: 87, detected: 25, blocked: 22 },
          { time: "20:00", prevention: 65, detected: 18, blocked: 15 },
          { time: "24:00", prevention: 42, detected: 10, blocked: 7 },
        ],
        metrics: {
          prevented: "2,847",
          detected: "342",
          blocked: "289",
          efficiency: "94.2%",
        },
      },
      "7d": {
        label: "Last 7 Days",
        chartData: [
          { time: "Mon", prevention: 285, detected: 82, blocked: 72 },
          { time: "Tue", prevention: 320, detected: 95, blocked: 84 },
          { time: "Wed", prevention: 405, detected: 118, blocked: 105 },
          { time: "Thu", prevention: 380, detected: 110, blocked: 98 },
          { time: "Fri", prevention: 450, detected: 135, blocked: 122 },
          { time: "Sat", prevention: 320, detected: 92, blocked: 82 },
          { time: "Sun", prevention: 295, detected: 85, blocked: 75 },
        ],
        metrics: {
          prevented: "19,929",
          detected: "2,394",
          blocked: "2,023",
          efficiency: "94.8%",
        },
      },
      "30d": {
        label: "Last 30 Days",
        chartData: [
          { time: "Week 1", prevention: 1290, detected: 369, blocked: 327 },
          { time: "Week 2", prevention: 1485, detected: 428, blocked: 378 },
          { time: "Week 3", prevention: 1820, detected: 531, blocked: 473 },
          { time: "Week 4", prevention: 1650, detected: 475, blocked: 422 },
        ],
        metrics: {
          prevented: "85,847",
          detected: "10,234",
          blocked: "8,945",
          efficiency: "95.1%",
        },
      },
    }
    return baseData[timeRange as keyof typeof baseData]
  }

  const data = getTimeRangeData()

  const solutionCategories = [
    {
      title: "E-Commerce Protection",
      description: "Safeguard online transactions and prevent payment fraud",
      icon: Shield,
      features: ["Checkout Protection", "Card Verification", "Velocity Analysis"],
      stats: { prevented: "98.5%", detected: "2,847" },
    },
    {
      title: "Banking Security",
      description: "Protect account takeovers and unauthorized access",
      icon: Lock,
      features: ["Account Monitoring", "Login Alerts", "Behavior Analysis"],
      stats: { prevented: "99.2%", detected: "342" },
    },
    {
      title: "Real-Time Alerts",
      description: "Instant notifications for suspicious activities",
      icon: AlertCircle,
      features: ["SMS Alerts", "Email Notifications", "Dashboard Updates"],
      stats: { prevented: "96.8%", detected: "289" },
    },
    {
      title: "Advanced Analytics",
      description: "Deep insights into fraud patterns and trends",
      icon: TrendingUp,
      features: ["Trend Analysis", "Predictive Modeling", "Risk Scoring"],
      stats: { prevented: "97.3%", detected: "1,245" },
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-4">
            <ArrowRight className="w-4 h-4 rotate-180" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold mb-4">Fraud Detection Solutions</h1>
          <p className="text-lg text-muted-foreground">Comprehensive solutions tailored to your industry needs</p>
        </div>

        {/* Time Range Filter */}
        <div className="flex gap-3 mb-8">
          {["24h", "7d", "30d"].map((range) => (
            <Button
              key={range}
              variant={timeRange === range ? "default" : "outline"}
              onClick={() => setTimeRange(range)}
              className="capitalize"
            >
              {range === "24h" ? "24 Hours" : range === "7d" ? "7 Days" : "30 Days"}
            </Button>
          ))}
        </div>

        {/* Performance Overview */}
        <Card className="mb-8 bg-gradient-to-r from-primary/5 to-accent/5">
          <CardHeader>
            <CardTitle>Performance Overview - {data.label}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-background p-4 rounded-lg border">
                <p className="text-sm text-muted-foreground mb-1">Transactions Prevented</p>
                <p className="text-2xl font-bold text-green-600">{data.metrics.prevented}</p>
              </div>
              <div className="bg-background p-4 rounded-lg border">
                <p className="text-sm text-muted-foreground mb-1">Fraud Detected</p>
                <p className="text-2xl font-bold text-yellow-600">{data.metrics.detected}</p>
              </div>
              <div className="bg-background p-4 rounded-lg border">
                <p className="text-sm text-muted-foreground mb-1">Blocked Transactions</p>
                <p className="text-2xl font-bold text-red-600">{data.metrics.blocked}</p>
              </div>
              <div className="bg-background p-4 rounded-lg border">
                <p className="text-sm text-muted-foreground mb-1">Efficiency Rate</p>
                <p className="text-2xl font-bold text-blue-600">{data.metrics.efficiency}</p>
              </div>
            </div>

            {/* Chart */}
            <div className="bg-background p-6 rounded-lg border h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data.chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="prevention"
                    stackId="1"
                    stroke="#10b981"
                    fill="#10b98133"
                    name="Prevented"
                  />
                  <Area
                    type="monotone"
                    dataKey="detected"
                    stackId="1"
                    stroke="#f59e0b"
                    fill="#f59e0b33"
                    name="Detected"
                  />
                  <Area
                    type="monotone"
                    dataKey="blocked"
                    stackId="1"
                    stroke="#ef4444"
                    fill="#ef444433"
                    name="Blocked"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Solution Categories */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Our Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solutionCategories.map((solution, index) => {
              const Icon = solution.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-3">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle>{solution.title}</CardTitle>
                    <CardDescription>{solution.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {solution.features.map((feature, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-secondary/50 p-3 rounded-lg">
                      <p className="text-xs text-muted-foreground mb-1">Performance</p>
                      <div className="flex justify-between">
                        <span className="text-sm font-semibold text-green-600">
                          Prevention: {solution.stats.prevented}
                        </span>
                        <span className="text-sm font-semibold text-yellow-600">
                          Detected: {solution.stats.detected}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
