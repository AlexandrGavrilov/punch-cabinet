import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Divider } from 'antd';

import { useUserStore } from 'stores/user';
import { SDrawer, STitle, SItem } from './style';

export const UserProfile: FC = () => {
  const { t } = useTranslation();
  const { setIsOpen, isOpen, user: { name } } = useUserStore();

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <SDrawer width={380} title={t('profile')} onClose={handleClose} visible={isOpen}>
      <Divider orientation="left">
        <STitle>{t('personal_information')}</STitle>
      </Divider>
      <SItem>
        {`Name: ${name}`}
      </SItem>
    </SDrawer>
  );
};
