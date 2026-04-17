"use client"

import { cn } from "@/lib/utils"
import { useState } from "react"

const rules = [
  {
    number: 1,
    title: "Aplaza el juicio",
    description: "No critiques las ideas de otros durante la generación. Todas las ideas son válidas en esta fase.",
    icon: "🚫",
    color: "primary"
  },
  {
    number: 2,
    title: "Fomenta ideas salvajes",
    description: "Las ideas más locas pueden llevar a soluciones innovadoras. No te autocensures.",
    icon: "🚀",
    color: "accent"
  },
  {
    number: 3,
    title: "Construye sobre ideas de otros",
    description: "Usa 'Sí, y...' en lugar de 'No, pero...'. Mejora y expande las ideas existentes.",
    icon: "🏗️",
    color: "primary"
  },
  {
    number: 4,
    title: "Busca cantidad",
    description: "Más ideas = más posibilidades. La calidad viene después, ahora importa la cantidad.",
    icon: "📊",
    color: "accent"
  },
]

export function IDEORules() {
  const [activeRule, setActiveRule] = useState<number | null>(null)

  return (
    <section className="py-12">
      <div className="text-center mb-8">
        <span className="inline-block px-4 py-1 bg-primary/20 text-primary rounded-full text-sm font-semibold mb-4">
          IDEO
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          Las 4 Reglas del Brainstorming
        </h2>
        <p className="text-muted-foreground mt-2">
          Principios fundamentales de la consultora de diseño más famosa del mundo
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
        {rules.map((rule) => (
          <div
            key={rule.number}
            className={cn(
              "relative bg-card border rounded-xl p-6 cursor-pointer transition-all duration-300 overflow-hidden",
              activeRule === rule.number
                ? rule.color === "primary"
                  ? "border-primary shadow-lg shadow-primary/20"
                  : "border-accent shadow-lg shadow-accent/20"
                : "border-border hover:border-primary/50"
            )}
            onClick={() => setActiveRule(activeRule === rule.number ? null : rule.number)}
          >
            <div className={cn(
              "absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-10",
              rule.color === "primary" ? "bg-primary" : "bg-accent"
            )} />
            
            <div className="flex items-start gap-4 relative">
              <div className={cn(
                "w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0",
                rule.color === "primary" ? "bg-primary/20" : "bg-accent/20"
              )}>
                {rule.icon}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className={cn(
                    "text-xs font-bold px-2 py-0.5 rounded",
                    rule.color === "primary" 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-accent text-accent-foreground"
                  )}>
                    #{rule.number}
                  </span>
                </div>
                <h3 className="font-bold text-lg text-foreground">{rule.title}</h3>
                <p className={cn(
                  "text-sm mt-2 transition-all duration-300",
                  activeRule === rule.number ? "text-foreground" : "text-muted-foreground"
                )}>
                  {rule.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
