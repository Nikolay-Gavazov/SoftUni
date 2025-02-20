const host = 'http://localhost:3030/';

async function requester(method, url, data) {
    const user = JSON.parse(localStorage.getItem('userData'));
    
    const options = {
        method,
        headers: {}
    }

    if (data != undefined) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    if (user) {
        const token = user.accessToken;
        options.headers['X-Authorization'] = token;
    }

    try {
        const res = await fetch(`${host}${url}`, options);
        if (!res.ok) {
            if (res.status == 403) {
                localStorage.removeItem('userData');
                throw Error(res.statusText)
            }
            const error = await res.json();
            throw Error(error.message)
        }
        if(res.status == 204){
            return res;
        }else{
            return res.json();
        }
    

    } catch (error) {
        alert(error.message);
        throw error;
    }
}

const get = requester.bind(null, 'GET')
const post = requester.bind(null, 'POST')
const put = requester.bind(null, 'PUT')
const delete_ = requester.bind(null, 'DELETE')

export {
    get,
    post,
    put,
    delete_
}