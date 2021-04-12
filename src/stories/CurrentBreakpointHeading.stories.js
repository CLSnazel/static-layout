import React from 'react'
import CurrentBreakpointHeading from '../components/hook-components/CurrentBreakpointHeading'
export default {
  title: 'components/CurrentBreakpointHeading',
  component: CurrentBreakpointHeading,
  decorators: []
}

const Template = (args) => <CurrentBreakpointHeading {...args} />

export const Desktop = Template.bind({})
Desktop.parameters = {
  viewport: {
    defaultViewport: 'desktop'
  }
}

export const Tablet = Template.bind({})
Tablet.parameters = {
  viewport: {
    defaultViewport: 'tablet'
  }
}

export const Mobile = Template.bind({})
Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile'
  }
}
