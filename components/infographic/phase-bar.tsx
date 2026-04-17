"use client"

import { cn } from "@/lib/utils"

const phases = [
  { name: "Empatizar", icon: "👁️", description: "Comprender al usuario" },
  { name: "Definir", icon: "🎯", description: "Identificar el problema" },
  { name: "Idear", icon: "💡", description: "Generar soluciones", active: true },
  { name: "Prototipar", icon: "🔧", description: "Construir modelos" },
  { name: "Testear", icon: "✅", description: "Validar soluciones" },
]

export function PhaseBar() {
  return (
    <div className="w-full py-8">
      <div className="flex items-center justify-center gap-2 md:gap-4 flex-wrap">
        {phases.map((phase, index) => (
          <div key={phase.name} className="flex items-center">
            <div
              className={cn(
                "flex flex-col items-center gap-2 px-4 py-3 rounded-xl transition-all duration-300",
                phase.active
                  ? "bg-primary text-primary-foreground scale-110 shadow-lg shadow-primary/30"
                  : "bg-card text-card-foreground hover:bg-secondary"
              )}
            >
              <span className="text-2xl md:text-3xl">{phase.icon}</span>
              <span className={cn(
                "text-xs md:text-sm font-semibold",
                phase.active ? "text-primary-foreground" : "text-foreground"
              )}>
                {phase.name}
              </span>
              <span className={cn(
                "text-[10px] md:text-xs hidden md:block",
                phase.active ? "text-primary-foreground/80" : "text-muted-foreground"
              )}>
                {phase.description}
              </span>
            </div>
            {index < phases.length - 1 && (
              <div className={cn(
                "w-6 md:w-12 h-0.5 mx-1",
                index < 2 ? "bg-primary" : "bg-border"
              )} />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
