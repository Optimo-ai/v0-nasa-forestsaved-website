"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Layers, Calendar } from "lucide-react"

export default function InteractiveMap() {
  const mapRef = useRef<HTMLDivElement>(null)
  const [activeLayer, setActiveLayer] = useState<"sar" | "optical">("sar")
  const [timeIndex, setTimeIndex] = useState(0)

  const timePoints = [
    "Enero 2024 (Pre-incendio)",
    "Marzo 2024 (Durante)",
    "Junio 2024 (Post-incendio)",
    "Septiembre 2024 (Recuperación)",
  ]

  useEffect(() => {
    // In a real implementation, this would initialize Leaflet.js with TimeDimension
    // For now, we'll create a placeholder
    if (mapRef.current) {
      // Leaflet initialization would go here
    }
  }, [])

  return (
    <section id="map" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-heading font-bold text-4xl md:text-5xl text-center mb-4 text-foreground">
          Mapa interactivo Sentinel
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Visualiza la evolución del Parque Nacional Los Haitises con datos SAR y ópticos
        </p>

        <div className="max-w-6xl mx-auto">
          <Card className="overflow-hidden border-border">
            {/* Map Controls */}
            <div className="bg-card-foreground/5 p-4 border-b border-border flex flex-wrap gap-4 items-center justify-between">
              <div className="flex gap-2">
                <Button
                  variant={activeLayer === "sar" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveLayer("sar")}
                  className={activeLayer === "sar" ? "bg-accent text-accent-foreground" : ""}
                >
                  <Layers className="mr-2 h-4 w-4" />
                  Sentinel-1 (SAR)
                </Button>
                <Button
                  variant={activeLayer === "optical" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveLayer("optical")}
                  className={activeLayer === "optical" ? "bg-primary text-primary-foreground" : ""}
                >
                  <Layers className="mr-2 h-4 w-4" />
                  Sentinel-2 (Óptico)
                </Button>
              </div>

              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">{timePoints[timeIndex]}</span>
              </div>
            </div>

            {/* Map Display */}
            <div ref={mapRef} className="relative h-[500px] bg-gradient-to-br from-primary/20 to-accent/20">
              {/* Placeholder map - in production this would be Leaflet */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-64 h-64 mx-auto rounded-lg bg-gradient-to-br from-primary to-accent opacity-30 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl">🛰️</div>
                    </div>
                    {/* Simulated affected area */}
                    <div className="absolute top-1/3 left-1/3 w-20 h-20 bg-destructive/40 rounded-full blur-sm"></div>
                  </div>
                  <p className="text-sm text-muted-foreground">Parque Nacional Los Haitises, República Dominicana</p>
                  <div className="inline-block px-4 py-2 bg-destructive/10 border border-destructive/30 rounded-lg">
                    <p className="text-sm font-medium text-destructive">
                      🔥 Área degradada — pérdida estimada de 38% de vegetación detectada por SAR
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline Control */}
            <div className="p-4 bg-card-foreground/5 border-t border-border">
              <input
                type="range"
                min="0"
                max="3"
                value={timeIndex}
                onChange={(e) => setTimeIndex(Number.parseInt(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                {timePoints.map((point, idx) => (
                  <span key={idx} className={idx === timeIndex ? "font-semibold text-foreground" : ""}>
                    {point.split(" ")[0]}
                  </span>
                ))}
              </div>
            </div>

            {/* Legend */}
            <div className="p-4 bg-card-foreground/5 border-t border-border">
              <h4 className="font-heading font-semibold text-sm mb-3">Leyenda</h4>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-secondary"></div>
                  <span>Vegetación densa</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-muted"></div>
                  <span>Vegetación afectada</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-destructive"></div>
                  <span>Área quemada</span>
                </div>
              </div>
            </div>
          </Card>

          <div className="mt-6 p-4 bg-accent/10 rounded-lg border border-accent/20">
            <p className="text-sm text-center italic">
              💡 Los datos SAR revelan detalles invisibles: humedad, rugosidad y estructura del suelo. Son esenciales
              para el monitoreo continuo de ecosistemas.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
