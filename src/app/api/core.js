import axios from 'axios';
import http from './http';
export const  BASEURL = 'http://localhost:8000/api';

const access_token  = localStorage.getItem('flume_auth_token');
// axios.defaults.headers.common.Authorization = `Bearer ${access_token}`;
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
        http.get(`/project`).then((response) => {
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
            resolve(response.data)
        })
        .catch((err) => {
            reject(err)
        })
    })
}

export const getGeneratedCollection = (id, params = {}) => {
    return new Promise((resolve, reject) => {
        authAxios.get(`collection-item/${id}`, {params}).then(response => {
            resolve(response.data)
        })
        .catch((err) => {
            console.error(err);
        })
    })
}
export const postGenerateCollection = (data) => {
    return new Promise((resolve, reject) => {
        http.post(`/collection`,data).then((response) => {
            resolve(response.data)
        })
        .catch((err) => {
            return err;
        })
    })
}