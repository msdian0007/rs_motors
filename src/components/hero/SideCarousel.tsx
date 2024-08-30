import Image from 'next/image'
import React from 'react'

const SideCarousel = ({ link }: { link: string }) => {
    return (
        <div className='flex-center'>
            <div className="relative transition-all bg-dark overflow-auto w-[65vw] h-[65vw] sm:w-[15vw] sm:h-[15vw] rounded-full shadow-red">
                <Image
                    src={link}
                    fill
                    sizes=''
                    alt='latest-main-pic'
                    className='object-contain opacity-25'
                />
            </div>
        </div>
    )
}

export default SideCarousel