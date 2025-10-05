import { Waves, Eye, Cloud } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function SARPowerSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-heading font-bold text-4xl md:text-5xl text-center mb-6 text-foreground">
          El poder del radar SAR
        </h2>

        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-lg leading-relaxed text-center mb-6">
            Los incendios dejan cicatrices invisibles a simple vista. Solo el{" "}
            <span className="font-semibold text-accent">Radar de Apertura Sintética (SAR)</span> puede penetrar las
            nubes, detectar humedad, y medir los cambios estructurales en la superficie terrestre incluso durante
            condiciones climáticas adversas.
          </p>
          <p className="text-lg leading-relaxed text-center text-muted-foreground">
            Esta tecnología permite observar la pérdida de vegetación, la severidad del daño y la recuperación
            post-incendio con una precisión milimétrica.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="p-6 bg-card border-border hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
              <Cloud className="h-6 w-6 text-accent" />
            </div>
            <h3 className="font-heading font-semibold text-xl mb-3 text-card-foreground">Penetra las nubes</h3>
            <p className="text-muted-foreground leading-relaxed">
              El radar SAR funciona en cualquier condición climática, día o noche, atravesando nubes y humo.
            </p>
          </Card>

          <Card className="p-6 bg-card border-border hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Waves className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-heading font-semibold text-xl mb-3 text-card-foreground">Detecta humedad</h3>
            <p className="text-muted-foreground leading-relaxed">
              Mide cambios en la humedad del suelo y vegetación, indicadores clave de riesgo de incendio.
            </p>
          </Card>

          <Card className="p-6 bg-card border-border hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
              <Eye className="h-6 w-6 text-secondary" />
            </div>
            <h3 className="font-heading font-semibold text-xl mb-3 text-card-foreground">Precisión milimétrica</h3>
            <p className="text-muted-foreground leading-relaxed">
              Detecta cambios estructurales mínimos en la superficie terrestre con alta resolución.
            </p>
          </Card>
        </div>

        {/* SAR Diagram */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-card rounded-lg p-8 border border-border">
            <h3 className="font-heading font-semibold text-2xl mb-6 text-center text-card-foreground">
              Cómo funciona el SAR
            </h3>
            <div className="relative h-64 flex items-center justify-center">
              <svg viewBox="0 0 400 200" className="w-full h-full">
                {/* Satellite */}
                <rect x="180" y="20" width="40" height="20" fill="#1C4C7D" />
                <text x="200" y="15" textAnchor="middle" fill="#4A5537" fontSize="12">
                  Satélite
                </text>

                {/* Radar waves going down */}
                <path d="M 200 40 L 150 120" stroke="#94B567" strokeWidth="2" strokeDasharray="5,5" />
                <path d="M 200 40 L 200 120" stroke="#94B567" strokeWidth="2" strokeDasharray="5,5" />
                <path d="M 200 40 L 250 120" stroke="#94B567" strokeWidth="2" strokeDasharray="5,5" />

                {/* Earth surface */}
                <ellipse cx="200" cy="160" rx="150" ry="20" fill="#657D3E" />
                <text x="200" y="190" textAnchor="middle" fill="#4A5537" fontSize="12">
                  Superficie terrestre
                </text>

                {/* Return waves */}
                <path d="M 150 120 L 190 50" stroke="#BCA666" strokeWidth="2" strokeDasharray="3,3" />
                <path d="M 200 120 L 200 50" stroke="#BCA666" strokeWidth="2" strokeDasharray="3,3" />
                <path d="M 250 120 L 210 50" stroke="#BCA666" strokeWidth="2" strokeDasharray="3,3" />

                {/* Labels */}
                <text x="120" y="80" fill="#94B567" fontSize="11">
                  Emisión
                </text>
                <text x="260" y="80" fill="#BCA666" fontSize="11">
                  Eco
                </text>
              </svg>
            </div>
            <p className="text-center text-sm text-muted-foreground mt-4 italic">
              El satélite emite ondas radar que rebotan en la superficie, revelando información invisible al ojo humano
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
