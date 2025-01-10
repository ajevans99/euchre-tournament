import type { Meta, StoryObj } from '@storybook/react';

import Modal from '../components/Modal';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Component/Modal',
  component: Modal,
  tags: ['autodocs'],
  args: { },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
  args: {
    title: 'Modal Title',
    children: 'Modal Content',
  },
};
