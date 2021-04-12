import React from 'react'
import PeekABooComposition from '../components/PeekABooComposition'
export default {
  title: 'components/PeekABooComposition',
  component: PeekABooComposition,
  decorators: []
}

const Template = (args) => <PeekABooComposition {...args} />

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
