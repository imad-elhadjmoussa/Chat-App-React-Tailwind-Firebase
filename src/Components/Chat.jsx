import React from 'react'
import { LeftSection } from './Chat Pages/LeftSection'
import { RightSection } from './Chat Pages/RightSection'

export const Chat = () => {
    return (
        <div className='flex w-screen h-screen shadow-lg '>
            <LeftSection/>
            <RightSection/>
        </div>
    )
}
