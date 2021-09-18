import axios from 'axios';

type Method = 'get' | 'post';
interface InputObject {
    url: string,
    method: Method,
    body?: object,
    params?: object
};

const httpRequest = async (inputObject: InputObject) => {
    const { url, method, body, params } = inputObject;
    return axios({
        method,
        url,
        params,
        data: body,
    });
}

export default httpRequest;
