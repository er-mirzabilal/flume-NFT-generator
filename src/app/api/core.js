import axios from 'axios';
import http from './http';


export const getNonce = (data) => { 
    return new Promise((resolve, reject) => {
    
        http.post(`/nonce`, data).then((response) => {
            resolve(response)
        })
        .catch((err) => {
            reject(err)
        })
    })
}

export const authenticate = (data) => { 
    return new Promise((resolve, reject) => {
        http.post(`/auth`, data).then((response) => {
            resolve(response)
        })
        .catch((err) => {
            reject(err)
        })
    })
}

export const createColection = (data) => { 
    return new Promise((resolve, reject) => {
        http.post(`/project`, data).then((response) => {
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
        http.post(`/project`, data).then((response) => {
            resolve(response)
        })
        .catch((err) => {
            reject(err)
        })
    })
}

export const getCollection = (id) => {
    return new Promise((resolve, reject) => {
        http.get(`/collection/${id}`).then((response) => {
            resolve(response.data)
        })
        .catch((err) => {
            reject(err)
        })
    })
}

export const getGeneratedCollection = (id, params = {}) => {
    return new Promise((resolve, reject) => {
        http.get(`collection-item/${id}`, {params}).then(response => {
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
export const postDeployCollection = (data) => {
    return new Promise((resolve, reject) => {
        http.post(`/finalize-collection-v2`,data).then((response) => {
            resolve(response.data)
        })
        .catch((err) => {
            return err;
        })
    })
}

export const removeAuthLocalStorage = () => {
    localStorage.removeItem('flume_auth_token');
    localStorage.removeItem('flume_notify_token');
    return true;
}