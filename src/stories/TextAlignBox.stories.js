import React from 'react'
import TextAlignBox from '../components/TextAlignBox'
export default {
  title: 'components/TextAlignBox',
  component: TextAlignBox,
  decorators: []
}

const Template = (args) => <TextAlignBox {...args} />

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
