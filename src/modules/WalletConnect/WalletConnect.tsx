import React, { useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { useTranslation } from 'react-i18next';

import { infuraId } from 'config/wallet';

import { useWalletStore } from 'stores/wallet';

import { SButton } from 'shared/styles';

export const WalletConnect = () => {
  const { t } = useTranslation();
  const {
    activate, account, connector,
  } = useWeb3React();

  const { setBalance, setIsOpen, setAccount } = useWalletStore();

  useEffect(() => {
    if (account) {
      setBalance(connector);
      setAccount(account);
    }
  }, [account]);

  const handleConnect = () => {
    const walletconnect = new WalletConnectConnector({
      infuraId,
      qrcode: true,
    });
    activate(walletconnect);
  };

  const handleOpenWallet = () => {
    setIsOpen(true);
  };
  return (
    <>
      {account
        ? <SButton size="large" onClick={handleOpenWallet}>{t('wallet')}</SButton>
        : (
          <SButton
            size="large"
            onClick={handleConnect}
          >
            {t('connect_wallet')}
          </SButton>
        )}
    </>
  );
};
