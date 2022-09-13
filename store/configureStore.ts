import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {CalculatorSlice} from "./slice";

const rootReducer = combineReducers({
  handleButton: CalculatorSlice.calculatorReducer
})

export const store = configureStore({
  reducer: rootReducer
})

export type TState = ReturnType<typeof store.getState>