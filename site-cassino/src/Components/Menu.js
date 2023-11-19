
import Link from 'next/link';
import 'animate.css';

export default function Menu({active}) {

    const closeMenu = () =>{
        active(false)
    }

    return (
        <div className='absolute text-white left-0 top-0 bg-purple-ligt h-screen w-1/6 animate__animated animate__fadeIn'>
        <button  onClick={closeMenu} className = 'w-full text-right pr-4' > x</button >
            <ul className='flex flex-col gap-3 mt-14 text-center'>
                <li><Link href='/'>Campominado</Link></li>
                <li><Link href='/'>Campominado</Link></li>
                <li><Link href='/'>Campominado</Link></li>
                <li><Link href='/'>Campominado</Link></li>
            </ul>
        </div >
    )
}