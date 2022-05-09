import axios from 'axios';
export const  BASEURL = 'http://localhost:8000/api';

const access_token  = localStorage.getItem('flume_auth_token');
// axios.defaults.headers.common.Authorization = `Bearer ${access_token}`;
console.log(access_token, 'token');
export const authAxios = axios.create({
    baseURL: BASEURL,
    headers: {
        Authorization: 'Bearer ' + access_token
    }
})

export const getNonce = (data) => { 
    return new Promise((resolve, reject) => {
    
        axios.post(`${BASEURL}/nonce`, data).then((response) => {
            resolve(response)
        })
        .catch((err) => {
            reject(err)
        })
    })
}

export const authenticate = (data) => { 
    return new Promise((resolve, reject) => {
        axios.post(`${BASEURL}/auth`, data).then((response) => {
            resolve(response)
        })
        .catch((err) => {
            reject(err)
        })
    })
}

export const createColection = (data) => { 
    return new Promise((resolve, reject) => {
        authAxios.post(`/project`, data).then((response) => {
            resolve(response)
        })
        .catch((err) => {
            reject(err)
        })
    })
}

export const getColections = () => { 
    return new Promise((resolve, reject) => {
        authAxios.get(`/project`).then((response) => {
            resolve(response)
        })
        .catch((err) => {
            reject(err)
        })
    })
}

export const createCollection = (data) => {
    return new Promise((resolve, reject) => {
        authAxios.post(`/project`, data).then((response) => {
            resolve(response)
        })
        .catch((err) => {
            reject(err)
        })
    })
}

export const getCollection = (id) => {
    return new Promise((resolve, reject) => {
        authAxios.get(`/collection/${id}`).then((response) => {
            resolve(response)
        })
        .catch((err) => {
            reject(err)
        })
    })
}

export const getGeneratedCollection = (id) => {
    return new Promise((resolve, reject) => {
        authAxios.get(`collection-item/${id}`).then(response => {
            resolve(response.data)
        })
        .catch((err) => {
            console.error(err);
        })
    })
}