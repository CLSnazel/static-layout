import React from 'react'
import { useResponsiveQuery } from 'atomic-layout'

const ResponsiveElement = ({ inSmallRange, inMediumRange, inLargeRange, children }) => (
  <>
    {inSmallRange && <strong>{children}</strong>}
    {inMediumRange && <em>{children}</em>}
    {inLargeRange && children}
  </>
)

export default function ResponsiveQueryParagraph () {
  const inSmallRange = useResponsiveQuery({ from: 'small', to: 'medium' })
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
