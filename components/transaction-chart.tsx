"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ComposedChart, Bar } from "recharts"

interface TransactionChartProps {
  timeRange: string
}

const generateChartData = (timeRange: string) => {
  if (timeRange === "24h") {
    return [
      { time: "00:00", transactions: 240, fraudulent: 12, suspicious: 8 },
      { time: "04:00", transactions: 321, fraudulent: 18, suspicious: 12 },
      { time: "08:00", transactions: 890, fraudulent: 28, suspicious: 25 },
      { time: "12:00", transactions: 1420, fraudulent: 42, suspicious: 35 },
      { time: "16:00", transactions: 1680, fraudulent: 53, suspicious: 48 },
      { time: "20:00", transactions: 1230, fraudulent: 31, suspicious: 22 },
      { time: "24:00", transactions: 680, fraudulent: 19, suspicious: 14 },
    ]
  }

  if (timeRange === "7d") {
    return [
      { time: "Monday", transactions: 5420, fraudulent: 145, suspicious: 98 },
      { time: "Tuesday", transactions: 6230, fraudulent: 189, suspicious: 134 },
      { time: "Wednesday", transactions: 7150, fraudulent: 224, suspicious: 162 },
      { time: "Thursday", transactions: 6890, fraudulent: 206, suspicious: 148 },
      { time: "Friday", transactions: 8340, fraudulent: 287, suspicious: 195 },
      { time: "Saturday", transactions: 5670, fraudulent: 156, suspicious: 98 },
      { time: "Sunday", transactions: 4980, fraudulent: 124, suspicious: 78 },
    ]
  }

  // 30 days
  return [
    { time: "Week 1", transactions: 39780, fraudulent: 984, suspicious: 712 },
    { time: "Week 2", transactions: 41230, fraudulent: 1087, suspicious: 823 },
    { time: "Week 3", transactions: 38950, fraudulent: 934, suspicious: 678 },
    { time: "Week 4", transactions: 42100, fraudulent: 1156, suspicious: 892 },
    { time: "Week 5", transactions: 39670, fraudulent: 1023, suspicious: 745 },
  ]
}

export default function TransactionChart({ timeRange = "24h" }: TransactionChartProps) {
  const data = generateChartData(timeRange)

  const descriptions: Record<string, string> = {
    "24h": "24-hour transaction volume and fraud detection",
    "7d": "7-day transaction volume and fraud detection",
    "30d": "30-day transaction volume and fraud detection",
  }

  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle className="text-foreground">Transaction Analysis</CardTitle>
        <CardDescription className="text-foreground/60">
          {descriptions[timeRange] || descriptions["24h"]}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="w-full h-80">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={data} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--color-border))" />
              <XAxis dataKey="time" stroke="hsl(var(--color-foreground))" style={{ fontSize: "12px" }} />
              <YAxis stroke="hsl(var(--color-foreground))" style={{ fontSize: "12px" }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--color-card))",
                  border: "1px solid hsl(var(--color-border))",
                  borderRadius: "8px",
                  color: "hsl(var(--color-foreground))",
                }}
              />
              <Legend />
              <Bar dataKey="transactions" fill="hsl(var(--color-chart-1))" name="Total Transactions" />
              <Line
                type="monotone"
                dataKey="fraudulent"
                stroke="hsl(var(--color-destructive))"
                name="Fraudulent"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="suspicious"
                stroke="hsl(var(--color-chart-4))"
                name="Suspicious"
                strokeWidth={2}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
