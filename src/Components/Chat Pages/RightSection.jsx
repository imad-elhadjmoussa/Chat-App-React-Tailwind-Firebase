import React from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import VideocamIcon from '@mui/icons-material/Videocam';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SendIcon from '@mui/icons-material/Send';
import { Button, } from '@mui/material'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import img from './../../img.png'
import { Message } from './Message';

export const RightSection = () => {
    return (
        <div className=' relative w-full  '>
            <div className='flex justify-between items-center h-16 shadow-lg bg-blue-100 px-3 py-4  '>
                <div className='flex gap-2 items-center'>
                    <div><img className='w-9 h-9 rounded-full' src={img} alt="" /></div>
                    <p className=' text-slate-600 text-lg font-bold' >Tyler</p>
                </div>
                <div className='flex gap-5' >
                    <PersonAddIcon style={{ cursor: 'pointer' }} />
                    <VideocamIcon style={{ cursor: 'pointer' }} />
                    <MoreHorizIcon style={{ cursor: 'pointer' }} />
                </div>
            </div>

            <div className=' p-3 flex  flex-col items-end gap-4  h-3/4 overflow-y-scroll'>
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message/>

            </div>

            <div className='flex absolute bottom-0 right-0 left-0  rounded-br-lg   justify-between gap-3 p-3  ' >
                <input type="text" placeholder='Send message' className=' rounded-full pl-4 py-2 bg-gray-100 w-full outline-none ' />
                <div className='flex gap-5 items-center'>
                    <AttachFileIcon style={{ cursor: 'pointer' }} />
                    <AddPhotoAlternateIcon style={{ cursor: 'pointer' }} />
                    <SendIcon style={{ cursor: 'pointer' }} />

                </div>
            </div>


        </div>
    )
}
