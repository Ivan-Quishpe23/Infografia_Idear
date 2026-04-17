"use client"

import { cn } from "@/lib/utils"
import { useState } from "react"

export function ThinkingTypes() {
  const [activeType, setActiveType] = useState<"divergent" | "convergent" | null>(null)

  return (
    <section className="py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground">
        Pensamiento Divergente vs Convergente
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Divergente */}
        <div
          className={cn(
            "bg-card border rounded-xl p-6 cursor-pointer transition-all duration-300",
            activeType === "divergent"
              ? "border-primary shadow-lg shadow-primary/20"
              : "border-border hover:border-primary/50"
          )}
          onClick={() => setActiveType(activeType === "divergent" ? null : "divergent")}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">Pensamiento Divergente</h3>
              <p className="text-primary text-sm">Expandir posibilidades</p>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-foreground">
              <span className="text-primary">→</span>
              <span>Generar múltiples opciones</span>
            </div>
            <div className="flex items-center gap-2 text-foreground">
              <span className="text-primary">→</span>
              <span>Sin juicios ni críticas</span>
            </div>
            <div className="flex items-center gap-2 text-foreground">
              <span className="text-primary">→</span>
              <span>Cantidad sobre calidad</span>
            </div>
            <div className="flex items-center gap-2 text-foreground">
              <span className="text-primary">→</span>
              <span>Ideas salvajes bienvenidas</span>
            </div>
          </div>

          {activeType === "divergent" && (
            <div className="mt-4 pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground">
                <strong className="text-primary">Técnicas:</strong> Brainstorming, Mind mapping, SCAMPER, Analogías, Preguntas &quot;¿Qué pasaría si...?&quot;
              </p>
            </div>
          )}
        </div>

        {/* Convergente */}
        <div
          className={cn(
            "bg-card border rounded-xl p-6 cursor-pointer transition-all duration-300",
            activeType === "convergent"
              ? "border-accent shadow-lg shadow-accent/20"
              : "border-border hover:border-accent/50"
          )}
          onClick={() => setActiveType(activeType === "convergent" ? null : "convergent")}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">Pensamiento Convergente</h3>
              <p className="text-accent text-sm">Enfocar y decidir</p>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-foreground">
              <span className="text-accent">→</span>
              <span>Evaluar y filtrar ideas</span>
            </div>
            <div className="flex items-center gap-2 text-foreground">
              <span className="text-accent">→</span>
              <span>Aplicar criterios objetivos</span>
            </div>
            <div className="flex items-center gap-2 text-foreground">
              <span className="text-accent">→</span>
              <span>Calidad sobre cantidad</span>
            </div>
            <div className="flex items-center gap-2 text-foreground">
              <span className="text-accent">→</span>
              <span>Tomar decisiones</span>
            </div>
          </div>

          {activeType === "convergent" && (
            <div className="mt-4 pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground">
                <strong className="text-accent">Técnicas:</strong> Votación por puntos, Matriz de decisión, Análisis FODA, Criterios ponderados
              </p>
            </div>
          )}
        </div>
      </div>
      
      <p className="text-center text-muted-foreground mt-6 text-sm">
        Haz clic en cada tipo para ver las técnicas asociadas
      </p>
    </section>
  )
}
