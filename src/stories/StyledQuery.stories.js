// this story is written, but the atomic-layout utility featured in this component
// is currently commented out as it breaks react-static

import React from 'react'
import StyledQuery from '../components/util-components/StyledQuery'
export default {
  title: 'components/StyledQuery',
  component: StyledQuery,
  decorators: []
}

const Template = (args) => <StyledQuery {...args} style={{ width: '100%', height: '100vh' }} />

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
