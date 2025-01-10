import type { Meta, StoryObj } from '@storybook/react';

import BracketMatchup from '../components/BracketMatchup';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Component/BracketMatchup',
  component: BracketMatchup,
  tags: ['autodocs'],
  args: { },
} satisfies Meta<typeof BracketMatchup>;

export default meta;
type Story = StoryObj<typeof BracketMatchup>;

export const Primary: Story = {
  args: {
    team1: 'Team 1',
    team2: 'Team 2',
    winner: {
      team1: 'Team 1',
      team2: 'Team 2',
      winner: null,
    }
  },
};
