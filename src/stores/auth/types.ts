import { ILoginDTO, IRegisterDTO } from 'api/services/auth';

export interface IAuthStore {
    isAuth: boolean;
    isVerified: boolean;
    isCodeSent: boolean;
    login(data: ILoginDTO): void;
    register(data: IRegisterDTO): void;
    verify(email: string): void;
    verifyConfirm(code: number, email: string): void;
    tokenCheck(): void;
}
