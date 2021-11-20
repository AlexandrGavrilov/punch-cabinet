export interface IUser {
    email: string;
    name: string;
}

export interface IUserStore {
    user: IUser,
    setUser(user: IUser): void
}
