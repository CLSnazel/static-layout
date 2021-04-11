import React from 'react'
import { useResponsiveQuery } from 'atomic-layout'

const ResponsiveElement = ({ inSmallRange, inMediumRange, inLargeRange, children }) => (
  <>
    {inSmallRange && <strong>{children}</strong>}
    {inMediumRange && <small>{children}</small>}
    {inLargeRange && children}
  </>
)

export default function ResponsiveQueryParagraph () {
  const inSmallRange = useResponsiveQuery({ for: 'small' })
  const inMediumRange = useResponsiveQuery({ from: 'medium', to: 'large' })
  const inLargeRange = useResponsiveQuery({ from: 'large' })

  return (
    <p>
      This element is
      <ResponsiveElement
        inSmallRange={inSmallRange}
        inMediumRange={inMediumRange}
        inLargeRange={inLargeRange}
      >
        {' unique'}
      </ResponsiveElement>
    </p>
  )
}
