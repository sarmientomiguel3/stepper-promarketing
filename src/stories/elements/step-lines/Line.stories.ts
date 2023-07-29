import type { Meta, StoryObj } from '@storybook/react';

import { LineStep } from '@/components/elements/lines/LineStep';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof LineStep> = {
  title: 'Elements/LineStep',
  component: LineStep,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof LineStep>;

export const None: Story = {
  args: {
    label: 'LineStep',
    state: 'none',
  },
};

export const Active: Story = {
  args: {
    label: 'LineStep',
    state: 'active',
  },
};

export const Inactive: Story = {
  args: {
    label: 'LineStep',
    state: 'inactive',
  },
};
