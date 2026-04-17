"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const examples = [
  {
    problem: "Los usuarios abandonan el carrito de compras",
    hmw: "¿Cómo podríamos hacer que completar una compra sea tan fácil como agregar al carrito?",
  },
  {
    problem: "Los estudiantes no completan los cursos online",
    hmw: "¿Cómo podríamos convertir el aprendizaje en una experiencia tan adictiva como un videojuego?",
  },
  {
    problem: "Las personas no reciclan correctamente",
    hmw: "¿Cómo podríamos hacer que separar residuos sea tan intuitivo como tirar la basura?",
  },
]

export function HMWSection() {
  const [activeExample, setActiveExample] = useState(0)

  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <span className="inline-block px-4 py-1 bg-accent/20 text-accent rounded-full text-sm font-semibold mb-4">
            Herramienta Clave
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            How Might We (HMW)
          </h2>
          <p className="text-muted-foreground mt-2">
            &quot;¿Cómo podríamos...?&quot; - La pregunta que desbloquea la creatividad
          </p>
        </div>

        <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
          {/* Formula */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
            <div className="bg-secondary rounded-xl p-4 text-center flex-1 max-w-xs">
              <p className="text-sm text-muted-foreground mb-1">Problema</p>
              <p className="font-semibold text-foreground">Punto de dolor del usuario</p>
            </div>
            <div className="text-3xl text-primary">→</div>
            <div className="bg-primary/20 border-2 border-primary rounded-xl p-4 text-center flex-1 max-w-xs">
              <p className="text-sm text-primary mb-1">Pregunta HMW</p>
              <p className="font-semibold text-foreground">&quot;¿Cómo podríamos...?&quot;</p>
            </div>
            <div className="text-3xl text-primary">→</div>
            <div className="bg-accent/20 rounded-xl p-4 text-center flex-1 max-w-xs">
              <p className="text-sm text-accent mb-1">Resultado</p>
              <p className="font-semibold text-foreground">Ideas innovadoras</p>
            </div>
          </div>

          {/* Tips */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-secondary/50 rounded-lg p-4">
              <p className="text-sm">
                <span className="text-primary font-semibold">✓ Correcto:</span>
                <span className="text-foreground"> Ni muy amplia ni muy estrecha</span>
              </p>
            </div>
            <div className="bg-secondary/50 rounded-lg p-4">
              <p className="text-sm">
                <span className="text-accent font-semibold">✓ Incluye:</span>
                <span className="text-foreground"> Un aspecto del problema</span>
              </p>
            </div>
            <div className="bg-secondary/50 rounded-lg p-4">
              <p className="text-sm">
                <span className="text-primary font-semibold">✓ Evita:</span>
                <span className="text-foreground"> Sugerir una solución específica</span>
              </p>
            </div>
          </div>

          {/* Examples */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <span>📌</span> Ejemplos Prácticos
            </h3>

            <div className="flex gap-2 mb-4">
              {examples.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveExample(index)}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-all",
                    activeExample === index
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  )}
                >
                  Ejemplo {index + 1}
                </button>
              ))}
            </div>

            <div className="bg-secondary/30 rounded-xl p-5">
              <div className="mb-4">
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Problema identificado:</p>
                <p className="text-foreground font-medium">{examples[activeExample].problem}</p>
              </div>
              <div>
                <p className="text-xs text-primary uppercase tracking-wide mb-1">Pregunta HMW:</p>
                <p className="text-lg font-semibold text-foreground">{examples[activeExample].hmw}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
