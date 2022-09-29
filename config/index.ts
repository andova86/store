import Axios  from "axios";
import configEnv from "./env_config";


export const intanceAxios = Axios.create({
    baseURL: configEnv?.api,
});


