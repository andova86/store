export interface IUserPlatzi {
    id: number;
    email: string;
    password: string;
    name: string;
    role: string;
}


export interface ILogin {
    email: string;
    password: string;
}

export interface IRegisterUser {
    name: string;
    email: string;
    password: string;
    role: string,
    avatar: string
}

export interface ILoginUser {
    id: number,
    avatar: string,
    birthdate: string,
    first_name: string,
    middle_name:string ,
    last_name: string,
    full_name: string,
    email: string,
    phone_number: string,
    date_joined: string,
    preferred_language: string,
    last_login: string
}