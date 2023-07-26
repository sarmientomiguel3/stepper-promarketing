import React, {ReactNode, createContext, useState} from 'react'
import { StepperProvider } from '@/contexts/StepperContext/StepperProvider';
import type { StateStepper } from '@/types/stepper';

interface PropsSteeper{
  activeStep: number;
  isLastStep: (value:any)=>void;
  isFirstStep: (value:any)=>void;
  children: ReactNode;
}

const Stepper = (props: PropsSteeper) => {
  const value:StateStepper = {
    activeStep: props.activeStep,
    maxStep: React.Children.count(props.children)
  }
  return (
    <StepperProvider value={value}>
      {
        React.Children.map(props.children, (child:any, index: number) =>
          React.cloneElement(child, {index: index})
        )
      }
    </StepperProvider>
  )
}

//const Stepper = (props: PropsSteeper) => {
//return (
//<StepperProvider initialState={{activeStep: props.activeStep}}>
//{
//React.Children.map(props.children, (child:any, index: number) =>
//React.cloneElement(child, {index})
//)
//}
//</StepperProvider>
//)
//}

export { Stepper }

