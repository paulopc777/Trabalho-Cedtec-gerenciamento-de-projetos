'use client'

import Button from '@/Components/Button';
import Link from 'next/link'
import Menu from '@/Components/Menu';
import { useEffect, useState } from 'react';

export default function Header() {
    const [Menus, setMenus] = useState(false)

    const showMenu = () => {
        setMenus(!Menus)
    }

    return (
        <div className="
        w-full
        h-14
        bg-purple-dark
        flex
        justify-around
        items-center
        relative
        ">

            <button onClick={showMenu}><img src="/Menu.svg" alt="Menu" width={"40px"} /></button>

            <Link href="/"><img src="/Cards.svg" alt="Menu" width={"40px"} /></Link>

            <div className=' flex gap-2'>
                <Button
                    color='bg-trasparent  text-white text-xl'
                    text='Login'
                    link='/Login'
                />
                <Button
                    color='bg-whelow-ligt px-1 py-1 rounded-md text-xl'
                    text='Cadastro'
                    link='/Cadastro'
                />
            </div>

            {Menus && <Menu  active={setMenus} />}

        </div>
    )
}