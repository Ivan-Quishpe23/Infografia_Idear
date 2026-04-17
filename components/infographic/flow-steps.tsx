"use client"

import { cn } from "@/lib/utils"
import { useState } from "react"

const steps = [
  {
    number: 1,
    title: "Preparar",
    description: "Define el problema y reúne al equipo multidisciplinario",
    details: "Asegúrate de tener un espacio adecuado, materiales (post-its, marcadores) y un moderador designado.",
    icon: "📋"
  },
  {
    number: 2,
    title: "Divergir",
    description: "Genera la mayor cantidad de ideas posibles sin juzgar",
    details: "Aplica técnicas como brainstorming, SCAMPER o Crazy 8s. Cantidad sobre calidad en esta fase.",
    icon: "🌟"
  },
  {
    number: 3,
    title: "Organizar",
    description: "Agrupa y categoriza las ideas generadas",
    details: "Usa diagramas de afinidad para encontrar patrones y temas comunes entre las ideas.",
    icon: "🗂️"
  },
  {
    number: 4,
    title: "Converger",
    description: "Selecciona las mejores ideas usando criterios definidos",
    details: "Aplica votación por puntos, matriz de impacto/esfuerzo u otros métodos de priorización.",
    icon: "🎯"
  },
  {
    number: 5,
    title: "Refinar",
    description: "Desarrolla y mejora las ideas seleccionadas",
    details: "Combina ideas, añade detalles y prepara para la siguiente fase de prototipado.",
    icon: "✨"
  },
]

export function FlowSteps() {
  const [activeStep, setActiveStep] = useState<number | null>(null)

  return (
    <section className="py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground">
        Flujo de 5 Pasos en la Fase Idear
      </h2>
      <div className="relative">
        {/* Connection line */}
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-border hidden lg:block" style={{ transform: "translateY(-50%)" }} />
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 relative">
          {steps.map((step) => (
            <div
              key={step.number}
              className={cn(
                "relative bg-card border rounded-xl p-5 cursor-pointer transition-all duration-300",
                activeStep === step.number
                  ? "border-primary shadow-lg shadow-primary/20 scale-105 z-10"
                  : "border-border hover:border-primary/50"
              )}
              onClick={() => setActiveStep(activeStep === step.number ? null : step.number)}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold",
                  activeStep === step.number
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground"
                )}>
                  {step.number}
                </div>
                <span className="text-2xl">{step.icon}</span>
              </div>
              <h3 className="font-bold text-lg text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
              
              {activeStep === step.number && (
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-sm text-primary">{step.details}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <p className="text-center text-muted-foreground mt-6 text-sm">
        Haz clic en cada paso para ver más detalles
      </p>
    </section>
  )
}
