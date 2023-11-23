import Header from '@/Components/Header'

export default function Cadastro(){
    return(

<>

<Header/>

<div className='flex'>

<div className=' zoom w-4/5 bg-whelow-ligt mt-16 mx-auto text-white flex justify-center items-center rounded-xl p-10'>

<div className='rotate' id='img'>
<img  src="/Logo.png" alt="Logo" />
</div>

<div className='flex flex-col w-450 gap-8 items-center'>

                    <input type="text" placeholder='Email' className='bg-whelow-dark w-450 h-12 rounded-full shadow-input' />

                    <input type="pass" placeholder='Pass' className='bg-whelow-dark w-450 h-12 rounded-full shadow-input' />

                    <input type="text" placeholder='Username' className='bg-whelow-dark w-450 h-12 rounded-full shadow-input' />


                    <input type="text" placeholder='Coin' className='bg-whelow-dark w-450 h-12 rounded-full shadow-input' />

                    <button className='bg-whelow-ligt w-1/3 rounded-full text-purple-dark p-2 btn-login text-2xl'>Cadastro</button>

                </div>

</div>

<div className='bg-purple-ligt propag mt-16 zoom w-4/5'>

<img src='/propaganda.png'/>

</div>

</div>

</>
)
}