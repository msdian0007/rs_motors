import { vehicles } from '@/constants'
import Image from 'next/image'
import React from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

type MidCarouselProps = {
    link: string,
    handleManually: (flag: string) => void
}

const MidCarousel = ({ link, handleManually }: MidCarouselProps) => {
    return (
        <div className='absolute flex flex-col items-center w-full h-full gap-6 justify-evenly'>
            <h1 className='py-2 text-2xl'>New Stock</h1>
            <div className='gap-10 flex-center'>
                <FaAngleLeft className='text-4xl cursor-pointer text-light hover:text-primary' onClick={() => handleManually('R')} />
                <div className="bg-dark relative cursor-pointer hover:scale-[1.02] transition ease-in-out delay-100 duration-150 overflow-auto w-[75vw] h-[75vw] sm:w-[30vw] sm:h-[30vw] rounded-full shadow-red__md">
                    <Image
                        src={link}
                        fill
                        alt='latest-main-pic'
                        className='object-contain'
                    />
                </div>
                <FaAngleRight className='text-4xl cursor-pointer text-light hover:text-primary' onClick={() => handleManually('F')} />
            </div>
            <div className='py-2 text-primary'>Company - Modal</div>
        </div>
    )
}

export default MidCarousel