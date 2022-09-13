import {TState} from "../../configureStore";
import {createSelector} from "@reduxjs/toolkit";

export const getCalculatorSliceStore = (state: TState) => state.handleButton;

export const getCurrentValue = createSelector(getCalculatorSliceStore, ({currentValue}) => currentValue)
export const getPreviousValue = createSelector(getCalculatorSliceStore, ({previousValue}) => previousValue)
export const getOperator = createSelector(getCalculatorSliceStore, ({operator}) => operator)
