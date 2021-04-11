import React from 'react'
import { useResponsiveValue } from 'atomic-layout'

export default function BreakpointNumbers () {
  const number = useResponsiveValue({ small: 0, medium: 1, large: 2 }, 0)

  return (
    <p>The current responsive number is: {number}</p>
  )
}
