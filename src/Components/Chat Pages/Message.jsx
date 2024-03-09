import img from './../../img.png'
import React from 'react'

export const Message = () => {
    return (
        <div className='flex gap-3 items-start'>
            <div className=' bg-blue-50 max-w-96 py-2 px-4 rounded-lg break-words'>
                hi 
            </div>
            <div>
                <div><img className='w-8 h-8 rounded-full' src={img} alt="" /></div>
                <p>date</p>
            </div>
        </div>
    )
}
