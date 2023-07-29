import React from 'react';
import type { Meta, StoryObj, Story } from '@storybook/react';
import { Step } from './../../../components/modules/steps/Step';
import { StepperProvider } from './../../../contexts/StepperContext/StepperProvider';

const meta = {
  title: 'Components/Step',
  component: Step,
  tags: ['autodocs'],
  decorators: [
    (Story: Story) => {
      return (
        <StepperProvider value={{ activeStep: 3, maxStep: 4 }}>
          <Story />
        </StepperProvider>
      );
    },
  ],
  argTypes: {
    onClick: {
      action: 'clicked',
    },
  },
} satisfies Meta<typeof Step>;

export default meta;

type StoryContext = StoryObj<typeof meta>;

export const Primero = {
  args: {
    index: 0,
    children: 1,
  },
} satisfies StoryContext;

export const Segundo = {
  args: {
    index: 1,
    children: 2,
  },
} satisfies StoryContext;
export const Tercero = {
  args: {
    index: 2,
    children: 3,
  },
} satisfies StoryContext;
export const Cuarto = {
  args: {
    index: 3,
    children: 4,
  },
} satisfies StoryContext;
