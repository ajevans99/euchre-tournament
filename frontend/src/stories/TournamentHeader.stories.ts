import type { Meta, StoryObj } from '@storybook/react';

import TournamentHeader from '../components/TournamentHeader';

const meta = {
  title: 'Component/TournamentHeader',
  component: TournamentHeader,
  tags: ['autodocs'],
  args: { },
} satisfies Meta<typeof TournamentHeader>;

export default meta;
type Story = StoryObj<typeof TournamentHeader>;

export const Primary: Story = {
  args: {
    id: '1',
    name: 'Tournament Name',
    location: 'Tournament Location',
    dateTime: 'January 1, 2025 12:00 PM'
  },
};
