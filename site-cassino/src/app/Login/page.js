'use client';

import Header from '@/Components/Header'
import { defaultBiscoito } from '@/biscoito';
import { useEffect, useState } from "react";


export default function Login() {
    
    useEffect(() => {
        defaultBiscoito()
    }, [])
    
    const [Email, setEmail] = useState('');
    const [Pass, setPass] = useState('');

    const EmailChange = (event) => {
        setEmail(event.target.value);
    };
    const PassChange = (event) => {
        setPass(event.target.value);
    };

    const Submit = () =>{
        console.log(Email + '' + Pass)
    }

    return (
        <>
            <Header />
            <div className=' zoom w-4/5 bg-purple-dark  mt-10 mx-auto text-white flex justify-center items-center rounded-xl '>
                <div className='rotate' id='img'>
                    <img src="/Logo.png" alt="Logo" />
                </div>
                <div className='flex flex-col w-450 gap-8 items-center'>
                    <input type="text" placeholder='Email'
                        className='bg-whelow-dark w-450 h-12 rounded-full shadow-input'
                        value={Email}
                        onChange={EmailChange}
                    />
                    <input type="pass" placeholder='Pass'
                        className='bg-whelow-dark w-450 h-12 rounded-full shadow-input'
                        onChange={PassChange}
                    />
                    <button 
                    onClick={Submit}
                    className='bg-whelow-ligt w-1/3 rounded-full text-purple-dark p-2 btn-login text-2xl'
                    >Login</button>
                </div>
            </div>
        </>
    )
}