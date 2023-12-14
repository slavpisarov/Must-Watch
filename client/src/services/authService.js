import * as request from '../lib/request'

const baseUrl = `${import.meta.env.VITE_API_URL}/users`

export const login = async (email,password) =>{
    const result = await request.post(`${baseUrl}/login`, {email,password})

    return result;
}

export const register = (username,email,password) =>request.post(`${baseUrl}/register`, {username,email,password})

export const logout = () => request.get(`${baseUrl}/logout`)