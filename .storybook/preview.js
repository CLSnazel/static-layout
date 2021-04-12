import React, { useEffect } from 'react'
import Layout from 'atomic-layout'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import '../src/app.css'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: {
      mobile: INITIAL_VIEWPORTS.iphone6,
      tablet: INITIAL_VIEWPORTS.ipad12p,
      desktop: {
        name: 'desktop',
        styles: {
          height: '900px',
          width: '1440px'
        },
        type: 'desktop'
      }
    }
  }
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