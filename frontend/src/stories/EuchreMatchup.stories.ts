import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import EuchreMatchup from '../components/EuchreMatchup';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/EuchreMatchup',
  component: EuchreMatchup,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  args: { },
} satisfies Meta<typeof EuchreMatchup>;

export default meta;
type Story = StoryObj<typeof EuchreMatchup>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    matchup: { team1: { players: ['Alice', 'Bob'], isWinner: false }, team2: { players: ['Charlie', 'David'], isWinner: true }, tableNumber: 1 }
  },
};
