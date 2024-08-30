import Image from 'next/image'
import React from 'react'
import MidCarousel from './MidCarousel'
import SideCarousel from './SideCarousel'
import Carousel from './Carousel'

const Hero = () => {
  return (
    <div className='flex-center h-[calc(100vh-50px)]'>
      <Carousel />
    </div>
  )
}

export default Hero