import { ILogin, IRegisterUser } from './../modules/user/domain/user';
//ENDPOINT PARA OBTENER EL LISTADO DE PRODUCTOS

import { intanceAxios } from "../config";

export async function getAllUsers(start:number) {
    const res = await intanceAxios.get('users/');
    const data = await res.data;

    if (!data) {
        return {
            notFound: true,
        };
    } else {
        return {
            data: data,
        };
    }
}

export async function getUserById(id: number) {
    const res = await intanceAxios.get(`users/${id}`);

    const data = await res.data;
    console.log(data);

    if (!data) {
        return {
            notFound: true,
        };
    } else {
        return {
            data: data,
        };
    }
}

export async function postLogin(dataLogin: ILogin) {
    const res = await intanceAxios.post('auth/login/', dataLogin);

    const data = await res.data;
    console.log(data);

    if (!data) {
        return {
            notFound: true,
        };
    } else {
        return {
            data: data,
        };
    }
}

export async function postLogout() {
    const res = await intanceAxios.post('auth/logout/');

    const data = await res.data;
    console.log(data);

    if (!data) {
        return {
            notFound: true,
        };
    } else {
        return {
            data: data,
        };
    }
}
 
export async function postRegisterUser(dataLogin: IRegisterUser) {
    const res = await intanceAxios.post('auth/registration/', dataLogin);

    const data = await res.data;
    console.log(data);

    if (!data) {
        return {
            notFound: true,
        };
    } else {
        return {
            data: data,
        };
    }
}
 

export async function getUserData(id: number) {
   
    
    const res = await intanceAxios.get('auth/profile');

    const data = await res.data;
    console.log(data);

    if (!data) {
        return {
            notFound: true,
        };
    } else {
        return {
            data: data,
        };
    }
}