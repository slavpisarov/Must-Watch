import * as request from "../lib/request";

const tempUrl = 'http://localhost:3030/jsonstore/media'
const baseUrl = 'http://localhost:3030/data/media'

export const getHomePage = async () => {
    const result = await request.get(tempUrl);

    return Object.values(result)
}

export const getAll = async () => {
    const result = await request.get(baseUrl);

    return Object.values(result)
}

export const getOne = async (mediaId) => {
    const result = await request.get(`${baseUrl}/${mediaId}`);

    return result
}
export const getMyMedia = async (userId, type) => {

    const query = new URLSearchParams({
        where: `_ownerId="${userId}"`,
    })
    const result = await request.get(`${baseUrl}?${query}`);

    return result.filter(m => m.type === type)
}

export const create = async (data) => {

    const result = await request.post(baseUrl, data)

    return result;
}

export const edit = async (mediaId, data) => {

    const result = await request.put(`${baseUrl}/${mediaId}`, data)

    return result;
}

export const addComment = async (mediaId) => {

    const movie = await getOne(mediaId)
    const result = await request.putComments(`${baseUrl}/${mediaId}`, { ...movie, commentsCount: movie.commentsCount + 1 })
    //  await request.put(`${baseUrl}/${mediaId}`, {...movie, commentsCount:movie.commentsCount+1})

    // const result = await fetch(`${baseUrl}/${mediaId}`, {
    //     method: 'PUT',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'X-Admin': localStorage.getItem('accessToken')
    //     },
    //     body: JSON.stringify({ ...movie, commentsCount: movie.commentsCount + 1 })
    // })

    return result;
}

export const remove = async (mediaId) => request.remove(`${baseUrl}/${mediaId}`);
