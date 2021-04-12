import React from 'react'
import { Only } from 'atomic-layout'

export function OnlySmall () {
  return (
    <Only for='small'>
      <p id='only'>Only seen on small screens</p>
    </Only>
  )
}

export function OnlyMedium () {
  return (
    <Only for='medium'>
      <p id='only'>Only seen on medium screens</p>
    </Only>
  )
}

export function OnlyLarge () {
  return (
    <Only for='large'>
      <p id='only'>Only seen on large screens</p>
    </Only>
  )
}

export default function OnlyLayout () {
  return (
    <div>
      <OnlySmall />
      <OnlyMedium />
      <OnlyLarge />
    </div>
  )
}
