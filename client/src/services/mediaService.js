import * as request  from "../lib/request";

const tempUrl = 'http://localhost:3030/jsonstore/media'
const baseUrl = 'http://localhost:3030/data/media'

export const getHomePage = async () =>{
    const result= await request.get(tempUrl);

    return Object.values(result)
}

export const getAll = async () =>{
    const result= await request.get(baseUrl);

    return Object.values(result)
}

export const getOne = async (id) =>{
    const result= await request.get(`${baseUrl}/${id}`);

    return result
}

export const create = async (data) => {

    const result = await request.post(baseUrl, data)

    return result;
}