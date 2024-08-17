import axios from "axios";

export const AxiosAgent = axios.create({
    baseURL: "http://localhost:3001"
})
