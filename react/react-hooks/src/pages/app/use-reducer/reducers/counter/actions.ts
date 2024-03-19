export enum ActionsTypes {
  INCREASE_COUNTER  = "INCREASE_COUNTER",
  DECREASE_COUNTER = "DECREASE_COUNTER",
  RESET_COUNTER = "RESET_COUNTER"
}

export const increaseCounter = () => {
  return { type: ActionsTypes.INCREASE_COUNTER }
}

export const decreaseCounter = () => {
  return { type: ActionsTypes.DECREASE_COUNTER }
}

export const resetCounter = () => {
  return { type: ActionsTypes.RESET_COUNTER }
}
