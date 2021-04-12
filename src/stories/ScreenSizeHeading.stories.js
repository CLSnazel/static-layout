import React from 'react'
import ScreenSizeHeading from '../components/hook-components/ScreenSizeHeading'
export default {
  title: 'components/ScreenSizeHeading',
  component: ScreenSizeHeading,
  decorators: []
}

const Template = (args) => <ScreenSizeHeading {...args} />

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
