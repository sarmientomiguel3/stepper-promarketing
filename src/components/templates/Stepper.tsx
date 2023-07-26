import React, { ReactElement } from 'react';
import { StepperProvider } from '@/contexts/StepperContext/StepperProvider';
import type { StateStepper } from '@/types/stepper';

interface PropsSteeper {
  activeStep: number;
  isLastStep: (value: boolean) => void;
  isFirstStep: (value: boolean) => void;
  children: ReactElement[];
}

const Stepper = (props: PropsSteeper) => {
  const value: StateStepper = {
    activeStep: props.activeStep,
    maxStep: React.Children.count(props.children),
  };
  const isLast = props.activeStep === React.Children.count(props.children) - 1;
  const isFirst = props.activeStep === 0;
  props.isLastStep(isLast);
  props.isFirstStep(isFirst);

  return (
    <StepperProvider value={value}>
      {React.Children.map(
        props.children,
        (child, index: number) =>
          child && React.cloneElement(child, { index: index }),
      )}
    </StepperProvider>
  );
};

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

export { Stepper };
