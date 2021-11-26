import React from 'react';
import { useTranslation } from 'react-i18next';
import { Row, Col, Divider } from 'antd';
import { useWalletStore } from 'stores/wallet';

import { SDrawer, STitle, SItem } from './style';

export const Wallet = () => {
  const { t } = useTranslation();
  const {
    isOpen, setIsOpen, account, ethBalance, bnbBalance, bnbWBalance,
  } = useWalletStore();

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <SDrawer width={380} title={t('wallet')} onClose={handleClose} visible={isOpen}>
      <Divider orientation="left">
        <STitle>
          {t('account')}
        </STitle>
      </Divider>
      <SItem>
        {account}
      </SItem>
      <Divider orientation="left">
        <STitle>
          {t('balance')}
        </STitle>
      </Divider>
      <SItem>
        {`BNB(Wrapped): ${bnbWBalance}`}
      </SItem>
      <SItem>
        {`BNB: ${bnbBalance}`}
      </SItem>
      <SItem>
        {`ETH: ${ethBalance}`}
      </SItem>
    </SDrawer>
  );
};
