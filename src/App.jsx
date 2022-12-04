import React from 'react'
import { Navbar } from './components'
import {Route,Routes} from 'react-router-dom'
import { Home,Agenda,Faq,Conferences,Workshops,Sponsors } from './routes'

const App = () => {
  return (
    <div className='w-screen h-screen'>
      <Navbar/> 
      <main>
        <Routes>
          <Route element={<Home/>} path="/"/>
          <Route element={<Workshops/>} path="/workshops"/>
          <Route element={<Conferences/>} path="/conferences"/>
          <Route element={<Agenda/>} path="/agenda"/>
          <Route element={<Faq/>} path="/faq"/>
          <Route element={<Sponsors/>} path="/sponsors"/>
        </Routes>
      </main>  
    </div>
  )
}

export default App