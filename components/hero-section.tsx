"use client"

import { Button } from "@/components/ui/button"
import { Satellite, Radio, MessageSquare } from "lucide-react"
import { useEffect, useRef } from "react"

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    let animationFrame: number
    let angle = 0

    const drawRadarWave = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw radar waves
      ctx.strokeStyle = "rgba(28, 76, 125, 0.1)"
      ctx.lineWidth = 2

      for (let i = 0; i < 5; i++) {
        const radius = (angle + i * 50) % 300
        ctx.beginPath()
        ctx.arc(canvas.width / 2, canvas.height / 2, radius, 0, Math.PI * 2)
        ctx.stroke()
      }

      angle += 2
      animationFrame = requestAnimationFrame(drawRadarWave)
    }

    drawRadarWave()

    return () => cancelAnimationFrame(animationFrame)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#1C4C7D] to-[#657D3E]">
      <canvas ref={canvasRef} className="absolute inset-0 opacity-30" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="mb-8 inline-block">
          <div className="text-[#ECE6D8] font-bold text-xl tracking-wider mb-2">BACKSCATTER TEAM</div>
        </div>

        <h1 className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl text-[#ECE6D8] mb-6 text-balance">
          NASA Forestsaved
        </h1>

        <p className="font-heading text-xl md:text-2xl text-[#94B567] mb-4 max-w-3xl mx-auto text-balance">
          Protegiendo los bosques de la Tierra con la visión del radar SAR
        </p>

        <p className="text-lg text-[#ECE6D8]/90 mb-12 max-w-2xl mx-auto leading-relaxed">
          Un sistema basado en datos SAR de Sentinel-1 y ópticos de Sentinel-2 para monitorear, analizar y prevenir
          incendios forestales.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-[#94B567] hover:bg-[#657D3E] text-[#202020] font-heading font-semibold"
            onClick={() => document.getElementById("map")?.scrollIntoView({ behavior: "smooth" })}
          >
            <Satellite className="mr-2 h-5 w-5" />
            Ver mapa satelital
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-[#ECE6D8] text-[#ECE6D8] hover:bg-[#ECE6D8] hover:text-[#1C4C7D] font-heading font-semibold bg-transparent"
            onClick={() => document.getElementById("simulator")?.scrollIntoView({ behavior: "smooth" })}
          >
            <Radio className="mr-2 h-5 w-5" />
            Probar alerta
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-[#ECE6D8] text-[#ECE6D8] hover:bg-[#ECE6D8] hover:text-[#1C4C7D] font-heading font-semibold bg-transparent"
            onClick={() => {
              const event = new CustomEvent("openChatbot")
              window.dispatchEvent(event)
            }}
          >
            <MessageSquare className="mr-2 h-5 w-5" />
            Hablar con TreeBot
          </Button>
        </div>

        <div className="mt-16 text-[#ECE6D8]/70 text-sm">
          <p className="italic">Radar Eyes for Earth</p>
        </div>
      </div>

      {/* Decorative radar pulse */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 rounded-full bg-[#94B567]/20 radar-pulse"></div>
          <div
            className="absolute inset-0 rounded-full bg-[#94B567]/20 radar-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>
      </div>
    </section>
  )
}
