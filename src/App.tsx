import React from 'react';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';

import { renderViewRoutes } from 'router/Router';
import { AppView } from 'router/routes/app';

import i18n from 'shared/utils/translation';

import 'antd/dist/antd.css';

function App() {
  return (
    <>
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <Switch>
            {renderViewRoutes()}
            <Route path="*">
              <Redirect to={`/${AppView}`} />
            </Route>
          </Switch>
        </BrowserRouter>
      </I18nextProvider>
    </>
  );
}

export default App;
