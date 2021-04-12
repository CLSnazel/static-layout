import React, { useEffect } from 'react'
import Layout from 'atomic-layout'
import '../src/app.css'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const breakpoints = {
  small: {
    minWidth: 0,
    maxWidth: 767
  },
  medium: {
    minWidth: 768,
    maxWidth: 1339
  },
  large: {
    minWidth: 1440
  }
}

export const decorators = [
  (Story) => {
    useEffect(() => {
      Layout.configure({
        breakpoints,
        defaultBreakpointName: 'small'
      })
      console.log(Layout);
    }, [])
    return (
      <Story />
    )
  }
]