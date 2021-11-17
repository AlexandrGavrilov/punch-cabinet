import React, { Suspense, FC } from 'react';
import { Layout, Spin } from 'antd';
import { Switch, Route } from 'react-router-dom';

import { IRouteComponentProps } from 'router/types';

import { SWrapper } from './style';
import { Header } from './Header';

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
                <Component {...rest} />
              </Suspense>
            </Route>
          ))}

          {DefaultModule && (

            <Route {...restDefaultModule} path={`${prefix}${defaultModule.path}`}>
              <Suspense fallback={<Spin />}>
                <Header />
                <DefaultModule {...restDefaultModule} />
              </Suspense>
            </Route>
          )}
        </Switch>
      </Layout>
    </SWrapper>
  );
};
