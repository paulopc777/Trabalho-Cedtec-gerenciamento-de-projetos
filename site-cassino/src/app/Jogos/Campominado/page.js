'use client';

import Header from "@/Components/Header";
import { useEffect, useState } from "react";


export default function Logado() {
    const [Aposta, setAposta] = useState(1);
    const [Number, setNumber] = useState(1);
    //text-white absolute text-5xl z-20 bg-red px-4 py-2 rounded-xl hidden
    const [Visble, setVisible] = useState('text-white absolute text-5xl z-20 bg-red px-4 py-2 rounded-xl hidden')

    //w-full lines-dow-1 absolute
    //w-full absolute overflow-hidden opacity-0 bottom-0 transition-all 
    const [Efect, setEfect] = useState('w-full lines-dow-1 absolute top-0 transition-all overflow-hidden hidden');

    function ChageAposta(event) {
        setAposta(event.target.value)
    }

    function Dividir2() {
        if (parseFloat(Aposta) < 2) {
            setAposta(Aposta)
        } else {
            let Result = Aposta / 2;
            setAposta(Result)
        }
    }

    function DuasVezes() {
        let Result = Aposta * 2;
        setAposta(Result);
    }

    function generateRandomNumber(max, min) {
        // Retorna um número aleatório entre min (inclusive) e max (exclusive)
        const numeroAleatorio = Math.random() * (max - min) + min;
        const numeroComUmaCasaDecimal = parseFloat(numeroAleatorio.toFixed(1));
        return numeroComUmaCasaDecimal;
    }

    async function setVisual(Number1, Number2) {
        if (parseInt(Number1) === parseInt(Number2)) {
            setEfect('w-full absolute overflow-hidden top-0 transition-all opacity-0')
        } else {
            setEfect('w-full lines-dow-1 absolute top-0 transition-all overflow-hidden');
        }
    }

    async function Contador() {

        const time = 300;

        const get = generateRandomNumber(5.0, 1.0);
        console.log(get)

        for (let i = 1; i <= get; i += 0.1) {
            // let ivalue = i.toFixed(1);
            setNumber((Number + i).toFixed(1));

            const vall = () => {
                let val = i.toFixed(1);
                let times = parseInt(time - (val * 50));

                if (times <= 60) {
                    return 60;
                } else {
                    return times.toFixed(1);
                }
            }
            setVisual(i.toFixed(1), get)

            await new Promise(resolve => setTimeout(resolve, vall()));
        }

    }
    
    async function start() {
        await Contador()
        setVisible('text-white absolute text-5xl z-20 bg-red px-4 py-2 rounded-xl ')
        await new Promise(resolve => setTimeout(resolve, 5000));
        setVisible('text-white absolute text-5xl z-20 bg-red px-4 py-2 rounded-xl hidden')
        setNumber(1)

    }

    useEffect(() => {
        return () => {
            console.log('Limpeza ao desmontar');
        };
    }, []);


    return (
        <>
            <Header />

            <div className="bg-purple-dark w-1000 h-96 mt-14 mx-auto flex" >

                <div className="w-1/4 bg-purple-ligt h-full ">
                    <div className="w-full flex flex-col justify-center items-center pt-10" >

                        <div className="bg-purple-dark w-2/4 flex items-center rounded-full">
                            <input type="number" min='1' className="w-3/4 h-8 text-right " name="input-aposta" step=".1"
                                onChange={ChageAposta} value={Aposta}
                            />
                            <label htmlFor="input-aposta" className="text-white w-1/4 text-center"
                            >R$</label>
                        </div>

                        <button className="bg-purple-dark text-white rounded-full px-6 mt-1" onClick={Dividir2}>1/2</button>
                        <button className="bg-purple-dark text-white rounded-full px-6 mt-1" onClick={DuasVezes}>2x</button>

                    </div>
                    <div className="text-center mt-4">
                        <button className="bg-whelow-dark p-2 px-7 rounded-3xl" onClick={start}>Jogar</button>
                    </div>
                </div>

                <div className="w-3/4 h-full flex justify-center items-center ">

                    <div className="w-11/12 h-5/6 border-2 border-whelow-dark flex justify-center items-center relative overflow-hidden">

                        <div className="border-2 border-whelow-dark p-2 rounded-3xl bg-purple-ligt w-11 text-center  z-10">
                            <p className="text-white">{Number}</p>
                            <div className="line">
                            </div>
                        </div>

                        <div className={Visble}>
                            <p>{`crash ${Number}X`}</p>
                        </div>

                        <div className={Efect}>

                            <div className="h-0-2 w-full  ">
                                <p className="text-white">{Number}</p>
                                <hr />
                            </div>
                            <div className="h-0-2 w-full  ">
                                <p className="text-white">{Number}</p>
                                <hr />
                            </div>
                            <div className="h-0-2 w-full  ">
                                <hr />
                            </div>
                            <div className="h-0-2 w-full  ">
                                <hr />
                            </div>
                            <div className="h-0-2 w-full  ">
                                <hr />
                            </div>
                            <div className="h-0-2 w-full  ">
                                <hr />
                            </div>
                            <div className="h-0-2 w-full  ">
                                <hr />
                            </div>
                            <div className="h-0-2 w-full  ">
                                <hr />
                            </div>
                            <div className="h-0-2 w-full  ">
                                <hr />
                            </div>
                            <div className="h-0-2 w-full  ">
                                <hr />
                            </div>
                        </div>

                    </div>
                </div>
            </div >

        </>
    )
}