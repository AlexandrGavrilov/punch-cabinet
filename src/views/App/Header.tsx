import { Space } from 'antd';
import { Link, useParams } from 'react-router-dom';
import React, { FC } from 'react';

import { AppModules, AppView } from 'router/routes/app';

import { Auth } from 'modules/auth/Auth';
import { UserProfile } from 'modules/UserProfile';

import { useTranslation } from 'shared/utils/translation';
import { useAuthStore } from 'stores/auth';

import { SHeader, SMenu } from './style';
import { IHeaderProps } from './types';

export const Header: FC<IHeaderProps> = () => {
  const navItems = [AppModules.LADING, AppModules.ROAD_MAP];
  const { t } = useTranslation();
  const { module, ...re }: any = useParams();

  const { isAuth } = useAuthStore();

  return (
    <SHeader>
      <SMenu mode="horizontal" defaultSelectedKeys={[navItems.find(((route) => route === module)) || navItems[0]]}>
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
      {
        isAuth ? <UserProfile /> : <Auth />
      }
    </SHeader>
  );
};
