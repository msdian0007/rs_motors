import { SessionOptions } from "iron-session";

export interface sessionData {
    userName?: number;
    isAdmin?: boolean;
    isLoggedIn: boolean;
}

export const defaultSession: sessionData = {
    isLoggedIn: false
}

export const sessionOptions: SessionOptions = {
    password: process.env.SECRET_KEY!,
    cookieName: "msdian-session",
    cookieOptions: {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 3600000
    }
}