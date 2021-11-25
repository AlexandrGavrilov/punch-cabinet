import { httpClient } from '../../clients';

import { ILoginDTO, IRegisterDTO, IResetDTO } from './types';

export const login = (data: ILoginDTO) => httpClient.post('/auth/login', data);

export const register = (data: IRegisterDTO) => httpClient.post('/auth/register', data);

export const verify = (email: string) => httpClient.post('/auth/verify', { email });

export const verifyReset = (email: string) => httpClient.post('/auth/verify/reset', { email });

export const verifyConfirm = (code: number, email: string) => httpClient.post('/auth/confirm-verify', { code, email });

export const verifyResetConfirm = (code: number, email: string) => httpClient.post('/auth/confirm-verify/reset', { code, email });

export const resetPassword = (data: IResetDTO) => httpClient.post('/auth/reset-password', data);

export const tokenCheck = () => httpClient.get('/auth/token');
