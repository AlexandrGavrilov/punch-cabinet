import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { useUserStore } from 'stores/user';
import { SDrawer } from './style';

export const UserProfile: FC = () => {
  const { t } = useTranslation();
  const { setIsOpen, isOpen, user: { name } } = useUserStore();

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <SDrawer onClose={handleClose} visible={isOpen}>
      Name:
      {name}
    </SDrawer>
  );
};
