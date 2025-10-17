"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { NigeriaTaxCalculator } from "@/components/nigeria-tax-calculator"

export default function Calculator() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <NigeriaTaxCalculator />
      </main>
      <Footer />
    </div>
  )
}
