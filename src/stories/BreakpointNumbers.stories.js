import React from 'react'
import BreakpointNumbers from '../components/hook-components/BreakpointNumbers'
export default {
  title: 'components/BreakpointNumbers',
  component: BreakpointNumbers,
  decorators: []
}

const Template = (args) => <BreakpointNumbers {...args} />

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
