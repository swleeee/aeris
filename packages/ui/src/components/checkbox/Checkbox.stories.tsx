import { useState } from 'react'
import { Meta, StoryObj } from '@storybook/react'

import Checkbox from './Checkbox'
import CheckboxGroup from './CheckboxGroup'
import { SelectedStarIcon, UnselectedStarIcon } from '../icon'
import { colorPalette } from '../../styles/colors'

const checkboxStateDecorator = (Story, context) => {
  const [isChecked, setIsChecked] = useState(false)

  const args = {
    ...context.args,
    ...(context.args.checked === undefined && {
      defaultChecked: context.args.defaultChecked,
    }),
    ...(context.args.checked !== undefined && {
      checked: context.args.checked || isChecked,
      onChange: context.args.checked
        ? undefined
        : (e) => setIsChecked(e.target.checked),
    }),
  }

  return <Story {...context} args={args} />
}

const meta: Meta<typeof Checkbox | typeof CheckboxGroup> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  subcomponents: { CheckboxGroup },
  decorators: [checkboxStateDecorator],
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'radio' },
      defaultValue: 'md',
    },
    color: {
      options: Object.keys(colorPalette),
      control: { type: 'select' },
      defaultValue: 'blue',
    },
    disabled: { control: 'boolean', defaultValue: false },
    indeterminate: { control: 'boolean', defaultValue: false },
    borderRadius: {
      options: ['none', 'sm', 'md', 'lg', 'full'],
      control: { type: 'select' },
      defaultValue: 'md',
    },
    label: { control: 'text', defaultValue: 'Select a option' },
    icon: { options: ['star', 'circle'], control: { type: 'radio' } },
    checkedIcon: {
      options: ['filledStar', 'filledCircle'],
      control: { type: 'radio' },
    },
    direction: {
      options: ['horizontal', 'vertical'],
      control: { type: 'radio' },
      defaultValue: 'vertical',
      description: 'CheckboxGroup direction',
      table: { category: 'CheckboxGroup' },
    },
  },
}

export default meta

type Story = StoryObj<typeof Checkbox>

const iconOptions = {
  star: <UnselectedStarIcon />,
  circle: (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
}

const checkedIconOptions = {
  filledStar: <SelectedStarIcon />,
  filledCircle: (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="10" fill="currentColor" />
    </svg>
  ),
}

export const Default: Story = {
  render: (args) => (
    <>
      <Checkbox {...args} />
      <Checkbox {...args} label="With Label Checkbox" />
    </>
  ),
}

export const Disabled: Story = {
  args: {
    label: 'Disabled Checkbox',
    disabled: true,
  },
}

export const DisabledChecked: Story = {
  args: {
    label: 'Disabled and Checked Checkbox',
    disabled: true,
    checked: true,
  },
}

export const Sizes: Story = {
  render: (args) => (
    <>
      <Checkbox {...args} size="sm" label="Small Size" />
      <Checkbox {...args} size="md" label="Medium Size" />
      <Checkbox {...args} size="lg" label="Large Size" />
    </>
  ),
  args: { label: 'Checkbox with Sizes' },
}

export const Indeterminate: Story = {
  args: {
    label: 'Indeterminate Checkbox',
    indeterminate: true,
  },
}

export const Colored: Story = {
  render: (args) => (
    <>
      <Checkbox {...args} color="blue" label="Blue Color" />
      <Checkbox {...args} color="green" label="Green Color" />
      <Checkbox {...args} color="purple" label="Purple Color" />
    </>
  ),
  args: { label: 'Colored Checkbox' },
}

export const WithBorderRadius: Story = {
  render: (args) => (
    <>
      <Checkbox {...args} borderRadius="none" label="None border-radius" />
      <Checkbox {...args} borderRadius="sm" label="Small border-radius" />
      <Checkbox {...args} borderRadius="md" label="Medium border-radius" />
      <Checkbox {...args} borderRadius="lg" label="Large border-radius" />
      <Checkbox {...args} borderRadius="full" label="Full border-radius" />
    </>
  ),
  args: { label: 'Checkbox with Border Radius' },
}

export const WithCustomIcons: Story = {
  args: {
    label: 'Custom Icon Checkbox',
    icon: iconOptions['star'],
    checkedIcon: checkedIconOptions['filledStar'],
  },
  render: (args) => (
    <Checkbox
      {...args}
      icon={iconOptions[args.icon as keyof typeof iconOptions]}
      checkedIcon={
        checkedIconOptions[args.checkedIcon as keyof typeof checkedIconOptions]
      }
    />
  ),
}

type CheckboxGroupStory = StoryObj<typeof CheckboxGroup>

export const DefaultCheckboxGroup: CheckboxGroupStory = {
  args: {
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ],
    direction: 'vertical',
  },
  render: (args) => (
    <CheckboxGroup {...args} onChange={(values) => console.log(values)} />
  ),
}

export const HorizontalCheckboxGroup: CheckboxGroupStory = {
  args: { ...DefaultCheckboxGroup.args, direction: 'horizontal' },
  render: (args) => <CheckboxGroup {...args} />,
}

export const DisabledCheckboxGroup: CheckboxGroupStory = {
  args: { ...DefaultCheckboxGroup.args, disabled: true },
  render: (args) => <CheckboxGroup {...args} />,
}

export const PreselectedCheckboxGroup: CheckboxGroupStory = {
  args: { ...DefaultCheckboxGroup.args, value: ['option1', 'option3'] },
  render: (args) => <CheckboxGroup {...args} />,
}

export const CheckboxGroupWithCustomSize: CheckboxGroupStory = {
  args: { ...DefaultCheckboxGroup.args },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', rowGap: '1rem' }}>
      <CheckboxGroup {...args} size="sm" />
      <CheckboxGroup {...args} size="md" />
      <CheckboxGroup {...args} size="lg" />
    </div>
  ),
}
