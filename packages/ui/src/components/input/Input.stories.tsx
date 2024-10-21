import { useState } from 'react'
import { Meta, StoryObj } from '@storybook/react'

import Input from './Input'
import { colorPalette } from '../../styles'

const inputStateDecorator = (Story, context) => {
  const [inputValue, setInputValue] = useState<string>('')

  return (
    <Story
      {...context}
      args={{
        ...context.args,
        value: inputValue,
        onChange: (e) => setInputValue(e.target.value),
      }}
    />
  )
}

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  decorators: [inputStateDecorator],
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
      defaultValue: 'medium',
    },
    variant: {
      options: ['outlined', 'filled'],
      control: { type: 'radio' },
      defaultValue: 'outlined',
    },
    color: {
      options: Object.keys(colorPalette),
      control: { type: 'select' },
      defaultValue: 'gray',
    },
    error: { control: { type: 'object' } },
    width: { control: 'text' },
    prefix: { control: 'text' },
    suffix: { control: 'text' },
    label: { control: 'text', defaultValue: 'Label' },
    maxLength: { control: 'number' },
    borderRadius: {
      options: ['none', 'sm', 'md', 'lg', 'full'],
      control: { type: 'select' },
      defaultValue: 'md',
    },
    disabled: { control: 'boolean', defaultValue: false },
    readOnly: { control: 'boolean', defaultValue: false },
    showLength: { control: 'boolean', defaultValue: false },
  },
}

export default meta

type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {
    placeholder: 'Enter your text here...',
    label: 'Default Input',
    size: 'medium',
  },
}

export const WithError: Story = {
  args: {
    label: 'Error Input',
    placeholder: 'Enter your text here...',
    error: {
      status: 'error',
      message: 'This input is invalid.',
    },
  },
}

export const WithWarning: Story = {
  args: {
    label: 'Warning Input',
    placeholder: 'Enter your text here...',
    error: {
      status: 'warning',
      message: 'This is a warning message.',
    },
  },
}

export const WidthNumber: Story = {
  args: {
    label: 'Fixed Width Input',
    placeholder: 'Enter your text here...',
    width: 180,
  },
}

export const WidthString: Story = {
  args: {
    label: 'Full Width Input',
    placeholder: 'Enter your text here...',
    width: '100%',
  },
}

export const WithPrefix: Story = {
  args: {
    label: 'Input with Prefix',
    placeholder: 'Enter your text here...',
    prefix: '🔍',
  },
}

export const WithSuffix: Story = {
  args: {
    label: 'Input with Suffix',
    placeholder: 'Enter your text here...',
    suffix: '✔',
  },
}

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    placeholder: 'Enter your text here...',
    disabled: true,
  },
}

export const ReadOnly: Story = {
  args: {
    label: 'Read-Only Input',
    placeholder: 'Enter your text here...',
    readOnly: true,
  },
}

export const WithShowText: Story = {
  args: {
    label: 'Input with Max Length',
    placeholder: 'Enter your text here...',
    maxLength: 20,
    showLength: true,
  },
}

export const FilledSmall: Story = {
  args: {
    label: 'Small Filled Input',
    placeholder: 'Enter your text here...',
    variant: 'filled',
    size: 'small',
  },
}
