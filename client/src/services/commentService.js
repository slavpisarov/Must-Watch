import * as request from '../lib/request'

const baseUrl = 'http://localhost:3030/data/comments'


export const getAll = async (mediaId) =>{

    const query = new URLSearchParams({
        where:`mediaId="${mediaId}"`,
    });
    
    const result = await request.get(`${baseUrl}?${query}`);

    return result
}


export const create = async (mediaId, text, owner) =>{
    
    const newComment = await request.post(baseUrl, {
        mediaId,
        text,
        owner
    });
    
    return newComment;
}