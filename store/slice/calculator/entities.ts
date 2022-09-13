export enum CalculatorActionTypes {
  Number = 'number',
  Operator = 'operator',
  Percentage = 'percentage',
  Clear = 'clear',
  Equal = 'equal',
  Reverse = 'reverse',
}

export type TCalculatorAction = {
  type: CalculatorActionTypes,
  value?: string,
}