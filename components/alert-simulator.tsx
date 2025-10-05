"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Radio, AlertTriangle, CheckCircle2 } from "lucide-react"

export default function AlertSimulator() {
  const [isScanning, setIsScanning] = useState(false)
  const [scanStage, setScanStage] = useState(0)
  const [showResult, setShowResult] = useState(false)

  const stages = [
    "Analizando datos SAR...",
    "Detectando anomalías...",
    "Comparando con datos históricos...",
    "🔥 Alta probabilidad de incendio detectada",
    "✅ Alerta enviada a las autoridades",
  ]

  const startScan = () => {
    setIsScanning(true)
    setScanStage(0)
    setShowResult(false)

    let currentStage = 0
    const interval = setInterval(() => {
      currentStage++
      setScanStage(currentStage)

      if (currentStage >= stages.length) {
        clearInterval(interval)
        setIsScanning(false)
        setShowResult(true)
      }
    }, 1500)
  }

  return (
    <section id="simulator" className="py-20 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4 text-foreground">
            Simulación del sistema SAR
          </h2>
          <p className="text-lg text-muted-foreground mb-12">Detección de anomalías en tiempo real</p>

          <Card className="p-12 bg-card border-border">
            <div className="relative">
              {/* Radar Animation */}
              <div className="w-48 h-48 mx-auto mb-8 relative">
                <div
                  className={`absolute inset-0 rounded-full border-4 border-accent ${isScanning ? "animate-spin" : ""}`}
                >
                  <div className="absolute top-1/2 left-1/2 w-1 h-24 bg-accent origin-bottom -translate-x-1/2 -translate-y-full"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Radio className={`h-16 w-16 ${isScanning ? "text-accent" : "text-muted-foreground"}`} />
                </div>
                {isScanning && (
                  <>
                    <div className="absolute inset-0 rounded-full bg-accent/20 radar-pulse"></div>
                    <div
                      className="absolute inset-0 rounded-full bg-accent/20 radar-pulse"
                      style={{ animationDelay: "1s" }}
                    ></div>
                  </>
                )}
              </div>

              {/* Status Messages */}
              <div className="min-h-[120px] mb-8">
                {isScanning && (
                  <div className="space-y-3">
                    {stages.slice(0, scanStage + 1).map((stage, idx) => (
                      <div
                        key={idx}
                        className={`text-lg ${
                          idx === scanStage ? "font-semibold text-foreground" : "text-muted-foreground"
                        } ${idx >= 3 ? "text-xl" : ""}`}
                      >
                        {stage}
                      </div>
                    ))}
                  </div>
                )}
                {!isScanning && !showResult && (
                  <p className="text-muted-foreground">Presiona el botón para simular una detección de cambios SAR</p>
                )}
              </div>

              {/* Action Button */}
              <Button
                size="lg"
                onClick={startScan}
                disabled={isScanning}
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-heading font-semibold"
              >
                {isScanning ? "Detectando..." : "Detectar cambio SAR"}
              </Button>

              {/* Results */}
              {showResult && (
                <div className="mt-8 space-y-4">
                  <div className="p-4 bg-destructive/10 border border-destructive/30 rounded-lg flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                    <div className="text-left">
                      <p className="font-semibold text-destructive mb-1">Anomalía detectada</p>
                      <p className="text-sm text-muted-foreground">
                        Cambio significativo en señal VH: -2.3 dB | Disminución NDVI: -0.15
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-secondary/10 border border-secondary/30 rounded-lg flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <div className="text-left">
                      <p className="font-semibold text-secondary mb-1">Sistema activado</p>
                      <p className="text-sm text-muted-foreground">
                        Notificación enviada a autoridades ambientales y equipos de respuesta
                      </p>
                    </div>
                  </div>

                  {/* Mini Graph */}
                  <div className="mt-6 p-4 bg-card-foreground/5 rounded-lg">
                    <h4 className="font-heading font-semibold text-sm mb-3">Diferencia VH/VV</h4>
                    <div className="h-24 flex items-end justify-around gap-2">
                      <div className="flex-1 bg-secondary h-full rounded-t"></div>
                      <div className="flex-1 bg-secondary h-4/5 rounded-t"></div>
                      <div className="flex-1 bg-muted h-3/5 rounded-t"></div>
                      <div className="flex-1 bg-destructive h-2/5 rounded-t"></div>
                      <div className="flex-1 bg-destructive h-1/3 rounded-t"></div>
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                      <span>Ene</span>
                      <span>Feb</span>
                      <span>Mar</span>
                      <span>Abr</span>
                      <span>May</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
