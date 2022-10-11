import Axios, { AxiosInstance }  from "axios";
import configEnv from "./env_config";


export const intanceAxios : AxiosInstance = Axios.create({
    baseURL: configEnv?.api,
    //headers: {'Access-Control-Allow-Origin': '*'}
});


export const intanceAxiosApiKey  = (access_token: string) => Axios.create({
    baseURL: configEnv?.api,
    headers: {'Authorization': `Bearer ${access_token}`}
});


