

import Axios, {AxiosError} from 'axios'



type ApiError = AxiosError<{
    errors: Record<string, string[]>
    status: string
}>


const axios = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
    withXSRFToken: true
})


axios.interceptors.response.use(
    response => response,
    async (error: AxiosError<ApiError>) => {
        if (error.response?.status === 419) {
            await csrf()
            return axios.request(error.config!)
        }


        return Promise.reject(error)
    }
)

export const csrf = () => axios.get('csrf/token')

export default axios

export const getRequest = async (url: string, params = {}) => {
    const response = await axios.get(url, { params });
    return response.data;
};
