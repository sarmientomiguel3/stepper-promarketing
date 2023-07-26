interface StateStepper {
  activeStep: number;
  maxStep: number;
}

type ActionStepper = { type: 'SET_ACTIVE_STEP'; payload: number };

interface StepperContextType {
  state: StateStepper;
  dispatch: React.Dispatch<ActionStepper>;
}

interface StepperReducerType {
  state: StateStepper;
  action: ActionStepper;
}

export type {
  StateStepper,
  ActionStepper,
  StepperContextType,
  StepperReducerType,
};
