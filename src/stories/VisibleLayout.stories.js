import React from 'react'
import VisibleLayout from '../components/VisibleLayout'
export default {
  title: 'components/VisibleLayout',
  component: VisibleLayout,
  decorators: []
}

const Template = (args) => <VisibleLayout {...args} />

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
