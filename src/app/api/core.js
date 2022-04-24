import axios from 'axios';
const BASEURL = 'http://localhost:8080/api';

export const getNonce = () => {
    return new Promise((resolve, reject) => {
        axios.post(`${BASEURL}/nonce`).then((response) => {
            resolve(response)
        })
        .catch((err) => {
            reject(err)
        })
    })
}