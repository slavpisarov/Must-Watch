import * as request  from "../lib/request";

const baseUrl = 'http://localhost:3030/jsonstore/media'

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