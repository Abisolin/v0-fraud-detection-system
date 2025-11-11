"use client"

import { useState, useEffect } from "react"
import { ArrowLeft, AlertTriangle, Clock, Activity } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"

const generateTransactionData = (period: string) => {
  const dataPoints = period === "24h" ? 12 : period === "7d" ? 7 : 30
  const timeLabels =
    period === "24h"
      ? Array.from({ length: 24 }, (_, i) => `${i}:00`)
      : period === "7d"
        ? ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        : Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`)

  return Array.from({ length: dataPoints }, (_, i) => ({
    time: timeLabels[i],
    legitimate: Math.floor(Math.random() * 800) + 400,
    suspicious: Math.floor(Math.random() * 200) + 50,
    blocked: Math.floor(Math.random() * 100) + 10,
  }))
}

const generateActivityData = () => {
  const types = ["Suspicious Login", "Large Transaction", "Unusual Location", "Velocity Check", "Device Mismatch"]
  return Array.from({ length: 8 }, (_, i) => ({
    id: i,
    type: types[Math.floor(Math.random() * types.length)],
    severity: Math.random() > 0.6 ? "high" : "medium",
    timestamp: `${Math.floor(Math.random() * 60)} min ago`,
    user: `User ${Math.floor(Math.random() * 1000)}`,
    status: Math.random() > 0.3 ? "blocked" : "flagged",
  }))
}

const getStatsByPeriod = (period: string, baseStats: any) => {
  const multipliers = {
    "24h": 1,
    "7d": 5.5,
    "30d": 22,
  }
  const multiplier = multipliers[period as keyof typeof multipliers] || 1

  return {
    processed: Math.floor(baseStats.processed * multiplier),
    blocked: Math.floor(baseStats.blocked * multiplier),
    suspicious: Math.floor(baseStats.suspicious * multiplier),
    avgResponse: baseStats.avgResponse,
  }
}

export default function MonitoringPage() {
  const [timeRange, setTimeRange] = useState("24h")
  const [transactionData, setTransactionData] = useState(generateTransactionData("24h"))
  const [activityData, setActivityData] = useState(generateActivityData())
  const [baseStats, setBaseStats] = useState({
    processed: 45230,
    blocked: 342,
    suspicious: 1205,
    avgResponse: 42,
  })

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setTransactionData(generateTransactionData(timeRange))
      setActivityData(generateActivityData())
      setBaseStats({
        processed: Math.floor(Math.random() * 10000) + 40000,
        blocked: Math.floor(Math.random() * 100) + 300,
        suspicious: Math.floor(Math.random() * 500) + 1000,
        avgResponse: Math.floor(Math.random() * 20) + 35,
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    setTransactionData(generateTransactionData(timeRange))
  }, [timeRange])

  const stats = getStatsByPeriod(timeRange, baseStats)

  const pieData = [
    { name: "Legitimate", value: 94 },
    { name: "Suspicious", value: 4 },
    { name: "Blocked", value: 2 },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
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
            <h1 className="text-2xl font-bold text-foreground">Real-Time Monitoring</h1>
            <div className="flex gap-2">
              {["24h", "7d", "30d"].map((range) => (
                <Button
                  key={range}
                  variant={timeRange === range ? "default" : "outline"}
                  size="sm"
                  onClick={() => setTimeRange(range)}
                  className={
                    timeRange === range ? "bg-primary text-primary-foreground" : "border-border text-foreground"
                  }
                >
                  {range === "24h" ? "24H" : range === "7d" ? "7D" : "30D"}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Live Status Indicator */}
        <div className="mb-8 flex items-center gap-3 p-4 bg-primary/10 rounded-lg border border-primary/20">
          <Activity className="h-5 w-5 text-primary animate-pulse" />
          <div>
            <p className="font-semibold text-foreground">Live Monitoring Active</p>
            <p className="text-sm text-foreground/70">
              Processing transactions in real-time • Data updates every 3 seconds • Showing data for {timeRange}
            </p>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <Card className="border-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-foreground/70">Transactions Processed</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-foreground">{stats.processed.toLocaleString()}</p>
              <p className="text-xs text-foreground/70 mt-1">{timeRange}</p>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-foreground/70 flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-red-500" />
                Blocked Transactions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-foreground">{stats.blocked.toLocaleString()}</p>
              <p className="text-xs text-foreground/70 mt-1">High confidence fraud</p>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-foreground/70 flex items-center gap-2">
                <Clock className="h-4 w-4 text-yellow-500" />
                Flagged for Review
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-foreground">{stats.suspicious.toLocaleString()}</p>
              <p className="text-xs text-foreground/70 mt-1">Suspicious activity</p>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-foreground/70">Avg Response Time</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-foreground">{stats.avgResponse}ms</p>
              <p className="text-xs text-foreground/70 mt-1">Detection latency</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts Grid */}
        <div className="grid gap-6 lg:grid-cols-3 mb-8">
          {/* Transaction Volume Chart */}
          <Card className="lg:col-span-2 border-border">
            <CardHeader>
              <CardTitle className="text-foreground">Transaction Volume Over Time</CardTitle>
              <CardDescription className="text-foreground/70">
                Real-time transaction processing by status
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={transactionData}>
                  <defs>
                    <linearGradient id="colorLegit" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorSuspicious" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--chart-2))" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="hsl(var(--chart-2))" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="time" stroke="hsl(var(--foreground))" />
                  <YAxis stroke="hsl(var(--foreground))" />
                  <Tooltip
                    contentStyle={{ backgroundColor: "hsl(var(--background))", border: "1px solid hsl(var(--border))" }}
                  />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="legitimate"
                    stackId="1"
                    stroke="hsl(var(--chart-1))"
                    fillOpacity={1}
                    fill="url(#colorLegit)"
                  />
                  <Area
                    type="monotone"
                    dataKey="suspicious"
                    stackId="1"
                    stroke="hsl(var(--chart-2))"
                    fillOpacity={1}
                    fill="url(#colorSuspicious)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Transaction Status Pie Chart */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-foreground">Transaction Distribution</CardTitle>
              <CardDescription className="text-foreground/70">Breakdown by status</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name} ${value}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    <Cell fill="hsl(var(--chart-1))" />
                    <Cell fill="hsl(var(--chart-2))" />
                    <Cell fill="hsl(var(--chart-3))" />
                  </Pie>
                  <Tooltip
                    contentStyle={{ backgroundColor: "hsl(var(--background))", border: "1px solid hsl(var(--border))" }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity Feed */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="text-foreground">Recent Fraud Detection Activity</CardTitle>
            <CardDescription className="text-foreground/70">Last 8 suspicious events detected</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activityData.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-start gap-4 p-3 rounded-lg border border-border/50 hover:bg-secondary/50 transition-colors"
                >
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-lg flex-shrink-0 ${
                      activity.status === "blocked" ? "bg-red-500/10" : "bg-yellow-500/10"
                    }`}
                  >
                    {activity.status === "blocked" ? (
                      <AlertTriangle
                        className={`h-5 w-5 ${activity.severity === "high" ? "text-red-500" : "text-orange-500"}`}
                      />
                    ) : (
                      <Clock className="h-5 w-5 text-yellow-500" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="font-medium text-foreground">{activity.type}</p>
                      <span
                        className={`text-xs px-2 py-1 rounded-full font-medium ${
                          activity.status === "blocked"
                            ? "bg-red-500/20 text-red-700"
                            : "bg-yellow-500/20 text-yellow-700"
                        }`}
                      >
                        {activity.status === "blocked" ? "BLOCKED" : "FLAGGED"}
                      </span>
                    </div>
                    <p className="text-sm text-foreground/70 mt-1">
                      {activity.user} • {activity.timestamp}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
