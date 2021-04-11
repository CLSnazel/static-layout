import React from 'react'
import BreakpointNumbers from '../components/BreakpointNumbers'
import CurrentBreakpointHeading from '../components/CurrentBreakpointHeading'
import PropControlledParagraph from '../components/PropControlledParagraph'
import ScreenSizeHeading from '../components/ScreenSizeHeading'

export default () => (
  <div>
    <CurrentBreakpointHeading />
    <ScreenSizeHeading />
    <BreakpointNumbers />
    <PropControlledParagraph color='pink' colorMedium='gold' colorLarge='blue' />
  </div>
)
