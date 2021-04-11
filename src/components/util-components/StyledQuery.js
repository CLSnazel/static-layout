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
`

export default function StyledQuery (props) {
  return (
    <BrokenDiv>
      {props.children}
    </BrokenDiv>
  )
}
