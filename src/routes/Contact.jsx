import React from 'react'
import { Footer,Form } from '../components'

const Contact = () => {
  return (
    <div className="flex h-[90vh] w-full flex-col">
      <h1 className="my-5  h-[10%] self-center font-title text-3xl drop-shadow-3xl md:text-4xl lg:text-6xl">
        Contact Us
      </h1>
      <Form/>
      <Footer/>
      

    </div>  )
}

export default Contact