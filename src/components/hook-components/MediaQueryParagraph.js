import React from 'react'
import { useMediaQuery } from 'atomic-layout'

const ResponsiveElement = ({ inSmallRange, inMediumRange, inLargeRange, children }) => (
  <>
    {inSmallRange && <strong>{children}</strong>}
    {inMediumRange && <em>{children}</em>}
    {inLargeRange && children}
  </>
)

export default function MediaQueryParagraph () {
  const inSmallRange = useMediaQuery({ maxWidth: 767 })
  const inMediumRange = useMediaQuery({ minWidth: 768, maxWidth: 1339 })
  const inLargeRange = useMediaQuery({ minWidth: 1440 })

  return (
    <p>
      This element is
      <ResponsiveElement
        inSmallRange={inSmallRange}
        inMediumRange={inMediumRange}
        inLargeRange={inLargeRange}
      >
        {' special'}
      </ResponsiveElement>
    </p>
  )
}
