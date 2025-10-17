"use client"

import type React from "react"
import { useState, useMemo } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Info } from "lucide-react"

export function NigeriaTaxCalculator() {
  const [formData, setFormData] = useState({
    totalIncome: "",
    nhfContribution: "",
    nhisContribution: "",
    pensionContribution: "",
    mortgageInterest: "",
    lifeInsurancePremium: "",
    annualRentPaid: "",
  })

  const [enabledDeductions, setEnabledDeductions] = useState({
    nhf: false,
    nhis: false,
    pension: false,
    mortgage: false,
    lifeInsurance: false,
    rent: false,
  })

  const [activeTooltip, setActiveTooltip] = useState<string | null>(null)

  // Tax calculation logic based on Nigeria Tax Act 2025
  const calculateTax = (income: number) => {
    const bands = [
      { limit: 800000, rate: 0 },
      { limit: 2200000, rate: 0.15 },
      { limit: 9000000, rate: 0.18 },
      { limit: 13000000, rate: 0.21 },
      { limit: 25000000, rate: 0.23 },
    ]

    let remaining = income
    let tax = 0

    for (const { limit, rate } of bands) {
      if (remaining > limit) {
        tax += limit * rate
        remaining -= limit
      } else {
        tax += remaining * rate
        remaining = 0
        break
      }
    }

    if (remaining > 0) tax += remaining * 0.25
    return tax
  }

  // Calculate results in real-time
  const results = useMemo(() => {
    const totalIncome = Number.parseFloat(formData.totalIncome) || 0
    const nhfContribution = Number.parseFloat(formData.nhfContribution) || 0
    const nhisContribution = Number.parseFloat(formData.nhisContribution) || 0
    const pensionContribution = Number.parseFloat(formData.pensionContribution) || 0
    const mortgageInterest = Number.parseFloat(formData.mortgageInterest) || 0
    const lifeInsurancePremium = Number.parseFloat(formData.lifeInsurancePremium) || 0
    const annualRentPaid = Number.parseFloat(formData.annualRentPaid) || 0

    // Compute rent relief (20% of rent paid, capped at ₦500,000)
    const rentRelief = annualRentPaid ? Math.min(0.2 * annualRentPaid, 500000) : 0

    // Sum all eligible deductions
    const eligibleDeductions =
      nhfContribution + nhisContribution + pensionContribution + mortgageInterest + lifeInsurancePremium + rentRelief

    // Compute chargeable income
    const chargeableIncome = Math.max(totalIncome - eligibleDeductions, 0)

    // Calculate tax payable
    const taxPayable = calculateTax(chargeableIncome)

    // Calculate effective tax rate
    const effectiveRate = totalIncome > 0 ? ((taxPayable / totalIncome) * 100).toFixed(2) : "0.00"

    return {
      totalIncome,
      eligibleDeductions,
      chargeableIncome,
      taxPayable,
      effectiveRate,
    }
  }, [formData])

  const formatNumberInput = (value: string): string => {
    const cleaned = value.replace(/\D/g, "")
    return cleaned.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    const cleanValue = value.replace(/,/g, "")
    setFormData((prev) => ({
      ...prev,
      [name]: cleanValue,
    }))
  }

  const getDisplayValue = (fieldName: keyof typeof formData): string => {
    const value = formData[fieldName]
    if (!value) return ""
    return formatNumberInput(value)
  }

  const handleToggleDeduction = (deductionKey: keyof typeof enabledDeductions) => {
    setEnabledDeductions((prev) => ({
      ...prev,
      [deductionKey]: !prev[deductionKey],
    }))
    if (enabledDeductions[deductionKey]) {
      const fieldMap = {
        nhf: "nhfContribution",
        nhis: "nhisContribution",
        pension: "pensionContribution",
        mortgage: "mortgageInterest",
        lifeInsurance: "lifeInsurancePremium",
        rent: "annualRentPaid",
      }
      setFormData((prev) => ({
        ...prev,
        [fieldMap[deductionKey]]: "",
      }))
    }
  }

  const formatCurrency = (value: number) => {
    return `₦${value.toLocaleString("en-NG", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
  }

  const deductionDescriptions = {
    nhf: "National Housing Fund contribution - mandatory savings for housing",
    nhis: "National Health Insurance Scheme - healthcare coverage contribution",
    pension: "Pension fund contributions - retirement savings",
    mortgage: "Interest paid on mortgage loans for residential property",
    lifeInsurance: "Life insurance premiums paid during the year",
    rent: "Annual rent paid - 20% relief capped at ₦500,000",
  }

  const InfoIcon = ({ tooltipKey }: { tooltipKey: string }) => {
    const description = deductionDescriptions[tooltipKey as keyof typeof deductionDescriptions]
    return (
      <div className="relative inline-block">
        <button
          type="button"
          onMouseEnter={() => setActiveTooltip(tooltipKey)}
          onMouseLeave={() => setActiveTooltip(null)}
          onClick={() => setActiveTooltip(activeTooltip === tooltipKey ? null : tooltipKey)}
          className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary/20 text-primary hover:bg-primary/30 transition-all duration-200 hover:scale-110"
          aria-label="More information"
        >
          <Info className="w-3 h-3" />
        </button>
        {activeTooltip === tooltipKey && (
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 w-48 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-xs rounded-lg p-3 z-50 pointer-events-none shadow-lg">
            {description}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-slate-900 dark:border-t-slate-100"></div>
          </div>
        )}
      </div>
    )
  }

  const DeductionToggle = ({
    label,
    deductionKey,
    fieldName,
    helpText,
  }: {
    label: string
    deductionKey: keyof typeof enabledDeductions
    fieldName: keyof typeof formData
    helpText?: string
  }) => {
    const isEnabled = enabledDeductions[deductionKey]
    return (
      <div className="space-y-3 p-4 rounded-lg border border-border/50 hover:border-primary/30 transition-all duration-300 hover:bg-primary/5">
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            id={deductionKey}
            checked={isEnabled}
            onChange={() => handleToggleDeduction(deductionKey)}
            className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer accent-primary"
          />
          <label htmlFor={deductionKey} className="text-sm font-medium cursor-pointer flex items-center gap-2 flex-1">
            {label}
            <InfoIcon tooltipKey={deductionKey} />
          </label>
        </div>
        {isEnabled && (
          <div className="ml-7 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="relative">
              <span className="absolute left-3 top-3 text-muted-foreground text-sm font-medium">₦</span>
              <Input
                type="text"
                name={fieldName}
                placeholder="0"
                value={getDisplayValue(fieldName)}
                onChange={handleInputChange}
                className="pl-7 text-sm bg-background/50 border-primary/20 focus:border-primary transition-colors"
                inputMode="numeric"
              />
            </div>
            {helpText && <p className="text-xs text-muted-foreground">{helpText}</p>}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/5 py-12 md:py-20 relative overflow-hidden">
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Nigeria Income Tax Calculator 2025</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Calculate your tax liability based on the Nigeria Tax Act 2025. Enter your income and eligible deductions
            for instant results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <Card className="p-8 sticky top-24 h-fit border-border/50 bg-card/50 backdrop-blur-sm">
              <h2 className="text-xl font-bold mb-8 flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-primary to-accent rounded-full" />
                Your Information
              </h2>

              <div className="space-y-6">
                <div className="space-y-3">
                  <label className="text-sm font-semibold mb-2 block">Total Annual Income *</label>
                  <div className="mb-4 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800 space-y-2">
                    <div className="flex gap-2">
                      <Info className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        <span className="font-semibold text-foreground">Includes:</span> (Your total income includes money from your job, business or side hustle, investments, rent or other earnings, and any profit made from selling assets like land, shares, or digital assets.
                      </p>
                    </div>
                  </div>
                  <div className="relative">
                    <span className="absolute left-3 top-3 text-muted-foreground font-medium">₦</span>
                    <Input
                      type="text"
                      name="totalIncome"
                      placeholder="0"
                      value={getDisplayValue("totalIncome")}
                      onChange={handleInputChange}
                      className="pl-7 text-base bg-background/50 border-primary/20 focus:border-primary transition-colors"
                      inputMode="numeric"
                    />
                  </div>
                </div>

                <div className="pt-6 border-t border-border/50">
                  <p className="text-sm font-semibold mb-4 text-muted-foreground">Eligible Deductions (Optional)</p>

                  <div className="space-y-3">
                    <DeductionToggle label="NHF Contribution" deductionKey="nhf" fieldName="nhfContribution" />
                    <DeductionToggle label="NHIS Contribution" deductionKey="nhis" fieldName="nhisContribution" />
                    <DeductionToggle
                      label="Pension Contribution"
                      deductionKey="pension"
                      fieldName="pensionContribution"
                    />
                    <DeductionToggle label="Mortgage Interest" deductionKey="mortgage" fieldName="mortgageInterest" />
                    <DeductionToggle
                      label="Life Insurance Premium"
                      deductionKey="lifeInsurance"
                      fieldName="lifeInsurancePremium"
                    />
                    <DeductionToggle
                      label="Annual Rent Paid"
                      deductionKey="rent"
                      fieldName="annualRentPaid"
                      helpText="Relief: 20% of rent, max ₦500,000"
                    />
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Card className="p-8 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 border-primary/20 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-2xl -mr-20 -mt-20" />
              <div className="relative">
                <h2 className="text-2xl font-bold mb-10 flex items-center gap-2">
                  <div className="w-1 h-7 bg-gradient-to-b from-primary to-accent rounded-full" />
                  Tax Calculation Summary
                </h2>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Total Income */}
                    <div className="group bg-white dark:bg-slate-950 rounded-xl p-6 border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                        Total Income
                      </p>
                      <p className="text-2xl md:text-3xl font-bold text-primary group-hover:scale-105 transition-transform duration-300 origin-left">
                        {formatCurrency(results.totalIncome)}
                      </p>
                    </div>

                    {/* Total Eligible Deductions */}
                    <div className="group bg-white dark:bg-slate-950 rounded-xl p-6 border border-accent/10 hover:border-accent/30 transition-all duration-300 hover:shadow-lg">
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                        Total Deductions
                      </p>
                      <p className="text-2xl md:text-3xl font-bold text-accent group-hover:scale-105 transition-transform duration-300 origin-left">
                        {formatCurrency(results.eligibleDeductions)}
                      </p>
                    </div>

                    {/* Chargeable Income */}
                    <div className="group bg-white dark:bg-slate-950 rounded-xl p-6 border border-secondary/10 hover:border-secondary/30 transition-all duration-300 hover:shadow-lg">
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                        Chargeable Income
                      </p>
                      <p className="text-2xl md:text-3xl font-bold text-secondary group-hover:scale-105 transition-transform duration-300 origin-left">
                        {formatCurrency(results.chargeableIncome)}
                      </p>
                    </div>

                    {/* Tax Payable */}
                    <div className="group bg-white dark:bg-slate-950 rounded-xl p-6 border border-red-500/10 hover:border-red-500/30 transition-all duration-300 hover:shadow-lg">
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                        Tax Payable
                      </p>
                      <p className="text-2xl md:text-3xl font-bold text-red-600 group-hover:scale-105 transition-transform duration-300 origin-left">
                        {formatCurrency(results.taxPayable)}
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-8 border border-primary/20">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                      Effective Tax Rate
                    </p>
                    <p className="text-4xl md:text-5xl font-bold text-primary mb-2">{results.effectiveRate}%</p>
                    <p className="text-sm text-muted-foreground">Percentage of your total income paid as tax</p>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-950/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
                    <h3 className="font-bold mb-5 text-sm flex items-center gap-2">
                      <Info className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      Nigeria Tax Bands 2025
                    </h3>
                    <div className="space-y-3 text-sm">
                      {[
                        { range: "₦0 - ₦800,000", rate: "0%" },
                        { range: "₦800,001 - ₦2,200,000", rate: "15%" },
                        { range: "₦2,200,001 - ₦9,000,000", rate: "18%" },
                        { range: "₦9,000,001 - ₦13,000,000", rate: "21%" },
                        { range: "₦13,000,001 - ₦25,000,000", rate: "23%" },
                        { range: "Above ₦25,000,000", rate: "25%" },
                      ].map((band, idx) => (
                        <div
                          key={idx}
                          className="flex justify-between items-center p-2 rounded hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                        >
                          <span className="text-muted-foreground">{band.range}</span>
                          <span className="font-semibold text-foreground">{band.rate}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
