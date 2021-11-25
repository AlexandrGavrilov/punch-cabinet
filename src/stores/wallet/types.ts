export interface IWalletStore {
    ethBalance?: string;
    bnbBalance?: string;
    isOpen: boolean;
    account?: string;
    setBalance(connector: any): void;
    setIsOpen(isOpen: boolean): void;
    setAccount(account: string): void;
}
