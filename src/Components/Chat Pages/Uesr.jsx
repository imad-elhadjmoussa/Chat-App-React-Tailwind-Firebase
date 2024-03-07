import React from 'react'
import img from './../../img.png'

export const Uesr = () => {
    return (
        <div className=' cursor-pointer flex gap-3 items-center '>
            <div className='' >
                <img className='w-12 h-12 rounded-full' src={img} alt="" />
            </div>
            <div className='flex flex-col' >
                <h3 className='font-bold text-gray-600 '>
                    Tyler
                </h3>
                <p className='text-gray-500'>Okey Thank you</p>
            </div>
        </div>
    )
}
