import React, { useEffect } from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
//
import { Link, Router } from 'components/Router'
import Dynamic from 'containers/Dynamic'

import './app.css'

import Layout from 'atomic-layout'
// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

const breakpoints = {
  small: {
    minWidth: 0,
    maxWidth: 767
  },
  medium: {
    minWidth: 768,
    maxWidth: 1339
  },
  large: {
    minWidth: 1440
  }
}

function App () {
  useEffect(() => {
    Layout.configure({
      breakpoints,
      defaultBreakpointName: 'small'
    })
  })
  return (
    <Root>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/blog'>Blog</Link>
        <Link to='/dynamic'>Dynamic</Link>
      </nav>
      <div className='content'>
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            <Dynamic path='dynamic' />
            <Routes path='*' />
          </Router>
        </React.Suspense>
      </div>
    </Root>
  )
}

export default App
