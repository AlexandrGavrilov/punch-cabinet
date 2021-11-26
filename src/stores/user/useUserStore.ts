import create from 'zustand';

import { IUserStore, IUser } from './types';

export const useUserStore = create<IUserStore>((set) => ({
  isOpen: false,
  user: {
    email: '',
    name: '',
  },
  setUser(user: IUser) {
    set({ user });
  },
  setIsOpen(isOpen: boolean) {
    set({ isOpen });
  },
}));
