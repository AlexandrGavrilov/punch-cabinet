import create from 'zustand';
import Moralis from 'moralis';
import { moralisApp, moralisServer } from 'config/wallet';

import Web3 from 'web3';
import { IWalletStore } from './types';

Moralis.start({ serverUrl: moralisServer, appId: moralisApp });

export const useWalletStore = create<IWalletStore>((set) => {
  const setBalance = async (connector: any) => {
    const web3Eth = new Web3(await connector.getProvider());
    const web3BnbW = new Web3('https://bsc-dataseed1.binance.org:443');
    const web3Bnb = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545');

    const [address] = await web3Eth.eth.getAccounts();

    const ethBalance = web3Eth.utils.fromWei(await web3Eth.eth.getBalance(address), 'ether');
    // const ethBalance = web3Eth.utils.fromWei(await web3Eth.eth.getBalance(address), 'ether');
    const bnbWBalance = web3BnbW.utils.fromWei(await web3BnbW.eth.getBalance(address), 'ether');
    const bnbBalance = web3Bnb.utils.fromWei(await web3Bnb.eth.getBalance(address), 'ether');

    set({ ethBalance, bnbWBalance, bnbBalance });
  };

  const setCollection = async (account: string) => {
    const { result } = await Moralis.Web3API.account.getNFTs({ chain: 'eth', address: account });
    if (result) {
      result.forEach(({ metadata }) => {
        if (metadata) {
          console.log(JSON.parse(metadata), 'CHAIN');
        }
      });
    }

    // console.log(nft, www, 'COLLECTION');
    // const collection = await getCollection(account);
    // console.log(collection, 'COLLECTION');
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
    setCollection,
    isOpen: false,
  };
});
