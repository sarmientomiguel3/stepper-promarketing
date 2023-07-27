import React from 'react';
import type { StoryObj } from '@storybook/react';
import { StepState } from './../../../components/modules/steps/StepState';
import { StepperProvider } from './../../../contexts/StepperContext/StepperProvider';

const meta = {
  title: 'Example/Step',
  component: StepState,
  decorators: [
    (Story: React.ReactNode) => {
      return (
        <StepperProvider value={{ activeStep: 0, maxStep: 4 }}>
          <Story />
        </StepperProvider>
      );
    },
  ],
  argTypes: {
    onClick: {
      action: 'clicked',
    },
    backgroundColor: { control: 'color' },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;
export const Primero: Story = {
  args: {
    index: 0,
  },
};
export const Segundo: Story = {
  args: {
    index: 1,
  },
};
export const Tercero: Story = {
  args: {
    index: 2,
  },
};
export const Cuarto: Story = {
  args: {
    index: 3,
  },
};
