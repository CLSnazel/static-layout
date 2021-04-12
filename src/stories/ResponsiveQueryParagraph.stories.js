import React from 'react'
import ResponsiveQueryParagraph from '../components/hook-components/ResponsiveQueryParagraph'
export default {
  title: 'components/ResponsiveQueryParagraph',
  component: ResponsiveQueryParagraph,
  decorators: []
}

const Template = (args) => <ResponsiveQueryParagraph {...args} />

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
