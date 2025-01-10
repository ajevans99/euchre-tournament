import type { Meta, StoryObj } from '@storybook/react';

import BracketMatchup, { Team } from '../components/BracketMatchup';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Component/BracketMatchup',
  component: BracketMatchup,
  tags: ['autodocs'],
  args: { },
} satisfies Meta<typeof BracketMatchup>;

export default meta;
type Story = StoryObj<typeof BracketMatchup>;

const matchup0 = <BracketMatchup team1={<Team name="Team 3" />} team2={<Team name="Team 5" />} winner={<Team name="Team 3" />} />;
const matchup1 = <BracketMatchup team1={<Team name="Team 1" />} team2={<Team name="Team 2" />} winner={<Team name="Team 2" />} />;
const matchup2 = <BracketMatchup team1={matchup0} team2={<Team name="Team 4" />} winner={<Team name="Team 3" />} />;


export const Primary: Story = {
  args: {
    team1: matchup1,
    team2: matchup2,
    winner: <Team name="Team 2" />
  },
};
