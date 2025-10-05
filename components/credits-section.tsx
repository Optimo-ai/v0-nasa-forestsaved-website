import { ExternalLink } from "lucide-react"

export default function CreditsSection() {
  const resources = [
    { name: "NASA Earthdata SAR Basics", url: "https://earthdata.nasa.gov/learn/backgrounders/what-is-sar" },
    { name: "Sentinel-1 Data – Copernicus", url: "https://sentinels.copernicus.eu/web/sentinel/missions/sentinel-1" },
    { name: "Sentinel-2 Data – Copernicus", url: "https://sentinels.copernicus.eu/web/sentinel/missions/sentinel-2" },
    { name: "NASA Space Apps Challenge", url: "https://www.spaceappschallenge.org/" },
  ]

  return (
    <section className="py-16 bg-[#4A5537] text-[#ECE6D8]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading font-bold text-3xl mb-6 text-center">Créditos y recursos</h2>

          <div className="text-center mb-8">
            <p className="mb-2">
              Desarrollado por <span className="font-semibold text-[#94B567]">Backscatter Team</span> para el NASA Space
              Apps Challenge 2025
            </p>
            <p className="text-sm text-[#BCA666]">
              Datos: Sentinel-1 (SAR) y Sentinel-2 (óptico) – Programa Copernicus, ESA
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {resources.map((resource, idx) => (
              <a
                key={idx}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-[#657D3E]/30 hover:bg-[#657D3E]/50 rounded-lg transition-colors group"
              >
                <span className="text-sm">{resource.name}</span>
                <ExternalLink className="h-4 w-4 text-[#BCA666] group-hover:text-[#ECE6D8] transition-colors" />
              </a>
            ))}
          </div>

          <div className="text-center pt-8 border-t border-[#657D3E]">
            <p className="text-lg italic font-heading">
              "El radar SAR ve lo que el ojo no puede, y la Tierra nos lo agradece."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
