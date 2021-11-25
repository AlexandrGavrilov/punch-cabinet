import { ILoginDTO, IRegisterDTO, IResetDTO } from 'api/services/auth';

export interface IAuthStore {
    isAuth: boolean;
    isVerified: boolean;
    isResetOpen: boolean;
    isResetPasswordVerified: boolean;
    isResetPasswordCodeSent: boolean;
    selectedAuth: 'register' | 'login' | null
    setSelectedAuth(selectedAuth: 'register' | 'login' | null): void;
    isCodeSent: boolean;
    login(data: ILoginDTO): Promise<void>;
    resetPassword(data: IResetDTO): Promise<void>;
    register(data: IRegisterDTO): Promise<void>;
    verify(email: string): Promise<void>;
    verifyReset(email: string): Promise<void>;
    verifyConfirm(code: number, email: string): Promise<void>;
    verifyResetConfirm(code: number, email: string): Promise<void>;
    tokenCheck(): Promise<void>;
}
