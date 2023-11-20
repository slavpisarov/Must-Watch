const buildOptions = (data) =>{
    const options = {};

    if (data) {
        options.body = JSON.stringify(data)
        options.headers = {
            'content-type':'application/json'
        }
    }


    return options;
}

const request = async (method,url,data) =>{
    const res = await fetch(url,{
        ...buildOptions(data),
        method,
    })

    const result = await res.json();

    return result;
}


export const get = request.bind(null,'GET')
export const post = request.bind(null,'POST')
export const remove = request.bind(null,'DELETE')

