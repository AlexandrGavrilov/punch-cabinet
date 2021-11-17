import { httpClient } from '../../clients';

import { ILoginDTO, IRegisterDTO } from './types';

export const login = (data: ILoginDTO) => httpClient.post('/auth/login', data);

export const register = (data: IRegisterDTO) => httpClient.post('/auth/register', data);

export const verify = (email: string) => httpClient.post('/auth/verify', { email });
