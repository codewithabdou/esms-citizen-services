import React from 'react'
import IMAGES from '../constants/images'

const Sponsors = () => {
  return (
    <div className="flex h-[90vh] w-full flex-col">
      <h1 className="my-5  h-[10%] self-center font-title text-3xl drop-shadow-3xl md:text-4xl lg:text-6xl">
        Sponsors
      </h1>
      <div className='px-5 h-[90%] grid grid-rows-3 justify-items-center items-center w-full'>
        <div className='grid grid-cols-2 row-span-1 justify-items-center items-center gap-x-20 w-full'>
          <img src={IMAGES.CEVITAL} alt="" className='h-20 object-contain rounded-xl border-black drop-shadow-3xl border-2' />
          <img src={IMAGES.YASSIR} alt="" className='h-20 object-contain rounded-xl border-black drop-shadow-3xl border-2'/>

        </div>
        <div className='row-span-1 w-full flex justify-center items-center'>
        <img src={IMAGES.SAA} alt="" className='h-32 object-contain rounded-xl border-black drop-shadow-3xl border-2'/>
        </div>
        <div className='grid grid-cols-2 row-span-1 justify-items-center items-center w-full'>
          <img src={IMAGES.ETUSA} alt="" className='h-32  object-contain rounded-xl border-black drop-shadow-3xl border-2'/>
          <img src={IMAGES.SONALGAZ} alt="" className='h-32  object-contain rounded-xl border-black drop-shadow-3xl border-2'/>
        </div>

      </div>

    </div>
  )
}

export default Sponsors