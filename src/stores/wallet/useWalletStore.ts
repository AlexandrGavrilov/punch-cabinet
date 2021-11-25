import create from 'zustand';

import Web3 from 'web3';
import { IWalletStore } from './types';

export const useWalletStore = create<IWalletStore>((set) => {
  const setBalance = async (connector: any) => {
    const web3Eth = new Web3(await connector.getProvider());
    const web3Bnb = new Web3('https://bsc-dataseed1.binance.org:443');

    const [address] = await web3Eth.eth.getAccounts();

    const ethBalance = web3Eth.utils.fromWei(await web3Eth.eth.getBalance(address), 'ether');
    const bnbBalance = web3Bnb.utils.fromWei(await web3Bnb.eth.getBalance(address), 'ether');

    set({ ethBalance, bnbBalance });
  };

  const setIsOpen = (isOpen: boolean) => {
    set({ isOpen });
  };
  const setAccount = (account: string) => {
    set({ account });
  };
  return {
    setBalance,
    setIsOpen,
    setAccount,
    isOpen: false,
  };
});
