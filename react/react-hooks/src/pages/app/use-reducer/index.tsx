import { useReducer } from "react"

import { Button } from "@/components/ui/button"

import { counterReducer } from "./reducers/counter/reducer"
import {
  decreaseCounter,
  increaseCounter,
  resetCounter
} from "./reducers/counter/actions"

export const UseReducerPage = () => {
  const [state, dispatch] = useReducer(counterReducer, {
    counter: 0,
  })

  const handleIncreaseCounter = () => {
    dispatch(increaseCounter())
  }

  const handleDecreaseCounter = () => {
    dispatch(decreaseCounter())
  }

  const handleResetCounter = () => {
    dispatch(resetCounter())
  }

  return (
    <div className="space-y-20 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-5">
        <h1 className="text-3xl font-bold tracking-tight">CONTADOR</h1>
        <p className="text-5xl font-bold">{state.counter}</p>

        <div className="flex gap-x-4">
          <Button className="rounded-full" size="icon" onClick={handleDecreaseCounter}>-</Button>
          <Button className="rounded-full" size="icon" onClick={handleResetCounter}>0</Button>
          <Button className="rounded-full" size="icon" onClick={handleIncreaseCounter}>+</Button>
        </div>
      </div>
    </div>
  )
}
