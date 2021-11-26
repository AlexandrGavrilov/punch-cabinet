import React, { useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { useTranslation } from 'react-i18next';

import { infuraId } from 'config/wallet';

import { useWalletStore } from 'stores/wallet';

import { SButton } from 'shared/styles';
import Moralis from 'moralis';

export const WalletConnect = () => {
  const { t } = useTranslation();
  const {
    activate, account, connector,
  } = useWeb3React();

  const {
    setBalance, setIsOpen, setAccount, setCollection,
  } = useWalletStore();

  useEffect(() => {
    if (account) {
      // fetch(`https://api.opensea.io/api/v1/assets?owner=${account}`).then(async (res) => console.log(await res.json(), 'OCEAN'));
      // (async () => {
      //   // @ts-ignore
      //   await Moralis.start();
      //   // @ts-ignore
      //   const userEthNFTs = await Moralis.Web3API.account.getNFTs(account);
      //   console.log(userEthNFTs, 'WWWWWWWWWW');
      // })();
      setCollection(account);
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
