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
            <p>This paragraph is visible always</p>
          </Small>
          <Medium>
            <span>This is visible in medium and up</span>
          </Medium>
          <Large>
            <span>This is visible in the large screen and up</span>
          </Large>
        </>
      )}
    </Composition>
  )
}
