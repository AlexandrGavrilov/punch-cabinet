import React, { Suspense, FC, useState } from 'react';
import {
  Layout, Button, Spin, Space,
} from 'antd';
import { Switch, Route, Link } from 'react-router-dom';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';

import { AppModules, AppView, routes } from 'router/routes/app';
import { IRouteComponentProps } from 'router/types';

import { useTranslation } from 'shared/utils/translation';

import {
  SHeader, SWrapper, SMenu, SAuthElement, SAuthWrapper, SSelectedAuth, SBackground,
} from './style';

const { Header, Content, Footer } = Layout;

export const App: FC<IRouteComponentProps> = ({
  modules,
  path: prefix,
  defaultModule,
}) => {
  const [selectedAuth, setSelectedAuth] = useState<null | string>(null);
  const navItems = [AppModules.LADING, AppModules.ROAD_MAP];
  const { t } = useTranslation();
  const { component: DefaultModule, ...restDefaultModule } = defaultModule;

  const header = (
    <SHeader>
      <Space size={50}>
        <SMenu mode="horizontal" defaultSelectedKeys={['1']}>
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
        <SAuthWrapper>
          <AnimateSharedLayout>
            <SAuthElement
              layoutId="register"
              onClick={() => setSelectedAuth('register')}
            >
              {t('register')}
            </SAuthElement>
            <SAuthElement layoutId="login" onClick={() => setSelectedAuth('login')}>
              {t('login')}
            </SAuthElement>
            <AnimatePresence>
              {selectedAuth && <SBackground layout onClick={() => setSelectedAuth(null)} />}
            </AnimatePresence>
            <AnimatePresence
              presenceAffectsLayout
            >
              {selectedAuth && (
                <SSelectedAuth
                  layout="size"
                  layoutId={selectedAuth}
                />
              )}
            </AnimatePresence>
          </AnimateSharedLayout>
        </SAuthWrapper>
      </Space>
    </SHeader>

  );

  return (
    <SWrapper>
      <Layout>
        {header}
        <Switch>
          {modules.map(({
            path, to, component: Component, ...rest
          }) => (
            <Route key={`${path}`} path={`${prefix}${path}`} {...rest}>
              <Suspense fallback={<Spin />}>
                <Component {...rest} />
              </Suspense>
            </Route>
          ))}

          {DefaultModule && (

            <Route {...restDefaultModule} path={`${prefix}${defaultModule.path}`}>
              <Suspense fallback={<Spin />}>
                <DefaultModule {...restDefaultModule} />
              </Suspense>
            </Route>
          )}
        </Switch>
      </Layout>
    </SWrapper>
  );
};
