import React from 'react'
import OnlyLayout from '../components/OnlyLayout'
export default {
  title: 'components/OnlyLayout',
  component: OnlyLayout,
  decorators: []
}

const Template = (args) => <OnlyLayout {...args} />

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
