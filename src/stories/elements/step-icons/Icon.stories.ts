import type { Meta, StoryObj } from '@storybook/react';

import { IconStep } from '@/components/elements/icons/IconStep';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof IconStep> = {
  title: 'Elements/IconStep',
  component: IconStep,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof IconStep>;

export const Default: Story = {
  args: {
    state: 'default',
    children: 1,
  },
};

export const Active: Story = {
  args: {
    state: 'active',
    children: 1,
  },
};

export const Inactive: Story = {
  args: {
    state: 'inactive',
    children: 1,
  },
};
