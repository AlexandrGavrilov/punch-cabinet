export interface ILoginDTO {
    email?: string;
    number?: string;
    password: string;
}

export interface IRegisterDTO {
    name: string;
    email?: string;
    number?: string;
    password: string;
}

export interface IResetDTO {
    email: string;
    password: string;
}
