import React, { useState } from 'react'
import { useViewportChange } from 'atomic-layout'

export default function ScreenSizeHeading () {
  const [windowWidth, setWindowWidth] = useState(0)

  useViewportChange(() => {
    if (typeof document !== 'undefined') {
      setWindowWidth(window.innerWidth)
    }
  })

  return (
    <h2>
      The current screen size is: {windowWidth}px
    </h2>
  )
}
