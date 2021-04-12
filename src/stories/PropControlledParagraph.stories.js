import React from 'react'
import PropControlledParagraph from '../components/hook-components/PropControlledParagraph'
export default {
  title: 'components/PropControlledParagraph',
  component: PropControlledParagraph,
  decorators: []
}

const Template = (args) => <PropControlledParagraph {...args} color='pink' colorMedium='gold' colorLarge='blue' />

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
