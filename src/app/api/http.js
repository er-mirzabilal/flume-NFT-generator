import axios from "axios";
import { showMessage } from "../pages/store/messageSlice";

export const  BASEURL = 'http://164.92.157.140/api';

const http = axios.create({
    baseURL: BASEURL,
    headers: {
        Accept: 'application/json',
        "Content-Type": "application/json"
    }
});

http.interceptors.request.use((config) => {
    const token = localStorage.getItem('flume_auth_token');
    config.headers = {
        ...config.headers,
        Authorization: 'Bearer ' + token,
    };
    return config;
})


http.interceptors.response.use((response) => {
    return response
}, (err) => {
    if(err.response && ( err.response.status === 401 || err.response.status === 403)){
        localStorage.removeItem('flume_auth_token');
        localStorage.removeItem('flume_notify_token');
        showMessage({message: "Token has expired or invalid.", soverity: "error"});
        // window.location.reload();
    }
}
)
export default http;
