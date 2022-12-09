import React,{useEffect} from 'react'
import { Footer,Form } from '../components'

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0,0);
  }, []);
  return (
    <div className="flex h-[90vh] w-full flex-col">
      <h1 className="my-5 h-[10%] self-center font-title text-2xl drop-shadow-3xl md:text-3xl lg:text-5xl">
        Contact Us
      </h1>
      <Form/>
      <Footer/>
      

    </div>  )
}

export default Contact