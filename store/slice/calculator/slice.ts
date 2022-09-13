import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CalculatorActionTypes, TCalculatorAction} from "./entities";
import { TCalculatorState } from "./types";

const initialState = {
  currentValue: "0",
  operator: null,
  previousValue: null
} as TCalculatorState

export const calculatorSlice = createSlice({
  name: 'calculatorSlice',
  initialState,
  reducers: {
    handleButton: (state: TCalculatorState, {payload}: PayloadAction<TCalculatorAction>) => {
      switch (payload.type) {
        case CalculatorActionTypes.Number:
          if (state.currentValue === "0") {
            state.currentValue = payload.value!
          } else {
            state.currentValue += `${payload.value}`
          }
          return;
        case CalculatorActionTypes.Operator:
          state.operator = payload.value!
          state.previousValue = state.currentValue
          state.currentValue = initialState.currentValue
          return;
        case CalculatorActionTypes.Equal:
          const {currentValue, previousValue, operator} = state;
          const current = parseFloat(currentValue)
          const previous = parseFloat(previousValue!)
          switch (operator) {
            case '+':
              return {
                ...initialState,
                currentValue: `${previous + current}`
              }
            case '-':
              return {
                ...initialState,
                currentValue: `${previous - current}`
              }
            case '*':
              return {
                ...initialState,
                currentValue: `${previous * current}`
              }
            case '/':
              return {
                ...initialState,
                currentValue: `${previous / current}`
              }
          }
          return;
        case CalculatorActionTypes.Clear:
          return initialState;
        case CalculatorActionTypes.Reverse:
          state.currentValue = `${parseFloat(state.currentValue) * (-1)}`
          return;
        case CalculatorActionTypes.Percentage:
          state.currentValue = `${parseFloat(state.currentValue) * (0.01)}`
          return;
      }
    }
  },
})

export const calculatorReducer = calculatorSlice.reducer
export const {handleButton} = calculatorSlice.actions