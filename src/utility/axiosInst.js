import axios from "axios";

const axiosInst = axios.create({
    // baseURL: 'http://localhost:7777',
    baseURL: process.env.VUE_APP_SPRING_URL,
    timeout: 2500
})

const springAxiosInst = axiosInst

const fastApiAxiosInst = axios.create({
    // baseURL: 'http://localhost:8000',
    baseURL: process.env.VUE_APP_FAST_API_URL,
    timeout: 2500
})

export default { axiosInst, springAxiosInst, fastApiAxiosInst }