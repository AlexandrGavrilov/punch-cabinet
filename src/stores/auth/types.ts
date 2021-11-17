import { ILoginDTO, IRegisterDTO } from 'api/services/auth';

export interface IAuthStore {
    isAuth: boolean;
    login(data: ILoginDTO): void;
    register(data: IRegisterDTO): void;
    verify(email: string): void;
}
