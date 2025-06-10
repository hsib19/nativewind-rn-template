import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';
import Button from '../../src/components/Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  args: {
    title: 'Click Me',
    variant: 'primary',
    loading: false,
    disabled: false,
    fullWidth: false,
    shadow: false,
    iconPosition: 'left',
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    title: 'Primary Button',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    title: 'Secondary Button',
    variant: 'secondary',
  },
};

export const Outline: Story = {
  args: {
    title: 'Outline Button',
    variant: 'outline',
  },
};

export const WithIconLeft: Story = {
  args: {
    title: 'Left Icon',
    variant: 'primary',
    iconType: 'Feather',
    iconName: 'arrow-left',
    iconSize: 20,
    iconPosition: 'left',
  },
};

export const WithIconRight: Story = {
  args: {
    title: 'Right Icon',
    variant: 'primary',
    iconType: 'Feather',
    iconName: 'arrow-right',
    iconSize: 20,
    iconPosition: 'right',
  },
};

export const RoundedFull: Story = {
  args: {
    title: 'Rounded Full',
    variant: 'primary',
    rounded: true,
  },
};

export const RoundedXl: Story = {
  args: {
    title: 'Rounded XL',
    variant: 'primary',
    rounded: 'xl',
  },
};

export const WithShadow: Story = {
  args: {
    title: 'With Shadow',
    variant: 'primary',
    shadow: true,
    shadowColor: '#000',
    shadowRadius: 6,
  },
};

export const Loading: Story = {
  args: {
    title: 'Loading...',
    loading: true,
  },
};

export const Disabled: Story = {
  args: {
    title: 'Disabled',
    disabled: true,
  },
};
