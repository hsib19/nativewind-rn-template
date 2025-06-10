import { Meta, StoryObj } from '@storybook/react-native';
import { Avatar } from '../../src/components/Avatar';

const meta: Meta<typeof Avatar> = {
    title: 'Components/Avatar',
    component: Avatar,
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
    args: {
        source: { uri: 'https://randomuser.me/api/portraits/men/32.jpg' },
        alt: 'User Avatar',
        size: 64,
        rounded: 'full',
    },
};

export const SmallRoundedMd: Story = {
    args: {
        source: { uri: 'https://randomuser.me/api/portraits/women/44.jpg' },
        alt: 'Small Rounded Avatar',
        size: 40,
        rounded: 'md',
    },
};

export const Loading: Story = {
    args: {
        loading: true,
        size: 64,
        rounded: 'full',
    },
};

export const FallbackInitials: Story = {
    args: {
        fallbackInitials: 'JS',
        size: 64,
        rounded: 'lg',
    },
};
