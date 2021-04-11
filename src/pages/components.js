import React from 'react'
import OnlyLayout from '../components/OnlyLayout'
import PeekABooComposition from '../components/PeekABooComposition'
import TextAlignBox from '../components/TextAlignBox'
import VisibleLayout from '../components/VisibleLayout'

export default function Components () {
  return (
    <div>
      <TextAlignBox />
      <PeekABooComposition />
      <VisibleLayout />
      <OnlyLayout />
    </div>
  )
}
