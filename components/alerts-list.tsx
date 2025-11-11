"use client"

import { AlertCircle, CheckCircle2, Clock } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const alerts = [
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

export default function AlertsList() {
  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle className="text-foreground">Recent Alerts</CardTitle>
        <CardDescription className="text-foreground/60">Latest transaction alerts and fraud detections</CardDescription>
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
                    <AlertCircle className="h-5 w-5 text-red-600" />
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
  )
}
