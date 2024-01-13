import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"

export const UseEffectPage = () => {
  const [counter, setCounter] = useState(0)
  const [change, setChange] = useState(0)

  console.log("[RENDERIZOU]")

  useEffect(() => {
    console.log("[CHAMOU O USE EFFECT]")
    setChange((prev) => prev + 1)
  }, [counter])

  return (
    <div className="space-y-20 flex flex-col items-center justify-center">
       <div className="flex flex-col items-center justify-center gap-5">
        <p className="text-3xl font-bold">Você clicou {counter} vez(es).</p>

        <div className="flex gap-x-4">
          <Button onClick={() => setCounter(counter +1)}>Click</Button>
        </div>

        <p className="font-bold">Use Effect foi chamado {change}</p>
      </div>
    </div>
  )
}
