import axios from "axios";

const apis = axios.create({
    baseURL: 'http://192.168.0.115/api/FollowFollower'
})

const getFollow = payload => apis.get(`/Follow?FollowUser_Id=${payload}`)
const getUnFollow = payload => apis.get(`/UnFollow?UnFollowUser_Id=${payload}`)
const getGetFollowers = (payload) => apis.get("/GetFollowers", { headers: { "Authorization": `Bearer ${payload.token}` } })
const getGetFollowings = (payload) => apis.get("/GetFollowings", { headers: { "Authorization": `Bearer ${payload.token}` } })
const getGetTopFollowers = (payload) => apis.get("/GetTopFollowers", { headers: { "Authorization": `Bearer ${payload.token}` } })


export { getFollow, getUnFollow, getGetFollowers, getGetFollowings, getGetTopFollowers }