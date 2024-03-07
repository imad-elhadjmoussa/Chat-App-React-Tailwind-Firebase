import React from 'react'
import { TextField, Button } from '@mui/material'

export const Login = () => {
    return (
        <div className=' p-8 shadow-xl rounded-lg bg-gray-100 flex flex-col gap-4 md:px-14' >
            <h1 className='text-3xl cursor-pointer text-center font-bold text-gray-700 ' >
                Chat App
            </h1>
            <h3 className='text-lg font-bold text-blue-950 ' >
                Login
            </h3>
            <div  >
                <TextField id="standard-basic" label="Enter Password" variant="standard" />
            </div>
            <div >
                <TextField id="standard-basic" label="Enter Email" variant="standard" />
            </div>

            <Button variant="contained">Login</Button>

            <div>
                <p className=' font-semibold'>
                    You don't have an account? <span className='text-blue-500 underline cursor-pointer' >Rigester</span>
                </p>
            </div>
        </div>
    )
}
