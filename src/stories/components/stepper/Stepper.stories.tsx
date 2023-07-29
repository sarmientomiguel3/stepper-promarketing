import React from 'react';
import type { Meta } from '@storybook/react';
import { Stepper } from '@/components/templates/Stepper';
import { Step } from '@/components/modules/steps/Step';

const meta = {
  title: 'Components/Stepper',
  component: Stepper,
  tags: ['autodocs'],
} satisfies Meta<typeof Stepper>;

export default meta;
//type Story = StoryObj<typeof Stepper>;

export const StepperPage = () => {
  const [activeStep, setActiveStep] = React.useState<number>(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);

  console.log('es ultimo?', isLastStep);
  console.log('es primero?', isFirstStep);

  //const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  //const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);
  return (
    <div className="w-full px-8 py-4">
      <Stepper
        activeStep={activeStep}
        isLastStep={(value) => setIsLastStep(value)}
        isFirstStep={(value) => setIsFirstStep(value)}
      >
        <Step onClick={() => setActiveStep(0)}>1</Step>
        <Step onClick={() => setActiveStep(1)}>2</Step>
        <Step onClick={() => setActiveStep(2)}>3</Step>
        <Step onClick={() => setActiveStep(3)}>4</Step>
      </Stepper>
    </div>
  );
};
