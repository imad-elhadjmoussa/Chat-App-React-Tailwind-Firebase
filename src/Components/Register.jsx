import React, { useState } from 'react'
import { TextField, Button } from '@mui/material'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth, storage, db } from '../firebase';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from 'firebase/firestore';
import { v4 } from 'uuid'
import {useNavigate,Link} from 'react-router-dom'

export const Register = () => {

    //Get information from inputs
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [photoFile, setPhotoFile] = useState(null);
    const [error, setError] = useState(null);
    //const [imgUrl, setImgUrl] = useState(null);

    const navigation=useNavigate();

    const register = async () => {
        try {

            const res = await createUserWithEmailAndPassword(auth, email, password);

            const storageRef = ref(storage, `images/${name + v4()}`);
            const uploadTask = uploadBytesResumable(storageRef, photoFile);

            uploadTask.on('state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                        case 'paused':
                            //console.log('Upload is paused');
                            break;
                        case 'running':
                            //console.log('Upload is running');
                            break;
                        default: break;
                    }
                },
                (error) => {
                    setError(error);
                },
                () => {
                    try {
                        //Uopload image to storg firebase
                        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                            //Update user 
                            await updateProfile(res.user, { displayName: name, photoURL: downloadURL });

                            await setDoc(doc(db, "users", res.user.uid), {
                                name: name,
                                email: email,
                                photoFile: downloadURL,
                            });
                        });
                    } catch (e) {

                    }
                }
            );
                navigation('/Home')


        } catch (e) {
            setError(e);
            console.log(e.message);
        }

    }


    return (
        <div className=' p-8 shadow-xl rounded-lg bg-gray-100 flex flex-col gap-4 md:px-14'>
            <h1 className='text-3xl cursor-pointer text-center font-bold text-gray-700 '>
                Chat App
            </h1>
            <h3 className='text-lg font-bold text-blue-950 '>
                Register
            </h3>
            <div>
                <TextField onChange={(e) => { setName(e.target.value) }} id="standard-basic" label="Enter Name" variant="standard" />
            </div>
            <div>
                <TextField onChange={(e) => { setEmail(e.target.value) }} id="standard-basic" label="Enter Email" variant="standard" />
            </div>
            <div>
                <TextField onChange={(e) => { setPassword(e.target.value) }} id="standard-basic" label="Enter Password" variant="standard" />
            </div>
            <div>
                <input onChange={(e) => { setPhotoFile(e.target.files[0]) }} id='file' className=' bg-red-400 hidden' type="file" />
                <label htmlFor="file" className='flex'>
                    <p className=' text-gray-700'>Add Photo</p>
                    <AddPhotoAlternateIcon style={{ cursor: 'pointer', color: 'lightblue', width: '50px' }} />
                </label>
            </div>

            <Button onClick={() => { register() }} variant="contained">Sign up</Button>

            <div>
                <p className=' font-semibold'>
                    You don't have an account? <span className='text-blue-500 underline cursor-pointer' ><Link to='/Login'>Login</Link></span>
                </p>
            </div>
        </div>
    )
}
