import axios from "axios"

export const getUserAction = (user_id) => {
    return axios
        .get(
            `https://api.slingacademy.com/v1/sample-data/users/${user_id}`
        )
}

export const getUsersAction = () => {
    return axios
        .get('https://api.slingacademy.com/v1/sample-data/users')
}

export const getBlogsAction = (offset=0, limit=10) => {
    return axios
        .get(`https://api.slingacademy.com/v1/sample-data/blog-posts?offset=${offset}&limit=${limit}`)
}