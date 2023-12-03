import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';


export function middleware(request) {
    return NextResponse.redirect(new URL('/home', request.url))
}