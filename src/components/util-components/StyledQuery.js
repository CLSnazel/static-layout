import React from 'react'
import styled from 'styled-components'
import { query } from 'atomic-layout'

const Div = styled.div`
  @media ${query({ for: 'small' })} {
    background-color: pink;
  }
  @media ${query({ for: 'medium' })} {
    background-color: gold;
  }
  @media ${query({ for: 'large' })} {
    background-color: skyblue;
  }
`

export default function StyledQuery ({ children }) {
  return (
    <Div>
      {children}
    </Div>
  )
}
