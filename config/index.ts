import Axios, { AxiosInstance }  from "axios";
import configEnv from "./env_config";


export const intanceAxios : AxiosInstance = Axios.create({
    baseURL: configEnv?.api,
    //headers: {'Access-Control-Allow-Origin': '*'}
});


