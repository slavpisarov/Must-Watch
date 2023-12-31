import * as request from "../lib/request";

// const baseUrl = 'http://localhost:3030/data/media'
const baseUrl = `${import.meta.env.VITE_API_URL}/data/media`

export const getHomePage = async () => {
    const query = new URLSearchParams({
        offset:0,
        pageSize: 4,
    })
    const result = await request.get(`${baseUrl}?sortBy=commentsCount%20desc${query}`);

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

    return result;
}

export const remove = async (mediaId) => request.remove(`${baseUrl}/${mediaId}`);
