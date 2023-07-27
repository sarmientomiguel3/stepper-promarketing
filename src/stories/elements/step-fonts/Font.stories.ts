import type { Meta, StoryObj } from '@storybook/react';

import { FontStep } from './../../../components/elements/fonts/FontStep';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Elements/FontStep',
  component: FontStep,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof FontStep>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

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
