import React from 'react'
import { Visible } from 'atomic-layout'

export function VisibleSmall () {
  return (
    <Visible for='small'>
      <p>Visible on small screens</p>
    </Visible>
  )
}

export function VisibleMedium () {
  return (
    <Visible for='medium'>
      <p>Visible on medium screens</p>
    </Visible>
  )
}

export function VisibleLarge () {
  return (
    <Visible for='large'>
      <p>Visible on large screens</p>
    </Visible>
  )
}

export default function VisibleLayout () {
  return (
    <div>
      <VisibleSmall />
      <VisibleMedium />
      <VisibleLarge />
    </div>
  )
}
