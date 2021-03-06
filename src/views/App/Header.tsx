import { Link, useParams } from 'react-router-dom';
import React, { FC } from 'react';

import { AppModules, AppView } from 'router/routes/app';

import { Auth } from 'modules/auth/Auth';
import { UserProfile } from 'modules/UserProfile';

import { LanguageSwitcher } from 'shared/components/LanguageSwitcher';

import { useTranslation } from 'shared/utils/translation';
import { useAuthStore } from 'stores/auth';

import logoUrl from 'assets/img/logo.png';

import { useWindowSize } from 'utils/useWindowSize';
import { media } from 'utils/media';

import { WalletConnect } from 'modules/WalletConnect';

import { SButton } from 'shared/styles';
import { useUserStore } from 'stores/user';

import { IHeaderProps } from './types';
import {
  SHeader, SMenu, SContentWrapper, SLogoWrapper, SLogo, STitle,
} from './style';

export const Header: FC<IHeaderProps> = () => {
  const navItems = [AppModules.LADING, AppModules.ROAD_MAP];
  const { t } = useTranslation();
  const { module, ...re }: any = useParams();

  const { isAuth } = useAuthStore();

  const { width } = useWindowSize();

  const { setIsOpen } = useUserStore();

  const handleOpen = () => {
    setIsOpen(true);
  };

  const logo = (
    <SLogoWrapper>
      <SLogo src={logoUrl} />
      <STitle>{t('logo_title')}</STitle>
    </SLogoWrapper>
  );
  return (
    <SHeader>
      {width > media.tablet && logo}
      <SMenu inlineCollapsed mode="horizontal" defaultSelectedKeys={[navItems.find(((route) => route === module)) || navItems[0]]}>
        {navItems.map((path) => (
          <SMenu.Item key={path}>
            <Link
              to={{
                pathname: `/${AppView}/${path}`,
              }}
            >
              {t(path)}
            </Link>
          </SMenu.Item>
        ))}
      </SMenu>
      <SContentWrapper>
        {width < media.tablet && logo}
        {isAuth ? (
          <>
            <SButton size="large" onClick={handleOpen}>
              {t('user_profile')}
            </SButton>
            {' '}
            <WalletConnect />
          </>
        ) : <Auth />}
        <LanguageSwitcher />
      </SContentWrapper>
    </SHeader>
  );
};
