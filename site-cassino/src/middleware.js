
import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export default async function middleware(request) {

    const bosicoito = cookies().get('validate');

    if (bosicoito) {
        if (bosicoito.value === 'true') {
            return NextResponse.next();
        } else {
            return NextResponse.redirect(new URL('/Login', request.url))
        }
    } else {
        return NextResponse.redirect(new URL('/Login', request.url))
    }

}

export const config = {
    matcher: '/Logado'
}
