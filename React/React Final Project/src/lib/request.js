function buildOptions(data){
    const options = {};

    if(data){
        options.body = JSON.stringify(data);
        options.headers = {"Content-Type": "application/json"};
    }

    return options;
}

const request = async(method, url, data) =>{
    const responce = await fetch(url, {
        ...buildOptions(data),
        method
    });
    const result = await responce.json();
    return result;
};


export const get = request.bind(null, "GET");
export const post = request.bind(null, "POST");
export const put = request.bind(null, "PUT");
export const remove = request.bind(null, "DELETE");