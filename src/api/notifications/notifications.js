import axios from "axios";

const apis = axios.create({
    baseURL: 'http://192.168.0.115/api/Notifications'
})

const getGetNotifications = payload => apis.get(`/GetNotifications?UserId=${payload.data.userid}&SignInType=${payload.data.SignInType}`, { headers: { "Authorization": `Bearer ${payload.token}` } })
const getMarkNotificationAsRead = payload => apis.get(`/MarkNotificationAsRead?NotificationId=${payload}`)
const getUserNoticationsOnOff = payload => apis.get(`/UserNoticationsOnOff?UserId=${payload}&SignInType=${payload}&On=${payload}`)



export { getGetNotifications, getMarkNotificationAsRead, getUserNoticationsOnOff }