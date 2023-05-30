import React from 'react'

import Data from '../Db/Data'
import Pricingcard from './Pricingcard'


const Hero = () => {
  return (
 
   
    <>
    
    <div className='max-w-[1240px] mx-auto container py-10 px-4'>
        <div className=' flex flex-col justify-start space-y-2 items-start my-4 px-4 md:px-6 py-4 md:py-6'>
        <h1 className=' text-left text-2xl sm:text-3xl md:text-5xl font-semibold mb-2'>Pricing plans for teams of all sizes</h1>
        <p className=' max-w-[100%]  md:max-w-[90%] lg:max-w-[70%] text-[14px] md:text-lg font-serif font-medium leading-6 text-left text-slate-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quam eaque perspiciatis explicabo minima aliquid facilis! Animi soluta odit velit!</p>
        </div>
    </div>


  <div className='relative'>

      <div className="absolute inset-0 hidden lg:flex lg:flex-col">
          <div className=" flex-1"></div>
          <div className="bg-cyan-100 flex-1"></div>
      </div>
          <div className=' max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between items-stretch px-4 md:px-6 lg:px-10 py-10 gap-12 md:gap-6 lg:gap-8 relative'>
          
              {Data.map(item => (
                  <Pricingcard key={item.id} {...item} />
              ))}
          </div>
  </div>

    </>


  )
}

export default Hero