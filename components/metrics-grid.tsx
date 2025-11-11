"use client"

import { TrendingUp, AlertCircle, Clock, Target } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface MetricsGridProps {
  timeRange?: string
}

const getMetricsByTimeRange = (timeRange = "24h") => {
  const multipliers = {
    "24h": 1,
    "7d": 5.5,
    "30d": 22,
  }
  const multiplier = multipliers[timeRange as keyof typeof multipliers] || 1

  return [
    {
      title: "Total Transactions",
      value: Math.floor(10000 * multiplier).toLocaleString(),
      change: "+12.5%",
      icon: TrendingUp,
      color: "text-blue-600",
    },
    {
      title: "Detection Rate",
      value: "99.2%",
      change: "+0.8%",
      icon: Target,
      color: "text-green-600",
    },
    {
      title: "Avg Response Time",
      value: "142ms",
      change: "-23ms",
      icon: Clock,
      color: "text-purple-600",
    },
    {
      title: "Active Alerts",
      value: Math.floor(153 * multiplier).toString(),
      change: "+24",
      icon: AlertCircle,
      color: "text-orange-600",
    },
  ]
}

export default function MetricsGrid({ timeRange = "24h" }: MetricsGridProps) {
  const metrics = getMetricsByTimeRange(timeRange)

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
      {metrics.map((metric, index) => {
        const Icon = metric.icon
        return (
          <Card key={index} className="border-border">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center justify-between text-sm font-medium text-foreground">
                {metric.title}
                <Icon className={`h-4 w-4 ${metric.color}`} />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{metric.value}</div>
              <p className="text-xs text-foreground/60">{metric.change} from last period</p>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
