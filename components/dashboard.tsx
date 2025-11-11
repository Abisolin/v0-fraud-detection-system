"use client"

import { useState } from "react"
import { ArrowLeft, TrendingUp, AlertTriangle, CheckCircle2, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import TransactionChart from "@/components/transaction-chart"
import MetricsGrid from "@/components/metrics-grid"

interface DashboardProps {
  onBack: () => void
}

interface MetricsGridProps {
  timeRange: string
}

const getMetricsByPeriod = (period: string) => {
  const multipliers = {
    "24h": 1,
    "7d": 5.5,
    "30d": 22,
  }
  const multiplier = multipliers[period as keyof typeof multipliers] || 1

  return {
    legitimate: Math.floor(9847 * multiplier),
    suspicious: Math.floor(124 * multiplier),
    blocked: Math.floor(29 * multiplier),
  }
}

const getAlertsByPeriod = (period: string) => {
  const baseAlerts = [
    {
      id: "1",
      type: "fraudulent",
      amount: "$4,250.00",
      merchant: "International Wire Transfer",
      location: "Unknown Location",
      time: "2 minutes ago",
      status: "Blocked",
    },
    {
      id: "2",
      type: "suspicious",
      amount: "$892.50",
      merchant: "Online Retail",
      location: "New York, NY",
      time: "15 minutes ago",
      status: "Pending Review",
    },
    {
      id: "3",
      type: "suspicious",
      amount: "$156.75",
      merchant: "Gas Station",
      location: "Miami, FL",
      time: "28 minutes ago",
      status: "Under Review",
    },
    {
      id: "4",
      type: "legitimate",
      amount: "$45.99",
      merchant: "Coffee Shop",
      location: "Seattle, WA",
      time: "1 hour ago",
      status: "Approved",
    },
    {
      id: "5",
      type: "fraudulent",
      amount: "$2,100.00",
      merchant: "Electronics Store",
      location: "Delhi, India",
      time: "3 hours ago",
      status: "Blocked",
    },
  ]

  if (period === "24h") return baseAlerts
  if (period === "7d") return baseAlerts.concat(baseAlerts.slice(0, 3))
  return baseAlerts.concat(baseAlerts).concat(baseAlerts.slice(0, 2))
}

export default function Dashboard({ onBack }: DashboardProps) {
  const [timeRange, setTimeRange] = useState("24h")

  const metrics = getMetricsByPeriod(timeRange)
  const alerts = getAlertsByPeriod(timeRange)

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" onClick={onBack} className="text-foreground hover:bg-secondary">
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Fraud Detection Dashboard</h1>
              <p className="text-foreground/60">Real-time transaction monitoring</p>
            </div>
          </div>
          <div className="flex gap-2">
            {["24h", "7d", "30d"].map((range) => (
              <Button
                key={range}
                variant={timeRange === range ? "default" : "outline"}
                size="sm"
                onClick={() => setTimeRange(range)}
                className={timeRange === range ? "bg-primary text-primary-foreground" : "border-border text-foreground"}
              >
                {range === "24h" ? "24 Hours" : range === "7d" ? "7 Days" : "30 Days"}
              </Button>
            ))}
          </div>
        </div>

        {/* Metrics Grid */}
        <MetricsGrid timeRange={timeRange} />

        {/* Charts and Alerts */}
        <div className="grid gap-6 lg:grid-cols-3 mb-6">
          <div className="lg:col-span-2">
            <TransactionChart timeRange={timeRange} />
          </div>
          <div>
            <Card className="border-border h-full">
              <CardHeader>
                <CardTitle className="text-foreground">Status Summary ({timeRange})</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between rounded-lg bg-secondary/50 p-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    <span className="text-sm text-foreground">Legitimate</span>
                  </div>
                  <span className="font-semibold text-foreground">{metrics.legitimate.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-secondary/50 p-4">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-yellow-600" />
                    <span className="text-sm text-foreground">Suspicious</span>
                  </div>
                  <span className="font-semibold text-foreground">{metrics.suspicious.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-secondary/50 p-4">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-red-600" />
                    <span className="text-sm text-foreground">Blocked</span>
                  </div>
                  <span className="font-semibold text-foreground">{metrics.blocked.toLocaleString()}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Recent Alerts */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="text-foreground">Recent Alerts</CardTitle>
            <CardDescription className="text-foreground/60">
              Latest transaction alerts and fraud detections
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {alerts.map((alert) => (
                <div
                  key={alert.id}
                  className="flex items-center justify-between rounded-lg border border-border bg-secondary/30 p-4 hover:bg-secondary/50 transition-colors"
                >
                  <div className="flex items-start gap-4 flex-1">
                    {alert.type === "fraudulent" && (
                      <div className="rounded-full bg-red-100 p-2 mt-0.5">
                        <AlertTriangle className="h-5 w-5 text-red-600" />
                      </div>
                    )}
                    {alert.type === "suspicious" && (
                      <div className="rounded-full bg-yellow-100 p-2 mt-0.5">
                        <Clock className="h-5 w-5 text-yellow-600" />
                      </div>
                    )}
                    {alert.type === "legitimate" && (
                      <div className="rounded-full bg-green-100 p-2 mt-0.5">
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                      </div>
                    )}

                    <div className="flex-1">
                      <div className="flex items-baseline gap-2 mb-1">
                        <span className="font-semibold text-foreground">{alert.amount}</span>
                        <span className="text-sm text-foreground/60">{alert.merchant}</span>
                      </div>
                      <div className="text-sm text-foreground/60">
                        {alert.location} • {alert.time}
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div
                      className={`text-sm font-medium ${
                        alert.status === "Blocked"
                          ? "text-red-600"
                          : alert.status === "Approved"
                            ? "text-green-600"
                            : "text-yellow-600"
                      }`}
                    >
                      {alert.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
