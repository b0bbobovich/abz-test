import axios from "axios";

const BASE_URL = "https://frontend-test-assignment-api.abz.agency/api/v1";


export const publicRequest = () => axios.create({
    baseURL: BASE_URL
});


export const authorizedRequest = (token) => {
    return (
        axios.create({
            baseURL: BASE_URL,
            headers: {
                token: token
            }
        })
    )
}

