import axios from "axios";
import Cookies from "js-cookie";

const token = Cookies.get('token')

export const http = axios.create({
    baseURL: "https://transferapi.saipacorp.com/",
})

export const dashboardHttp = axios.create({
    baseURL: "https://transferapi.saipacorp.com/api",
    headers: {'Authorization': 'Bearer '+ token, 'Content-Type': 'application/json'}
})


