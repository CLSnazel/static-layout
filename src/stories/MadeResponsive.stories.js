import React from 'react'
import MadeResponsive from '../components/util-components/MadeResponsive'
export default {
  title: 'components/MadeResponsive',
  component: MadeResponsive,
  decorators: []
}

const Template = (args) => <MadeResponsive {...args} color='black' colorMedium='brown' colorLarge='blue' />

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
