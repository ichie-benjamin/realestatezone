

import Axios, {AxiosError, AxiosRequestHeaders, CreateAxiosDefaults} from 'axios'



type ApiError = AxiosError<{
    errors: Record<string, string[]>
    status: string
}>


const axiosConfig: CreateAxiosDefaults = {
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    withCredentials: true,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    } as AxiosRequestHeaders,
    withXSRFToken: true,
};

const axios = Axios.create(axiosConfig);


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
