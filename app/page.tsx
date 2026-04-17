"use client"

import { PhaseBar } from "@/components/infographic/phase-bar"
import { StatsSection } from "@/components/infographic/stats-section"
import { FlowSteps } from "@/components/infographic/flow-steps"
import { ThinkingTypes } from "@/components/infographic/thinking-types"
import { TechniquesGrid } from "@/components/infographic/techniques-grid"
import { IDEORules } from "@/components/infographic/ideo-rules"
import { SelectionMethods } from "@/components/infographic/selection-methods"
import { HMWSection } from "@/components/infographic/hmw-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="relative overflow-hidden py-12 md:py-20">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary rounded-full text-sm font-semibold mb-4">
              Design Thinking
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 text-balance">
              Fase <span className="text-primary">Idear</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              La fase creativa donde se generan soluciones innovadoras.
              Explora técnicas, reglas y métodos para desbloquear la creatividad de tu equipo.
            </p>
          </div>

          {/* Phase Bar */}
          <PhaseBar />
        </div>
      </header>

      {/* Content Sections */}
      <div className="container mx-auto px-4">
        {/* Stats Section */}
        <StatsSection />

        {/* Divider */}
        <div className="w-full h-px bg-border my-8" />

        {/* Flow Steps */}
        <FlowSteps />

        {/* Divider */}
        <div className="w-full h-px bg-border my-8" />

        {/* Thinking Types */}
        <ThinkingTypes />

        {/* Divider */}
        <div className="w-full h-px bg-border my-8" />

        {/* Techniques Grid */}
        <TechniquesGrid />

        {/* Divider */}
        <div className="w-full h-px bg-border my-8" />

        {/* IDEO Rules */}
        <IDEORules />

        {/* Divider */}
        <div className="w-full h-px bg-border my-8" />

        {/* Selection Methods */}
        <SelectionMethods />

        {/* Divider */}
        <div className="w-full h-px bg-border my-8" />

        {/* HMW Section */}
        <HMWSection />
      </div>

      {/* Footer */}
      <footer className="mt-16 py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground text-sm">
            Infografía interactiva sobre la Fase Idear en Design Thinking GRUPO 8
          </p>
          <p className="text-muted-foreground text-xs mt-2">
            Haz clic en los elementos para explorar más detalles
          </p>
        </div>
      </footer>
    </main>
  )
}
