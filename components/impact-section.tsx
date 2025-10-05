import { Sprout, Flame, Database } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function ImpactSection() {
  const impacts = [
    {
      icon: Sprout,
      title: "Restauración ecológica",
      description:
        "El SAR guía la reforestación donde más se necesita, identificando áreas prioritarias para la recuperación.",
      color: "text-secondary",
    },
    {
      icon: Flame,
      title: "Prevención de incendios",
      description:
        "Detección temprana con radar satelital permite respuestas rápidas antes de que los incendios se propaguen.",
      color: "text-destructive",
    },
    {
      icon: Database,
      title: "Ciencia abierta",
      description: "Datos accesibles para investigación y educación, democratizando el conocimiento ambiental.",
      color: "text-accent",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4">
        <h2 className="font-heading font-bold text-4xl md:text-5xl text-center mb-4 text-foreground">
          Impacto ambiental y social
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Transformando datos satelitales en acciones reales
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {impacts.map((impact, idx) => (
            <Card key={idx} className="p-8 bg-card border-border hover:shadow-xl transition-all hover:-translate-y-1">
              <div
                className={`w-16 h-16 rounded-full bg-card-foreground/5 flex items-center justify-center mb-6 ${impact.color}`}
              >
                <impact.icon className="h-8 w-8" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3 text-card-foreground">{impact.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{impact.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto text-center">
          <div className="inline-block px-6 py-3 bg-primary/10 border border-primary/30 rounded-full">
            <p className="text-lg font-heading font-semibold text-primary">
              🌍 El radar SAR ve lo que el ojo no puede, y la Tierra nos lo agradece
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
