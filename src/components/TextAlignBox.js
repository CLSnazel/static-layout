import React from 'react'
import { Box } from 'atomic-layout'

export default function TextAlignBox () {
  return (
    <Box marginLeft='1em' marginLeftMedium='10em' marginLeftLarge='30em'>
      <p>This margin shifts based on the screen size!</p>
    </Box>
  )
}
