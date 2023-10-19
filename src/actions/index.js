import axios from "axios"

export const getUserAction = (user_id) => {
    return axios
        .get(
            `https://api.slingacademy.com/v1/sample-data/users/${user_id}`
        )
}