import axios from 'axios';
const BASEURL = 'http://localhost:8000/api';

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
        console.log('data', data);
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
        console.log('data', data);
        axios.post(`${BASEURL}/project`, data).then((response) => {
            resolve(response)
        })
        .catch((err) => {
            reject(err)
        })
    })
}

export const getColections = () => { 
    return new Promise((resolve, reject) => {
        axios.get(`${BASEURL}/project`).then((response) => {
            resolve(response)
        })
        .catch((err) => {
            reject(err)
        })
    })
}
