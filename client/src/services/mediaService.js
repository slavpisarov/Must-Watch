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

export const getOne = async (mediaId) =>{
    const result= await request.get(`${baseUrl}/${mediaId}`);

    return result
}

export const create = async (data) => {

    const result = await request.post(baseUrl, data)

    return result;
}

export const edit = async (mediaId, data) => {

    const result = await request.put(`${baseUrl}/${mediaId}`, data)

    return result;
}

export const remove = async (mediaId) => request.remove(`${baseUrl}/${mediaId}`);
