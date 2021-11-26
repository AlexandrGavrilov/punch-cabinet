export interface IWalletStore {
    ethBalance?: string;
    bnbWBalance?: string;
    bnbBalance?: string;
    isOpen: boolean;
    account?: string;
    collection?: any;
    setBalance(connector: any): void;
    setCollection(collection: string): void;
    setIsOpen(isOpen: boolean): void;
    setAccount(account: string): void;
}
