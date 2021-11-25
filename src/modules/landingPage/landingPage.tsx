import React from 'react';
import { Space } from 'antd';
import { useTranslation } from 'react-i18next';

import { useWindowSize } from 'utils/useWindowSize';
import { media } from 'utils/media';
import { SAuthElement } from 'modules/auth/style';
import { useAuthStore } from 'stores/auth';
import {
  SWrapper,
  SHeadDescription,
  SHeadTitle,
  SHeadWrapper,
  SHeadImage,
  SBodyWrapper,
  SBodyTitle,
  SBodyDescription,
  SSpecialistsWrapper,
  SSpecialists,
  SSpecialist,
  SSpecialistsTitle,
} from './style';

export const LandingPage = () => {
  const { t } = useTranslation();
  const { width } = useWindowSize();

  const { setSelectedAuth } = useAuthStore();
  const handleSignIn = () => {
    setSelectedAuth('login');
  };
  return (
    <SWrapper>
      <SHeadWrapper>
        <Space size={width > media.tablet ? 50 : 20}>
          <SHeadImage>IMAGE</SHeadImage>
          <SHeadTitle>ELF</SHeadTitle>
          <SHeadDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </SHeadDescription>
        </Space>
      </SHeadWrapper>
      <SBodyWrapper>
        <SBodyTitle>{t('main_page_body_title')}</SBodyTitle>
        <SBodyDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          <SAuthElement size="large" type="primary" theme="dark" onClick={handleSignIn}>
            {t('login')}
          </SAuthElement>
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </SBodyDescription>
      </SBodyWrapper>
      <SSpecialistsWrapper>
        <SSpecialistsTitle>{t('our_specialists')}</SSpecialistsTitle>
        <SSpecialists>
          {Array(4).fill('').map(() => (
            <SSpecialist>
              <img src="https://www.meme-arsenal.com/memes/9e775a2fa0a0aebaa6aedbc8437b9dca.jpg" alt="spec_photo" />
              <p>123</p>
            </SSpecialist>
          ))}
        </SSpecialists>
      </SSpecialistsWrapper>
    </SWrapper>
  );
};
