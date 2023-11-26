'use server';
import { cookies } from 'next/headers'



export async function defaultBiscoito() {
    cookies().set({
        name: 'validate',
        value: false,
        httpOnly: true,
        path: '/'
    });

    return null;
}


export async function updateBiscoito(idUsuario) {
    cookies().delete('validate');

    cookies().set({
        name: 'validate',
        value: true,
        httpOnly: true,
        path: '/Login'
    });
    cookies().set({
        name: 'Dados',
        value: idUsuario,
        httpOnly: true,
        path: '/Login'
    });

    return null;

}