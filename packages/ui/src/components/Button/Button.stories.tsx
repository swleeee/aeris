import { Meta, StoryObj } from '@storybook/react'
import Button from './Button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['solid', 'outlined', 'text', 'link', 'filled', 'round'],
      },
    },
    color: {
      control: {
        type: 'select',
        options: ['gray', 'red', 'green', 'blue', 'yellow', 'black', 'white'],
      },
    },
    leftIcon: { control: 'text' }, // TODO: 미리 정의된 아이콘 사용할 것
    rightIcon: { control: 'text' }, // TODO: 미리 정의된 아이콘 사용할 것
    disabled: { control: { type: 'boolean' }, defaultValue: false },
  },
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'solid',
    color: 'blue',
  },
}

export const OutlinedButton: Story = {
  args: {
    children: 'Outlined Button',
    variant: 'outlined',
    color: 'blue',
  },
}

export const WithIcon: Story = {
  args: {
    children: 'Button',
    rightIcon: <i className="icon" />,
    variant: 'outlined',
    color: 'green',
  },
}

export const LinkButton: Story = {
  args: {
    children: 'Go to Example',
    variant: 'link',
    href: 'https://google.com',
    color: 'blue',
  },
}
