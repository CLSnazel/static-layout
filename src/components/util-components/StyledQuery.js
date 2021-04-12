/// the usage of the query is commented out as it is breaking the whole website

import React from 'react'
import styled from 'styled-components'
// import { query } from 'atomic-layout'

/* @media ${query({ for: 'small' })} {
  background-color: pink;
}
@media ${query({ for: 'medium' })} {
  background-color: gold;
}
@media ${query({ for: 'large' })} {
  background-color: skyblue;
} */
const BrokenDiv = styled.div`

  width: 100%;
  height: 100vh;
`

export default function StyledQuery (props) {
  return (
    <BrokenDiv>
      {props.children}
    </BrokenDiv>
  )
}
