import type { Meta, StoryObj } from '@storybook/react';

import { FontStep } from './../../../components/elements/fonts/FontStep';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof FontStep> = {
  title: 'Elements/FontStep',
  component: FontStep,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof FontStep>;

export const Default: Story = {
  args: {
    state: 'default',
    isLast: true,
    children: 44,
  },
};

export const Active: Story = {
  args: {
    state: 'active',
    isLast: true,
    children: 44,
  },
};

export const Inactive: Story = {
  args: {
    state: 'inactive',
    isLast: true,
    children: 44,
  },
};
