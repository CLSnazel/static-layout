import React from 'react'
import CurrentBreakpointHeading from '../components/hook-components/CurrentBreakpointHeading'
export default {
  title: 'components/CurrentBreakpointHeading',
  component: CurrentBreakpointHeading,
  decorators: []
}

const Template = (args) => <CurrentBreakpointHeading {...args} />

export const Default = Template.bind({})
export const Mobile = Template.bind({})
