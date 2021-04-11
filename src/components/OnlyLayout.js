import React from 'react'
import { Only } from 'atomic-layout'

export function OnlySmall () {
  return (
    <Only to='medium'>
      <p>Only seen on small screens</p>
    </Only>
  )
}

export function OnlyMedium () {
  return (
    <Only from='medium' to='large'>
      <p>Only seen on medium screens</p>
    </Only>
  )
}

export function OnlyLarge () {
  return (
    <Only from='large'>
      <p>Only seen on large screens</p>
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
