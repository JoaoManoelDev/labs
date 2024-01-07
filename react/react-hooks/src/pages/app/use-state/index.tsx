import { useState } from "react"

import { Button } from "@/components/ui/button"

import reactLogo from "@/assets/react.svg"
import { cn } from "@/lib/utils"

export const UseStatePage = () => {
  console.log("[RENDERIZOU]")
  const [counter, setCounter] = useState(0) // Sempre inicializar o estado com um valor
  const [reverse, setReverse] = useState(false)

  const animateSpin = reverse ? "animate-spin-slow-reverse" : "animate-spin-slow"

  return (
    <div className="space-y-20 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-5">
        <h1 className="text-3xl font-bold tracking-tight">CONTADOR</h1>
        <p className="text-5xl font-bold">{counter}</p>

        <div className="flex gap-x-4">
          <Button className="rounded-full" size="icon" onClick={() => setCounter(counter -1)}>-</Button>
          <Button className="rounded-full" size="icon" onClick={() => setCounter(0)}>0</Button>
          <Button className="rounded-full" size="icon" onClick={() => setCounter(counter +1)}>+</Button>
        </div>
      </div>

      <div className="flex flex-col gap-y-5">
        <img
          src={reactLogo}
          alt="Logotipo do ReactJs"
          className={cn("h-24", animateSpin)}
        />

        <Button onClick={() => setReverse(!reverse)}>
          Reverso
        </Button>
      </div>
    </div>
  )
}
