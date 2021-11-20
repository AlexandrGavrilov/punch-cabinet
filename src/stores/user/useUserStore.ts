import create from 'zustand';

import { IUserStore, IUser } from './types';

export const useUserStore = create<IUserStore>((set) => ({
  user: {
    email: '',
    name: '',
  },
  setUser(user: IUser) {
    set({ user });
  },
}));
