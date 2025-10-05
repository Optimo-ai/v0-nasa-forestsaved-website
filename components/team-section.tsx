import { Card } from "@/components/ui/card"
import { Users } from "lucide-react"

export default function TeamSection() {
  const team = [
    { name: "Bryan Steven Vargas", username: "@steven-curiosity", role: "Team Owner", country: "Dominican Republic" },
    { name: "Esthel Mariela Lahoz Peña", username: "@esthel", country: "Dominican Republic" },
    { name: "Kevin Alcantara Chalas", username: "@kevin_moon2", country: "Dominican Republic" },
    { name: "Jarlene Marielt Nuñez Cordero", username: "@jar2303", country: "Dominican Republic" },
    { name: "Ariel Ramón García Rodríguez", username: "@astroariel", country: "Dominican Republic" },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Users className="h-8 w-8 text-primary" />
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground">Backscatter Team</h2>
          </div>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed text-muted-foreground">
            Somos un grupo de jóvenes dominicanos apasionados por la ciencia espacial. Inspirados en la tecnología SAR,
            desarrollamos NASA Forestsaved para transformar datos satelitales en acciones ambientales reales.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {team.map((member, idx) => (
            <Card key={idx} className="p-6 bg-card border-border hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-heading font-bold text-xl flex-shrink-0">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-heading font-semibold text-lg text-card-foreground mb-1 truncate">
                    {member.name}
                  </h3>
                  <p className="text-sm text-accent mb-1">{member.username}</p>
                  {member.role && <p className="text-xs font-semibold text-primary mb-1">{member.role}</p>}
                  <p className="text-xs text-muted-foreground">{member.country}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block px-6 py-3 bg-accent/10 border border-accent/30 rounded-lg">
            <p className="text-sm font-semibold text-accent">🚀 NASA Space Apps Challenge 2025</p>
          </div>
        </div>
      </div>
    </section>
  )
}
