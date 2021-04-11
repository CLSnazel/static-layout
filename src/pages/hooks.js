import React from 'react'
import BreakpointNumbers from '../components/BreakpointNumbers'
import CurrentBreakpointHeading from '../components/CurrentBreakpointHeading'
import MediaQueryParagraph from '../components/MediaQueryParagraph'
import PropControlledParagraph from '../components/PropControlledParagraph'
import ResponsiveQueryParagraph from '../components/ResponsiveQueryParagraph'
import ScreenSizeHeading from '../components/ScreenSizeHeading'

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
