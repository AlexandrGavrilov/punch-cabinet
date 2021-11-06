import React, { ReactNode } from 'react';
import { Route } from 'react-router-dom';

import routes from './routes';
import { TFCs } from './types';

export const renderViewRoutes: TFCs<ReactNode> = () => routes.map(({ path, component: Comp, ...rest }) => (
  <Route key={`${path}`} path={path} {...rest}>
    <Comp path={path} {...rest} />
  </Route>
));
