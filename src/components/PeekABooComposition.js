import React from 'react'
import { Composition } from 'atomic-layout'

const areas = `
  small
`

const areasMedium = `
  small
  medium
`

const areasLarge = `
  small
  medium large
`
export default function PeekABooComposition () {
  return (
    <Composition
      areas={areas}
      areasMedium={areasMedium}
      areasLarge={areasLarge}
    >
      {({ Small, Medium, Large }) => (
        <>
          <Small>
            <p>Peek</p>
          </Small>
          <Medium>
            <span>A</span>
          </Medium>
          <Large>
            <span>Boo</span>
          </Large>
        </>
      )}
    </Composition>
  )
}
