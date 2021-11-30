import axios from "axios";


const apis = axios.create({
    baseURL: 'http://192.168.0.115/api/User'
})

const postLogin = payload => apis.post('/Login', payload)
const postAdminLogin = payload => apis.post('/WebPanelLogin', payload)
const postLogout = () => apis.post('/Logout')
const postSignUp = payload => apis.post('/Register', payload)
const postResetPasswordThroughEmail = payload => apis.get(`/ResetPasswordThroughEmail?Email=${payload}`)
const postChangePassword = payload => apis.post("/ChangePassword", payload.changePassword, { headers: { "Authorization": `Bearer ${payload.token}` } })
const postAddUserAddress = payload => apis.post("/AddUserAddress", payload, { headers: { "Authorization": `Bearer ${payload.token}` } })








export {
    postLogin,
    postSignUp,
    postAdminLogin,
    postLogout,
    postResetPasswordThroughEmail,
    postAddUserAddress,
    postChangePassword


}