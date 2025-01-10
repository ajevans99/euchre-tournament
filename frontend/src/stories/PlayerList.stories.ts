import type { Meta, StoryObj } from '@storybook/react';

import PlayerList from '../components/PlayerList';

const meta = {
  title: 'Component/PlayerList',
  component: PlayerList,
  tags: ['autodocs'],
  args: { },
} satisfies Meta<typeof PlayerList>;

export default meta;
type Story = StoryObj<typeof PlayerList>;

export const Primary: Story = {
  args: {
    players: ['Alice', 'Bob', 'Charlie', 'David'],
  },
};
