import { Card } from "@/components/ui/card"
import { TrendingDown, TrendingUp } from "lucide-react"

export default function StatisticsSection() {
  const statistics = [
    {
      indicator: "VH_dB",
      value: "−14.43 dB",
      variation: "−0.17 dB",
      interpretation: "Menor humedad superficial tras incendio",
      trend: "down",
    },
    {
      indicator: "VV_dB",
      value: "−8.13 dB",
      variation: "−0.10 dB",
      interpretation: "Pérdida leve de reflectividad",
      trend: "down",
    },
    {
      indicator: "NDVI",
      value: "0.59",
      variation: "+0.006",
      interpretation: "Recuperación parcial de vegetación viva",
      trend: "up",
    },
    {
      indicator: "NBR",
      value: "0.41",
      variation: "+0.03",
      interpretation: "Disminución del área quemada",
      trend: "up",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-heading font-bold text-4xl md:text-5xl text-center mb-4 text-foreground">
          Estadísticas reales
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Datos derivados del análisis SAR de Sentinel-1 y óptico de Sentinel-2
        </p>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {statistics.map((stat, idx) => (
              <Card key={idx} className="p-6 bg-card border-border hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-heading font-bold text-2xl text-card-foreground mb-1">{stat.indicator}</h3>
                    <p className="text-3xl font-bold text-primary">{stat.value}</p>
                  </div>
                  <div
                    className={`flex items-center gap-1 px-3 py-1 rounded-full ${
                      stat.trend === "up" ? "bg-secondary/10 text-secondary" : "bg-destructive/10 text-destructive"
                    }`}
                  >
                    {stat.trend === "up" ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                    <span className="text-sm font-semibold">{stat.variation}</span>
                  </div>
                </div>
                <p className="text-muted-foreground">{stat.interpretation}</p>
              </Card>
            ))}
          </div>

          <Card className="p-8 bg-gradient-to-br from-accent/5 to-primary/5 border-accent/20">
            <h3 className="font-heading font-semibold text-xl mb-4 text-center text-foreground">
              Interpretación científica
            </h3>
            <p className="leading-relaxed text-center max-w-4xl mx-auto">
              El análisis radar SAR de Sentinel-1, combinado con los índices ópticos de Sentinel-2, evidencia un patrón
              típico post-incendio:
              <span className="font-semibold text-accent"> disminución inicial de la señal radar</span> (humedad y
              rugosidad) seguida de una
              <span className="font-semibold text-secondary"> leve recuperación en la vegetación</span> (NDVI/NBR).
            </p>
            <p className="leading-relaxed text-center max-w-4xl mx-auto mt-4 text-muted-foreground">
              Esto demuestra la potencia del SAR como herramienta para monitorear procesos ecológicos invisibles y
              anticipar emergencias ambientales.
            </p>
          </Card>

          {/* Visualization */}
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <Card className="p-6 bg-card border-border">
              <h4 className="font-heading font-semibold mb-4 text-card-foreground">Evolución temporal NDVI/NBR</h4>
              <div className="h-48 flex items-end justify-around gap-2">
                {[0.52, 0.48, 0.45, 0.5, 0.55, 0.59].map((val, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                    <div
                      className="w-full bg-gradient-to-t from-primary to-secondary rounded-t"
                      style={{ height: `${val * 100}%` }}
                    ></div>
                    <span className="text-xs text-muted-foreground">{idx + 1}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-center text-muted-foreground mt-4">Meses desde el incendio</p>
            </Card>

            <Card className="p-6 bg-card border-border">
              <h4 className="font-heading font-semibold mb-4 text-card-foreground">Señal SAR VH/VV</h4>
              <div className="h-48 flex items-end justify-around gap-2">
                {[-14.2, -14.5, -14.8, -14.6, -14.5, -14.43].map((val, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                    <div
                      className="w-full bg-gradient-to-t from-accent to-accent/50 rounded-t"
                      style={{ height: `${(val + 15) * 100}%` }}
                    ></div>
                    <span className="text-xs text-muted-foreground">{idx + 1}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-center text-muted-foreground mt-4">Meses desde el incendio</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
