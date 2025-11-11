"use client"

import { useState } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Features from "@/components/features"
import Dashboard from "@/components/dashboard"
import Footer from "@/components/footer"

export default function Home() {
  const [showDashboard, setShowDashboard] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <Header onViewDashboard={() => setShowDashboard(!showDashboard)} />
      {showDashboard ? (
        <Dashboard onBack={() => setShowDashboard(false)} />
      ) : (
        <>
          <Hero onGetStarted={() => setShowDashboard(true)} />
          <Features />
        </>
      )}
      <Footer />
    </div>
  )
}
