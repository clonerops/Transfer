import axios from 'axios'
import {AuthModel, UserModel} from './_models'
import {http} from "../../../../_cloner/helpers/apiConfig"

const API_URL = process.env.REACT_APP_API_URL

export const GET_USER_BY_ACCESSTOKEN_URL = `${API_URL}/verify_token`
export const LOGIN_URL = `${API_URL}/login`
export const REGISTER_URL = `${API_URL}/register`
export const REQUEST_PASSWORD_URL = `${API_URL}/forgot_password`

// Server should return AuthModel
export function login(email: string, password: string) {
  return axios.post<AuthModel>(LOGIN_URL, {
    email,
    password,
  })
}
// Server should return object => { result: boolean } (Is Email in DB)
export function requestPassword(email: string) {
  return axios.post<{result: boolean}>(REQUEST_PASSWORD_URL, {
    email,
  })
}

export function getUserByToken(token: string) {
  return axios.post<UserModel>(GET_USER_BY_ACCESSTOKEN_URL, {
    api_token: token,
  })
}


const loginUser =  (username: string, password: string, captchaToken: string, captchaCode: string) => {
  const user = { username, password, captchaToken, captchaCode }
  return http.post("/Users/authenticate", user)
}

const getCaptcha = async () => {
  const { data } = await http.get("/Users/GetCaptcha")
  return data
}

export {
  loginUser,
  getCaptcha
}

