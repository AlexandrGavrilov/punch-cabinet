export interface IUser {
    email: string;
    name: string;
}

export interface IUserStore {
    user: IUser,
    isOpen: boolean,
    setIsOpen(isOpen: boolean): void,
    setUser(user: IUser): void
}
