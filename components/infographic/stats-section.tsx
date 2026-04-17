"use client"

import { useEffect, useState } from "react"

const stats = [
  { value: 100, suffix: "+", label: "Ideas por sesión", description: "En una sesión de brainstorming efectiva" },
  { value: 80, suffix: "%", label: "Ideas descartadas", description: "Es normal descartar la mayoría" },
  { value: 6, suffix: "-8", label: "Personas ideales", description: "Tamaño óptimo del equipo" },
  { value: 45, suffix: "min", label: "Duración ideal", description: "Tiempo recomendado por sesión" },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [value])

  return (
    <span className="text-4xl md:text-5xl font-bold text-primary">
      {count}{suffix}
    </span>
  )
}

export function StatsSection() {
  return (
    <section className="py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground">
        Estadísticas Clave de la Fase Idear
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
          >
            <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            <p className="text-sm md:text-base font-semibold mt-2 text-foreground">{stat.label}</p>
            <p className="text-xs text-muted-foreground mt-1">{stat.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
