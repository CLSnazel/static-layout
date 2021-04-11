import React from 'react'
import BreakpointNumbers from '../components/hook-components/BreakpointNumbers'
import CurrentBreakpointHeading from '../components/hook-components/CurrentBreakpointHeading'
import MediaQueryParagraph from '../components/hook-components/MediaQueryParagraph'
import PropControlledParagraph from '../components/hook-components/PropControlledParagraph'
import ResponsiveQueryParagraph from '../components/hook-components/ResponsiveQueryParagraph'
import ScreenSizeHeading from '../components/hook-components/ScreenSizeHeading'

export default function Hooks () {
  return (
    <div>
      <CurrentBreakpointHeading />
      <ScreenSizeHeading />
      <BreakpointNumbers />
      <PropControlledParagraph color='pink' colorMedium='gold' colorLarge='blue' />
      <ResponsiveQueryParagraph />
      <MediaQueryParagraph />
    </div>
  )
}
