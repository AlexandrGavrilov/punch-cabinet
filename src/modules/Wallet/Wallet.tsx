import React from 'react';
import { useWalletStore } from 'stores/wallet';

import { SDrawer } from './style';

export const Wallet = () => {
  const {
    isOpen, setIsOpen, account, ethBalance, bnbBalance,
  } = useWalletStore();

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <SDrawer onClose={handleClose} visible={isOpen}>
      Account:
      {account}
      <br />
      BNB balance:
      {' '}
      {bnbBalance}
      <br />
      ETH balance:
      {' '}
      {ethBalance}
    </SDrawer>
  );
};
