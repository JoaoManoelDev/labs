import { ActionsTypes } from "./actions"

export interface CounterState {
  counter: number
}

export const counterReducer = (state: CounterState, dispatch: any) => {
  switch (dispatch.type) {

    case ActionsTypes.INCREASE_COUNTER:
      return { ...state, counter: state.counter + 1 }

    case ActionsTypes.DECREASE_COUNTER:
      return { ...state, counter: state.counter - 1 }

    case ActionsTypes.RESET_COUNTER:
      return { ...state, counter: state.counter = 0 }

    default:
      return state
  }
}
