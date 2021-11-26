import React, { Suspense, FC } from 'react';
import { Layout, Spin } from 'antd';
import { Switch, Route } from 'react-router-dom';

import { IRouteComponentProps } from 'router/types';

import { AuthPopups } from 'modules/AuthPopups';
import { Wallet } from 'modules/Wallet';
import { SWrapper, SComponentWrapper } from './style';
import { Header } from './Header';
import { UserProfile } from '../../modules/UserProfile';

export const App: FC<IRouteComponentProps> = ({
  modules,
  path: prefix,
  defaultModule,
}) => {
  const { component: DefaultModule, ...restDefaultModule } = defaultModule;

  return (
    <SWrapper>
      <Layout>
        <Switch>
          {modules.map(({
            path, to, component: Component, ...rest
          }) => (
            <Route key={`${path}`} path={`${prefix}${path}`} {...rest}>
              <Suspense fallback={<Spin />}>
                <Header />
                <AuthPopups />
                <SComponentWrapper>
                  <Component {...rest} />
                </SComponentWrapper>
                <Wallet />
                <UserProfile />
              </Suspense>
            </Route>
          ))}

          {DefaultModule && (
            <Route {...restDefaultModule} path={`${prefix}${defaultModule.path}`}>
              <Suspense fallback={<Spin />}>
                <Header />
                <AuthPopups />
                <SComponentWrapper>
                  <DefaultModule {...restDefaultModule} />
                </SComponentWrapper>
                <Wallet />
                <UserProfile />
              </Suspense>
            </Route>
          )}
        </Switch>
      </Layout>
    </SWrapper>
  );
};
