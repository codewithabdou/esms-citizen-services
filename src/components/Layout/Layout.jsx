import React from 'react'
import Navbar from './Navbar'

const layout = ({children,hasNavbar = true}) => {
  return (
    <div className="w-screen h-screen">
      { hasNavbar && <Navbar /> }
      <main>
        {children}
      </main>
    </div>
  )
}

export default layout