/// the usage of the query is commented out as it is breaking the whole website
import { query } from 'atomic-layout'


import React from 'react'
import styled from 'styled-components'
const BrokenDiv = styled.div`
@media ${query({ for: 'small' })} {
  background-color: pink;
}
@media ${query({ for: 'medium' })} {
  background-color: gold;
}
@media ${query({ for: 'large' })} {
  background-color: skyblue;
}

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
