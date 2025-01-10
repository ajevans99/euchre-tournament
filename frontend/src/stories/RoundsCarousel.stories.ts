import type { Meta, StoryObj } from '@storybook/react';

import RoundsCarousel from '../components/RoundsCarousel';

const meta = {
  title: 'Component/RoundsCarousel',
  component: RoundsCarousel,
  tags: ['autodocs'],
  args: { },
} satisfies Meta<typeof RoundsCarousel>;

export default meta;
type Story = StoryObj<typeof RoundsCarousel>;

export const Primary: Story = {
  args: {
    rounds: [
      [
        { team1: { players: ["Alice", "Bob"] }, team2: { players: ["Carol", "Dave"] }, tableNumber: 1 },
        { team1: { players: ["Eve", "Frank"] }, team2: { players: ["Grace", "Hank"] }, tableNumber: 2 },
        { team1: { players: ["Ivy", "Jack"] }, team2: { players: ["Kate", "Liam"] }, tableNumber: 3 },
      ],
      [
        { team1: { players: ["Alice", "Frank"] }, team2: { players: ["Carol", "Grace"] }, tableNumber: 1 },
        { team1: { players: ["Bob", "Eve"] }, team2: { players: ["Dave", "Hank"] }, tableNumber: 2 },
      ],
      [
        { team1: { players: ["Alice", "Hank"] }, team2: { players: ["Bob", "Grace"] }, tableNumber: 1 },
        { team1: { players: ["Eve", "Dave"] }, team2: { players: ["Frank", "Carol"] }, tableNumber: 2 },
      ],
    ]
  },
};
