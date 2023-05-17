import axios from 'axios'
import {AuthModel, UserModel} from './_models'
import {http} from "../../../../_cloner/helpers/apiConfig"

const API_URL = process.env.REACT_APP_API_URL

export const GET_USER_BY_ACCESSTOKEN_URL = `${API_URL}/verify_token`
export const LOGIN_URL = `${API_URL}/login`
export const REGISTER_URL = `${API_URL}/register`
export const REQUEST_PASSWORD_URL = `${API_URL}/forgot_password`



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

