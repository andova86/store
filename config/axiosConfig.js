import Axios from "axios";
import configEnv from "./env_config.ts"


export function axiosI(apiToken, acceptLanguage) {
    //console.log(configEnv)

    const intance = Axios.create({
        baseURL: config
    });


    intance.interceptors.request.use(
        (config) => {

            config.headers.Authorization = apiToken ? `Bearer ${apiToken}` : '';

            if (!acceptLanguage) {
                // If in client side, tries to set the language from the cookie
                acceptLanguage = getCookie("languageB2B");
            }
            if (acceptLanguage) config.headers["Accept-Language"] = acceptLanguage;
            
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );


    intance.interceptors.response.use(
        (response) => {

            return response
        },
        async (error) => {

            if (error.response) {
                if (error.response?.status === 401) {
                    //deleteAllCookies()

                    if (typeof window !== 'undefined')
                        window.location.replace("/auth/login");

                    //console.log('entro a rfrescar la pagina')
                    // return

                }
            }
            return Promise.reject(error);
        }
    );

    return intance


}
