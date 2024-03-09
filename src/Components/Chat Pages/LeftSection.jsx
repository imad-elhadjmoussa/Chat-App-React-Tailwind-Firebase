import React from 'react'
import { Uesr } from './Uesr'
import img from './../../img.png'
import LogoutIcon from '@mui/icons-material/Logout';


export const LeftSection = () => {
    return (
        <div className='bg-blue-100 h-screen hidden sm:block ' >
            <div className='flex justify-between md:w-80 w-72 px-3 items-center h-16  py-3  bg-blue-950 '>
                <h1 className='font-bold text-lg text-white ' >Chat App</h1>
                <div className='flex items-center gap-2 '>
                    <LogoutIcon style={{ color: 'white', cursor: 'pointer' }} />
                </div>
            </div>
            <div className='p-3 shadow-sm'>
                <input type="text" className='w-full px-4 outline-none rounded-full bg-slate-100 py-2 text-gray-900' placeholder='Find Users' />
            </div>
            <div className='flex  flex-col  gap-5 p-3 overflow-y-scroll h-3/4 ' >
                <Uesr />
                <Uesr />
                <Uesr />
                <Uesr />
                <Uesr />
                <Uesr />
                <Uesr />
                <Uesr />

            </div>
        </div>
    )
}
