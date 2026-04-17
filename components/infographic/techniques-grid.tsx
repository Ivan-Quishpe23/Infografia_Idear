"use client"

import { cn } from "@/lib/utils"
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

const techniques = [
  {
    name: "Brainstorming",
    icon: "🧠",
    shortDesc: "Tormenta de ideas grupal",
    fullDesc: "Técnica clásica donde un grupo genera ideas libremente sin críticas. El moderador anota todas las ideas y luego se evalúan.",
    steps: ["Definir el problema claramente", "Establecer un tiempo límite (15-30 min)", "Generar ideas sin juzgar", "Construir sobre ideas de otros", "Documentar todo"],
    tip: "Ideal para grupos de 5-8 personas"
  },
  {
    name: "SCAMPER",
    icon: "🔄",
    shortDesc: "Modificar ideas existentes",
    fullDesc: "Acrónimo que guía la transformación de ideas: Sustituir, Combinar, Adaptar, Modificar, Poner otros usos, Eliminar, Reorganizar.",
    steps: ["Sustituir componentes", "Combinar con otras ideas", "Adaptar de otros contextos", "Modificar/Magnificar", "Poner otros usos", "Eliminar partes", "Reorganizar/Revertir"],
    tip: "Útil para mejorar productos existentes"
  },
  {
    name: "Método 6-3-5",
    icon: "📝",
    shortDesc: "6 personas, 3 ideas, 5 minutos",
    fullDesc: "Técnica estructurada donde 6 participantes escriben 3 ideas en 5 minutos, luego pasan su hoja al siguiente para construir sobre ellas.",
    steps: ["6 participantes con una hoja cada uno", "Cada uno escribe 3 ideas en 5 min", "Pasar la hoja a la derecha", "Agregar 3 ideas nuevas inspiradas", "Repetir hasta completar 6 rondas"],
    tip: "Genera 108 ideas en 30 minutos"
  },
  {
    name: "Crazy 8s",
    icon: "⚡",
    shortDesc: "8 ideas en 8 minutos",
    fullDesc: "Técnica de sketching rápido donde cada participante dibuja 8 ideas diferentes en 8 minutos (1 por minuto).",
    steps: ["Doblar una hoja en 8 secciones", "Poner timer de 8 minutos", "Dibujar una idea por sección", "No borrar, solo avanzar", "Compartir y votar las mejores"],
    tip: "Perfecta para ideación visual rápida"
  },
  {
    name: "Mind Mapping",
    icon: "🗺️",
    shortDesc: "Mapa mental de conexiones",
    fullDesc: "Diagrama que conecta ideas relacionadas visualmente, partiendo de un concepto central hacia ramificaciones.",
    steps: ["Escribir el tema central", "Añadir ramas principales", "Expandir con sub-ramas", "Usar colores e imágenes", "Buscar conexiones cruzadas"],
    tip: "Excelente para explorar un tema en profundidad"
  },
  {
    name: "Worst Possible Idea",
    icon: "😈",
    shortDesc: "Las peores ideas primero",
    fullDesc: "Técnica que invierte el pensamiento: primero generar las peores ideas posibles, luego invertirlas para encontrar buenas soluciones.",
    steps: ["Plantear el problema", "Generar las peores soluciones", "Analizar por qué son malas", "Invertir cada mala idea", "Desarrollar las inversiones"],
    tip: "Rompe bloqueos creativos"
  },
  {
    name: "Analogías",
    icon: "🔗",
    shortDesc: "Inspiración de otros campos",
    fullDesc: "Buscar soluciones en campos completamente diferentes y adaptar esos principios al problema actual.",
    steps: ["Identificar el desafío principal", "Buscar campos no relacionados", "¿Cómo resuelven problemas similares?", "Extraer principios", "Adaptar al contexto original"],
    tip: "La naturaleza es una gran fuente de analogías"
  },
  {
    name: "Storyboarding",
    icon: "🎬",
    shortDesc: "Narrativa visual secuencial",
    fullDesc: "Crear una secuencia visual que cuenta la historia del usuario interactuando con la solución propuesta.",
    steps: ["Definir el escenario inicial", "Dibujar cada paso del journey", "Incluir emociones del usuario", "Identificar puntos de dolor", "Visualizar la solución"],
    tip: "Ideal para servicios y experiencias"
  },
  {
    name: "Role Playing",
    icon: "🎭",
    shortDesc: "Actuar como el usuario",
    fullDesc: "Los participantes actúan como diferentes tipos de usuarios para generar empatía y descubrir necesidades ocultas.",
    steps: ["Definir personas/usuarios", "Asignar roles al equipo", "Actuar escenarios reales", "Documentar insights", "Generar ideas basadas en la experiencia"],
    tip: "Revela necesidades no expresadas"
  },
]

export function TechniquesGrid() {
  const [selectedTechnique, setSelectedTechnique] = useState<typeof techniques[0] | null>(null)

  return (
    <section className="py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-foreground">
        9 Técnicas de Ideación
      </h2>
      <p className="text-center text-muted-foreground mb-8">
        Haz clic en cualquier técnica para ver más detalles
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {techniques.map((technique, index) => (
          <div
            key={technique.name}
            className={cn(
              "bg-card border border-border rounded-xl p-5 cursor-pointer transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/10 group",
              index === 0 && "sm:col-span-2 lg:col-span-1"
            )}
            onClick={() => setSelectedTechnique(technique)}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">{technique.icon}</span>
              <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                {technique.name}
              </h3>
            </div>
            <p className="text-sm text-muted-foreground">{technique.shortDesc}</p>
          </div>
        ))}
      </div>

      <Dialog open={!!selectedTechnique} onOpenChange={() => setSelectedTechnique(null)}>
        <DialogContent className="max-w-lg bg-card border-border">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3 text-foreground">
              <span className="text-3xl">{selectedTechnique?.icon}</span>
              {selectedTechnique?.name}
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              {selectedTechnique?.fullDesc}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Pasos:</h4>
              <ol className="space-y-1">
                {selectedTechnique?.steps.map((step, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="bg-primary text-primary-foreground w-5 h-5 rounded-full flex items-center justify-center text-xs shrink-0">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
            
            <div className="bg-secondary/50 rounded-lg p-3">
              <p className="text-sm">
                <span className="text-primary font-semibold">💡 Tip: </span>
                <span className="text-foreground">{selectedTechnique?.tip}</span>
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
