import * as axios from "axios";
import {getAccessToken} from "../services/cookies.service";


const instance = axios.create({
    withCredentials: false,
    baseURL: 'http://localhost:8081/',
    headers: {Authorization: `Bearer ${getAccessToken()}`}
})

export const authAPI = {
    reg(payload) {
        return instance.post(`auth/reg`, {...payload})
    },
    me(_id) {
        console.warn(typeof _id)
        return instance.post(`user/me`, {_id})
    },
    login(email, password) {
        return instance.post(`auth/login`, {email, password})
    },

    updateUserData(payload) {
        return instance.post('user/me/update', {...payload})
    }
}
