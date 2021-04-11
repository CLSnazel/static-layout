import React from 'react'
import { useResponsiveProps } from 'atomic-layout'

export default function PropControlledParagraph (props) {
  const { color } = useResponsiveProps(props)

  return (
    <p style={{ color }}>
      The current color is {color}.
    </p>
  )
}
