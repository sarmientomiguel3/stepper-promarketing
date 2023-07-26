import React, { createContext, useReducer } from 'react';
import { StepperReducer } from './StepperReducer';
import type { StateStepper, ActionStepper, StepperContextType } from '@/types/stepper';

interface PropsSteeperContext{
  children: React.ReactNode;
  value: StateStepper;
}

const StepperContext = createContext<StateStepper|null>(null);

const StepperProvider = (props:PropsSteeperContext) => {
  return (
    <StepperContext.Provider value={props.value}>
      {props.children}
    </StepperContext.Provider>
  );
};

export { StepperContext, StepperProvider };

