import React, { useState } from 'react'
import { useBreakpointChange } from 'atomic-layout'

export default function CurrentBreakpointHeading () {
  const [breakpointName, setBreakpointName] = useState('')

  useBreakpointChange((name) => {
    setBreakpointName(name)
  })

  return (
    <h1>
      The screen is currently displaying at the <strong>{breakpointName}</strong> breakpoint
    </h1>
  )
}
