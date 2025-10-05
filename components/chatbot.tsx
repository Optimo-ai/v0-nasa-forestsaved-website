"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { X, Send, Leaf } from "lucide-react"

interface Message {
  text: string
  isBot: boolean
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hola, soy TreeBot, tu asistente ambiental. 🌿\n¿Quieres saber cómo usamos datos SAR para proteger los bosques?",
      isBot: true,
    },
  ])
  const [input, setInput] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleOpenChatbot = () => setIsOpen(true)
    window.addEventListener("openChatbot", handleOpenChatbot)
    return () => window.removeEventListener("openChatbot", handleOpenChatbot)
  }, [])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const responses: Record<string, string> = {
    sar: 'El SAR (Radar de Apertura Sintética) es una tecnología que usa ondas de radar para observar la Tierra. A diferencia de las cámaras ópticas, el SAR puede "ver" a través de nubes, humo y oscuridad, detectando cambios en humedad, rugosidad y estructura del suelo.',
    sentinel:
      "Sentinel-1 es un satélite con radar SAR que orbita la Tierra cada 12 días. Sentinel-2 captura imágenes ópticas. Juntos, nos dan una visión completa: el SAR detecta cambios estructurales y el óptico muestra la vegetación visible.",
    incendio:
      "Detectamos incendios comparando datos SAR antes y después. Los cambios en la señal VH/VV indican pérdida de vegetación y humedad. También usamos índices como NDVI y NBR de Sentinel-2 para confirmar áreas quemadas.",
    ayudar:
      "Puedes ayudar: 1) Reporta humo o incendios a las autoridades, 2) No quemes basura en áreas forestales, 3) Educa a otros sobre la importancia de los bosques, 4) Apoya proyectos de reforestación.",
    default:
      "Interesante pregunta. Te recomiendo explorar nuestros recursos educativos sobre SAR y monitoreo ambiental. ¿Hay algo más específico que quieras saber sobre el radar SAR o los incendios forestales?",
  }

  const handleSend = () => {
    if (!input.trim()) return

    const userMessage = { text: input, isBot: false }
    setMessages((prev) => [...prev, userMessage])

    // Simple keyword matching for demo
    const lowerInput = input.toLowerCase()
    let response = responses.default

    if (lowerInput.includes("sar") || lowerInput.includes("radar")) {
      response = responses.sar
    } else if (lowerInput.includes("sentinel")) {
      response = responses.sentinel
    } else if (lowerInput.includes("incendio") || lowerInput.includes("fuego") || lowerInput.includes("detecta")) {
      response = responses.incendio
    } else if (lowerInput.includes("ayudar") || lowerInput.includes("hacer")) {
      response = responses.ayudar
    }

    setTimeout(() => {
      setMessages((prev) => [...prev, { text: response, isBot: true }])
    }, 1000)

    setInput("")
  }

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-secondary hover:bg-secondary/90 shadow-lg z-50"
          size="icon"
        >
          <Leaf className="h-6 w-6 text-secondary-foreground" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-96 h-[500px] flex flex-col shadow-2xl z-50 border-border">
          {/* Header */}
          <div className="flex items-center justify-between p-4 bg-secondary text-secondary-foreground rounded-t-lg">
            <div className="flex items-center gap-2">
              <Leaf className="h-5 w-5" />
              <div>
                <h3 className="font-heading font-semibold">TreeBot</h3>
                <p className="text-xs opacity-90">Asistente ambiental</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="hover:bg-secondary-foreground/10"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-background">
            {messages.map((message, idx) => (
              <div key={idx} className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}>
                <div
                  className={`max-w-[80%] p-3 rounded-lg whitespace-pre-line ${
                    message.isBot
                      ? "bg-card text-card-foreground border border-border"
                      : "bg-primary text-primary-foreground"
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border bg-card">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Escribe tu pregunta..."
                className="flex-1"
              />
              <Button
                onClick={handleSend}
                size="icon"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setInput("¿Qué es un radar SAR?")
                  setTimeout(handleSend, 100)
                }}
                className="text-xs"
              >
                ¿Qué es SAR?
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setInput("¿Cómo se detectan incendios?")
                  setTimeout(handleSend, 100)
                }}
                className="text-xs"
              >
                Detección de incendios
              </Button>
            </div>
          </div>
        </Card>
      )}
    </>
  )
}
