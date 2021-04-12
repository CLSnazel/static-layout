import React from 'react'
import MediaQueryParagraph from '../components/hook-components/MediaQueryParagraph'
export default {
  title: 'components/MediaQueryParagraph',
  component: MediaQueryParagraph,
  decorators: []
}

const Template = (args) => <MediaQueryParagraph {...args} />

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
