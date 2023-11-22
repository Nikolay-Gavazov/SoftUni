const requester = async (method, url, data) => {

    const responce = await fetch(url, {
        ...buildOptions(data),
        method,
    });

    if(responce.status == 204){
        return {};
    }
    const result = await responce.json();

    if(!responce.ok){
        throw result;
    }
    return result;
};

const buildOptions = (data)  => {
    const options = {};
    if (data){
        options.headers = {"content-type": "application/json"};
        options.body = JSON.stringify(data);
    }

    const token = localStorage.getItem('accessToken');

    if(token){
        options.headers = {
            ...options.headers,
            'X-Authorization': token
        }
    }

    return options;
};

export const get = requester.bind(null, "GET");
export const post = requester.bind(null, "POST");
export const put = requester.bind(null, "PUT");
export const del = requester.bind(null, "DELETE");