export default function ProblemSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-center mb-4 text-foreground">
            Los Haitises: la selva radarizada
          </h2>

          <div className="bg-card/50 backdrop-blur-sm rounded-lg p-8 border border-border">
            <p className="text-lg leading-relaxed mb-6">
              En 2024, incendios forestales afectaron extensas áreas del{" "}
              <span className="font-semibold text-primary">Parque Nacional Los Haitises</span>. Gracias a los datos SAR
              de Sentinel-1 y los índices ópticos de Sentinel-2, fue posible cuantificar los daños y observar la
              evolución de la recuperación.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground mb-8">
              Sin esta visión radar, gran parte del impacto ambiental habría pasado desapercibido.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-heading font-semibold text-xl text-card-foreground">El desafío</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1">🔥</span>
                    <span>Incendios recurrentes en zonas de difícil acceso</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-muted mt-1">☁️</span>
                    <span>Cobertura nubosa constante impide monitoreo óptico</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">🌳</span>
                    <span>Ecosistemas únicos en riesgo permanente</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="font-heading font-semibold text-xl text-card-foreground">La solución SAR</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">📡</span>
                    <span>Monitoreo continuo independiente del clima</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary mt-1">📊</span>
                    <span>Cuantificación precisa de daños y recuperación</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">⚡</span>
                    <span>Detección temprana de anomalías</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-4 bg-accent/10 rounded-lg border border-accent/20">
              <p className="text-sm italic text-center">
                "El radar SAR revela lo invisible: cambios en humedad, rugosidad y estructura del suelo que son
                esenciales para el monitoreo continuo de ecosistemas."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
