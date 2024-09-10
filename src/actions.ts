"use server"

import { sessionOptions, sessionData, defaultSession } from '@/lib'
import axios from 'axios'

import { getIronSession } from "iron-session"
import { cookies } from 'next/headers'
import { baseURL, jsonConfig } from './constants'
import { redirect } from 'next/navigation'

export const getSession = async () => {
    const session = await getIronSession<sessionData>(cookies(), sessionOptions)

    if (!session.isLoggedIn) {
        session.isLoggedIn = defaultSession.isLoggedIn
    }
    return session
}

export const login = async (prevState: { error: undefined | string }, formData: FormData) => {
    try {
        const session = await getSession()

        const userName = formData.get('userName')
        const password = formData.get('password')

        const response = await axios.post(`${baseURL}/users/login`, { userName, password }, jsonConfig)
        if (response.status === 200) {
            session.isAdmin = true
            session.isLoggedIn = true
            session.userName = response.data.userName
            await session.save()
            redirect('/admin')
        } else {
            return { error: response.data }
        }
    } catch (error: any) {
        return { error: error?.response?.data }
    }
}

export const logout = async () => {
    const session = await getSession()
    session.destroy()
    redirect('/')
}