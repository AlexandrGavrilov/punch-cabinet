import React from 'react';

import { useTranslation } from 'shared/utils/translation';

import {
  SAuthElement, SAuthWrapper,
} from './style';
import { useAuthStore } from '../../stores/auth';

export const Auth = () => {
  const { t } = useTranslation();

  const { setSelectedAuth } = useAuthStore();

  const handleSelectAuth = (selectedAuth: 'register' | 'login') => async () => {
    setSelectedAuth(selectedAuth);
  };

  return (
    <SAuthWrapper>
      <SAuthElement size="large" type="primary" onClick={handleSelectAuth('register')}>
        {t('register')}
      </SAuthElement>
      <SAuthElement size="large" type="primary" theme="dark" onClick={handleSelectAuth('login')}>
        {t('login')}
      </SAuthElement>
    </SAuthWrapper>
  );
};
