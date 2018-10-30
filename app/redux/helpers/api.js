import axios from 'axios';

const api_url = 'https://rentnmore-api.herokuapp.com/';

const client = axios.create({
    baseURL: api_url,
    responseType: 'json'
});

function get(url){
    return client.get(url)
}

function post(url,params={}){
    return client.post(url,params);
}

function put(url,params){
    return client.put(url,params);
}

function patch(url,params){
    return client.patch(url,params);
}

function remove(url){
    return client.delete(url);
}

export {
    get,
    put,
    post,
    patch,
    remove,
    client,
    api_url
}

