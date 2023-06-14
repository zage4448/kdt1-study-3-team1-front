import axios from "axios";
import env from "@/env";

const axiosInst = axios.create({
    // baseURL: 'http://localhost:7777',
    baseURL: env.api.SPRING_API_URL,
    timeout: 2500
})

const springAxiosInst = axiosInst

const fastApiAxiosInst = axios.create({
    // baseURL: 'http://localhost:8000',
    baseURL: env.api.FAST_API_URL,
    timeout: 2500
})

export default { axiosInst, springAxiosInst, fastApiAxiosInst }