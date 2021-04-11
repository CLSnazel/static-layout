import React from 'react'
import { makeResponsive } from 'atomic-layout'

const MadeResponsive = ({ color }) => {
  return (
    <h1 style={{ color }}>
      This the utilities page!
    </h1>
  )
}

export default makeResponsive(MadeResponsive)
