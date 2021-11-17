import create from 'zustand';

import { register, login, verify } from 'api/services/auth';

import { IAuthStore } from './types';

export const useAuthStore = create<IAuthStore>((set) => ({
  async verify(email) {
    try {
      await verify(email);
    } catch (e) {
      console.error(e);
    }
  },
  async register(data) {
    try {
      const { data: { token } } = await register(data);
      localStorage.setItem('token', token);
      set({ isAuth: true });
    } catch (e) {
      console.error(e);
    }
  },
  async login(data) {
    try {
      const { data: { token } } = await login(data);
      localStorage.setItem('token', token);
      set({ isAuth: true });
    } catch (e) {
      console.error(e);
    }
  },
  isAuth: false,
}));
