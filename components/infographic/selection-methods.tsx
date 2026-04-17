"use client"

import { cn } from "@/lib/utils"
import { useState } from "react"

export function SelectionMethods() {
  const [activeMethod, setActiveMethod] = useState<"matrix" | "voting" | null>(null)

  return (
    <section className="py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-foreground">
        Métodos de Selección de Ideas
      </h2>
      <p className="text-center text-muted-foreground mb-8">
        Herramientas para pasar del pensamiento divergente al convergente
      </p>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {/* Matriz Impacto/Esfuerzo */}
        <div
          className={cn(
            "bg-card border rounded-xl p-6 cursor-pointer transition-all duration-300",
            activeMethod === "matrix"
              ? "border-primary shadow-lg shadow-primary/20"
              : "border-border hover:border-primary/50"
          )}
          onClick={() => setActiveMethod(activeMethod === "matrix" ? null : "matrix")}
        >
          <h3 className="font-bold text-xl text-foreground mb-4 flex items-center gap-2">
            <span className="text-2xl">📊</span>
            Matriz Impacto/Esfuerzo
          </h3>
          
          {/* Visual Matrix */}
          <div className="relative aspect-square max-w-xs mx-auto mb-4">
            <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-1">
              <div className="bg-accent/20 rounded-tl-lg flex items-center justify-center p-2">
                <div className="text-center">
                  <span className="text-xl">⭐</span>
                  <p className="text-xs font-semibold text-accent mt-1">QUICK WINS</p>
                  <p className="text-[10px] text-muted-foreground">Alto impacto, bajo esfuerzo</p>
                </div>
              </div>
              <div className="bg-primary/20 rounded-tr-lg flex items-center justify-center p-2">
                <div className="text-center">
                  <span className="text-xl">🎯</span>
                  <p className="text-xs font-semibold text-primary mt-1">PROYECTOS GRANDES</p>
                  <p className="text-[10px] text-muted-foreground">Alto impacto, alto esfuerzo</p>
                </div>
              </div>
              <div className="bg-secondary rounded-bl-lg flex items-center justify-center p-2">
                <div className="text-center">
                  <span className="text-xl">✨</span>
                  <p className="text-xs font-semibold text-foreground mt-1">FILL-INS</p>
                  <p className="text-[10px] text-muted-foreground">Bajo impacto, bajo esfuerzo</p>
                </div>
              </div>
              <div className="bg-destructive/20 rounded-br-lg flex items-center justify-center p-2">
                <div className="text-center">
                  <span className="text-xl">🚫</span>
                  <p className="text-xs font-semibold text-destructive mt-1">EVITAR</p>
                  <p className="text-[10px] text-muted-foreground">Bajo impacto, alto esfuerzo</p>
                </div>
              </div>
            </div>
            {/* Axis labels */}
            <div className="absolute -left-6 top-1/2 -translate-y-1/2 -rotate-90 text-xs text-muted-foreground font-semibold">
              IMPACTO ↑
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-6 text-xs text-muted-foreground font-semibold">
              ESFUERZO →
            </div>
          </div>

          {activeMethod === "matrix" && (
            <div className="mt-4 pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground">
                <strong className="text-primary">Cómo usar:</strong> Coloca cada idea en el cuadrante correspondiente. Prioriza las &quot;Quick Wins&quot; y planifica los &quot;Proyectos Grandes&quot;.
              </p>
            </div>
          )}
        </div>

        {/* Dot Voting */}
        <div
          className={cn(
            "bg-card border rounded-xl p-6 cursor-pointer transition-all duration-300",
            activeMethod === "voting"
              ? "border-accent shadow-lg shadow-accent/20"
              : "border-border hover:border-accent/50"
          )}
          onClick={() => setActiveMethod(activeMethod === "voting" ? null : "voting")}
        >
          <h3 className="font-bold text-xl text-foreground mb-4 flex items-center gap-2">
            <span className="text-2xl">🔘</span>
            Dot Voting (Votación por puntos)
          </h3>
          
          {/* Visual Voting Example */}
          <div className="space-y-3 mb-4">
            {[
              { idea: "Idea A: App móvil", dots: 5 },
              { idea: "Idea B: Chatbot", dots: 3 },
              { idea: "Idea C: Newsletter", dots: 7 },
              { idea: "Idea D: Podcast", dots: 2 },
            ].map((item) => (
              <div key={item.idea} className="flex items-center gap-3">
                <div className="flex-1 bg-secondary rounded-lg p-2">
                  <span className="text-sm text-foreground">{item.idea}</span>
                </div>
                <div className="flex gap-1">
                  {Array.from({ length: item.dots }).map((_, i) => (
                    <div
                      key={i}
                      className={cn(
                        "w-3 h-3 rounded-full",
                        item.dots >= 5 ? "bg-accent" : "bg-primary/50"
                      )}
                    />
                  ))}
                </div>
                <span className={cn(
                  "text-sm font-bold w-6 text-right",
                  item.dots >= 5 ? "text-accent" : "text-muted-foreground"
                )}>
                  {item.dots}
                </span>
              </div>
            ))}
          </div>

          {activeMethod === "voting" && (
            <div className="mt-4 pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground mb-2">
                <strong className="text-accent">Reglas:</strong>
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Cada persona recibe 3-5 votos (stickers)</li>
                <li>• Se pueden poner múltiples votos en una idea</li>
                <li>• Votación silenciosa y simultánea</li>
                <li>• Las ideas con más votos avanzan</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
