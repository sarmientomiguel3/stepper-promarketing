import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Step } from './../../../components/modules/steps/Step';
import { StepperProvider } from './../../../contexts/StepperContext/StepperProvider';

type StoryContext = StoryObj<typeof Step>;
const meta = {
  title: 'Components/Step',
  component: Step,
  tags: ['autodocs'],
  decorators: [
    (Story: StoryContext) => {
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
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Step>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primero = {
  args: {
    index: 0,
    children: 1,
  },
} satisfies Story;

export const Segundo = {
  args: {
    index: 1,
    children: 2,
  },
} satisfies Story;
export const Tercero = {
  args: {
    index: 2,
    children: 3,
  },
} satisfies Story;
export const Cuarto = {
  args: {
    index: 3,
    children: 4,
  },
} satisfies Story;
