import type { StateStepper, ActionStepper, StepperContextType , StepperReducerType } from '@/types/stepper';

const StepperReducer = (props:StepperReducerType) => {
  switch (props.action.type) {
    case 'SET_ACTIVE_STEP':
      return {...props.state, activeStep: props.action.payload};
    default:
      return props.state;
  }
}

export { StepperReducer }
