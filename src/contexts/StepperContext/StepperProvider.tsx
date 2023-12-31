import React, { createContext } from 'react';
import type { StateStepper } from '@/types/stepper';

interface PropsSteeperContext {
  children: React.ReactNode;
  value: StateStepper;
}

const StepperContext = createContext<StateStepper | null>(null);

const StepperProvider = (props: PropsSteeperContext) => {
  return (
    <StepperContext.Provider value={props.value}>
      <div className="relative flex flex-row">{props.children}</div>
    </StepperContext.Provider>
  );
};

export { StepperContext, StepperProvider };
