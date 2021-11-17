import { Space } from 'antd';
import { Link, useParams } from 'react-router-dom';
import React, { FC } from 'react';

import { AppModules, AppView } from 'router/routes/app';
import { Auth } from 'modules/auth/Auth';
import { useTranslation } from 'shared/utils/translation';

import { SHeader, SMenu } from './style';
import { IHeaderProps } from './types';

export const Header: FC<IHeaderProps> = () => {
  const navItems = [AppModules.LADING, AppModules.ROAD_MAP];
  const { t } = useTranslation();
  const { module, ...re }: any = useParams();

  return (
    <SHeader>
      <Space size={50}>
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
        <Auth />
      </Space>
    </SHeader>
  );
};
