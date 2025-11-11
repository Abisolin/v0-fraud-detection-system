"use client"

import { ArrowLeft, Bell, MessageSquare, Zap, Clock } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const alertTrendData = [
  { hour: "00:00", email: 45, sms: 12, webhook: 38 },
  { hour: "04:00", email: 52, sms: 15, webhook: 41 },
  { hour: "08:00", email: 78, sms: 28, webhook: 65 },
  { hour: "12:00", email: 95, sms: 42, webhook: 88 },
  { hour: "16:00", email: 87, sms: 35, webhook: 79 },
  { hour: "20:00", email: 68, sms: 22, webhook: 58 },
]

export default function AlertsPage() {
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
            <h1 className="text-2xl font-bold text-foreground">Instant Alerts</h1>
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
                <Bell className="h-4 w-4 text-blue-500" />
                Total Alerts Sent
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-foreground">12,847</p>
              <p className="text-xs text-foreground/70 mt-1">Today</p>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-foreground/70 flex items-center gap-2">
                <Clock className="h-4 w-4 text-green-500" />
                Avg Response Time
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-foreground">2.3s</p>
              <p className="text-xs text-foreground/70 mt-1">To delivery</p>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-foreground/70 flex items-center gap-2">
                <Zap className="h-4 w-4 text-yellow-500" />
                Alert Rate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-foreground">99.8%</p>
              <p className="text-xs text-foreground/70 mt-1">Delivery success</p>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-foreground/70 flex items-center gap-2">
                <MessageSquare className="h-4 w-4 text-purple-500" />
                Channels Active
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-foreground">4</p>
              <p className="text-xs text-foreground/70 mt-1">Email, SMS, Webhook, In-app</p>
            </CardContent>
          </Card>
        </div>

        {/* Alert Trend Chart */}
        <Card className="border-border mb-8">
          <CardHeader>
            <CardTitle className="text-foreground">Alert Distribution by Channel</CardTitle>
            <CardDescription className="text-foreground/70">
              Alert volume across delivery channels over 24 hours
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={alertTrendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="hour" stroke="hsl(var(--foreground))" />
                <YAxis stroke="hsl(var(--foreground))" />
                <Tooltip
                  contentStyle={{ backgroundColor: "hsl(var(--background))", border: "1px solid hsl(var(--border))" }}
                />
                <Legend />
                <Line type="monotone" dataKey="email" stroke="hsl(var(--chart-1))" name="Email" strokeWidth={2} />
                <Line type="monotone" dataKey="sms" stroke="hsl(var(--chart-2))" name="SMS" strokeWidth={2} />
                <Line type="monotone" dataKey="webhook" stroke="hsl(var(--chart-3))" name="Webhook" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Features Description */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="text-foreground">Real-Time Alert System</CardTitle>
            <CardDescription className="text-foreground/70">
              Immediate notifications for suspicious transactions
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              {[
                {
                  title: "Email Notifications",
                  desc: "Detailed fraud indicators sent with comprehensive analysis for each alert",
                },
                {
                  title: "SMS Alerts",
                  desc: "Critical high-risk transaction notifications delivered instantly via SMS",
                },
                {
                  title: "In-App Dashboard",
                  desc: "Real-time notifications and updates displayed in your admin dashboard",
                },
                {
                  title: "API Webhooks",
                  desc: "Integrate with third-party systems via webhooks for seamless automation",
                },
                {
                  title: "Custom Routing",
                  desc: "Configure alert routing rules based on risk level, amount, and type",
                },
                {
                  title: "Alert Customization",
                  desc: "Set custom thresholds for different alert types and business rules",
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
