"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, BookOpen, FileText, HelpCircle, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

export default function ResourcesPage() {
  const [timeRange, setTimeRange] = useState("24h")

  const getTimeRangeData = () => {
    const baseData = {
      "24h": {
        label: "Last 24 Hours",
        usageData: [
          { time: "00:00", documentation: 45, tutorials: 32, support: 28 },
          { time: "06:00", documentation: 62, tutorials: 48, support: 35 },
          { time: "12:00", documentation: 85, tutorials: 72, support: 52 },
          { time: "18:00", documentation: 73, tutorials: 58, support: 42 },
          { time: "24:00", documentation: 48, tutorials: 35, support: 28 },
        ],
        stats: {
          views: "1,285",
          downloads: "342",
          support: "89",
          satisfaction: "4.8/5",
        },
      },
      "7d": {
        label: "Last 7 Days",
        usageData: [
          { time: "Mon", documentation: 245, tutorials: 182, support: 128 },
          { time: "Tue", documentation: 310, tutorials: 248, support: 165 },
          { time: "Wed", documentation: 385, tutorials: 312, support: 198 },
          { time: "Thu", documentation: 350, tutorials: 280, support: 175 },
          { time: "Fri", documentation: 420, tutorials: 345, support: 210 },
          { time: "Sat", documentation: 280, tutorials: 215, support: 125 },
          { time: "Sun", documentation: 245, tutorials: 185, support: 95 },
        ],
        stats: {
          views: "8,995",
          downloads: "2,394",
          support: "624",
          satisfaction: "4.9/5",
        },
      },
      "30d": {
        label: "Last 30 Days",
        usageData: [
          { time: "Week 1", documentation: 1245, tutorials: 928, support: 586 },
          { time: "Week 2", documentation: 1580, tutorials: 1256, support: 748 },
          { time: "Week 3", documentation: 1820, tutorials: 1475, support: 892 },
          { time: "Week 4", documentation: 1650, tutorials: 1328, support: 798 },
        ],
        stats: {
          views: "38,450",
          downloads: "10,234",
          support: "2,847",
          satisfaction: "4.85/5",
        },
      },
    }
    return baseData[timeRange as keyof typeof baseData]
  }

  const data = getTimeRangeData()

  const resourceTypes = [
    {
      icon: FileText,
      title: "Documentation",
      description: "Comprehensive guides and API references",
      items: ["Integration Guide", "API Documentation", "Best Practices", "Security Standards"],
      count: "45+",
    },
    {
      icon: BookOpen,
      title: "Tutorials",
      description: "Step-by-step implementation tutorials",
      items: ["Getting Started", "Advanced Setup", "Custom Integration", "Troubleshooting"],
      count: "28+",
    },
    {
      icon: BarChart3,
      title: "Case Studies",
      description: "Real-world implementation examples",
      items: ["E-Commerce Success", "Banking Integration", "Payment Processing", "Risk Analysis"],
      count: "12+",
    },
    {
      icon: HelpCircle,
      title: "FAQ & Support",
      description: "Common questions and support articles",
      items: ["Troubleshooting", "Feature Questions", "Integration Help", "Security FAQ"],
      count: "80+",
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
          <h1 className="text-4xl font-bold mb-4">Resources & Learning</h1>
          <p className="text-lg text-muted-foreground">Everything you need to implement and master fraud detection</p>
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

        {/* Resource Usage Overview */}
        <Card className="mb-8 bg-gradient-to-r from-primary/5 to-accent/5">
          <CardHeader>
            <CardTitle>Resource Usage - {data.label}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-background p-4 rounded-lg border">
                <p className="text-sm text-muted-foreground mb-1">Total Views</p>
                <p className="text-2xl font-bold text-blue-600">{data.stats.views}</p>
              </div>
              <div className="bg-background p-4 rounded-lg border">
                <p className="text-sm text-muted-foreground mb-1">Downloads</p>
                <p className="text-2xl font-bold text-green-600">{data.stats.downloads}</p>
              </div>
              <div className="bg-background p-4 rounded-lg border">
                <p className="text-sm text-muted-foreground mb-1">Support Tickets</p>
                <p className="text-2xl font-bold text-yellow-600">{data.stats.support}</p>
              </div>
              <div className="bg-background p-4 rounded-lg border">
                <p className="text-sm text-muted-foreground mb-1">Satisfaction</p>
                <p className="text-2xl font-bold text-purple-600">{data.stats.satisfaction}</p>
              </div>
            </div>

            {/* Chart */}
            <div className="bg-background p-6 rounded-lg border h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data.usageData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="documentation" stroke="#3b82f6" strokeWidth={2} name="Documentation" />
                  <Line type="monotone" dataKey="tutorials" stroke="#10b981" strokeWidth={2} name="Tutorials" />
                  <Line type="monotone" dataKey="support" stroke="#f59e0b" strokeWidth={2} name="Support" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Resource Categories */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Resource Library</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resourceTypes.map((resource, index) => {
              const Icon = resource.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          <Icon className="w-5 h-5 text-primary" />
                          {resource.title}
                        </CardTitle>
                        <CardDescription>{resource.description}</CardDescription>
                      </div>
                      <span className="text-2xl font-bold text-primary">{resource.count}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {resource.items.map((item, i) => (
                        <li
                          key={i}
                          className="text-sm text-muted-foreground flex items-center gap-2 hover:text-foreground transition-colors cursor-pointer"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full mt-4 bg-transparent" variant="outline">
                      Explore {resource.title}
                    </Button>
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
