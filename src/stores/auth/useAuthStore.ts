import create from 'zustand';
import i18next from 'i18next';
import { message } from 'antd';

import {
  register, login, verify, verifyConfirm, tokenCheck as tokenCheckApi, verifyResetConfirm, verifyReset, resetPassword,
} from 'api/services/auth';

import { useUserStore } from 'stores/user';

import { IAuthStore } from './types';

export const useAuthStore = create<IAuthStore>((set) => {
  const tokenCheck = async () => {
    try {
      const { data } = await tokenCheckApi();
      const { setUser } = useUserStore.getState();
      set({ isAuth: true });
      setUser(data);
    } catch (e) {
      console.error(e);
    }
  };

  if (localStorage.getItem('token')) {
    tokenCheck();
  }

  return ({
    async resetPassword(data) {
      try {
        await resetPassword(data);
        set({ isResetOpen: false });
        message.success(i18next.t('password_reset_success'));
      } catch (e) {
        console.error(e);
      }
    },
    async verifyConfirm(code, email) {
      try {
        await verifyConfirm(code, email);
        set({ isVerified: true });
        message.success(i18next.t('verify_success'));
      } catch (e) {
        console.error(e);
      }
    },
    async verifyResetConfirm(code, email) {
      try {
        await verifyResetConfirm(code, email);
        set({ isResetPasswordVerified: true });
        message.success(i18next.t('verify_success'));
      } catch (e) {
        console.error(e);
      }
    },
    tokenCheck,
    async verify(email) {
      try {
        await verify(email);
        set({ isCodeSent: true });
        message.success(i18next.t('verify_code_sent'));
      } catch (e) {
        if (e.response.status === 409) {
          message.error(i18next.t('user_not_defined'));
        }
        console.error(e.response, 'WWW');
      }
    },
    async verifyReset(email) {
      try {
        await verifyReset(email);
        set({ isResetPasswordCodeSent: true });
        message.success(i18next.t('verify_code_sent'));
      } catch (e) {
        if (e.response.status === 409) {
          message.error(i18next.t('email_already_exist'));
        }
        console.error(e.response, 'WWW');
      }
    },
    async register(data) {
      try {
        const { data: { token, ...user } } = await register(data);
        localStorage.setItem('token', token);
        const { setUser } = useUserStore.getState();
        setUser(user);
        set({ isAuth: true });
      } catch (e) {
        console.error(e);
      }
    },
    async login(data) {
      try {
        const { data: { token, ...user } } = await login(data);
        localStorage.setItem('token', token);
        const { setUser } = useUserStore.getState();
        setUser(user);
        set({ isAuth: true });
      } catch (e) {
        message.error(i18next.t('invalid_credentials'));
        console.error(e);
      }
    },
    setSelectedAuth(selectedAuth: 'register' | 'login' | null) {
      set({ selectedAuth });
    },
    selectedAuth: null,
    isVerified: false,
    isCodeSent: false,
    isResetPasswordVerified: false,
    isResetPasswordCodeSent: false,
    isAuth: false,
    isResetOpen: false,
  });
});
