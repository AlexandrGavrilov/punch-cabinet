import React from 'react';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { Web3ReactProvider } from '@web3-react/core';
import { ethers } from 'ethers';
import { useWallet, UseWalletProvider } from 'use-wallet';

import { renderViewRoutes } from 'router/Router';
import { AppView } from 'router/routes/app';

import i18n from 'shared/utils/translation';

import 'antd/dist/antd.css';
import { ExternalProvider, JsonRpcFetchFunc } from '@ethersproject/providers/src.ts/web3-provider';
import { GlobalStyles } from './style';

const POLLING_INTERVAL = 12000;
const getLibrary = (provider: ExternalProvider | JsonRpcFetchFunc) => {
  const library = new ethers.providers.Web3Provider(provider);
  library.pollingInterval = POLLING_INTERVAL;
  return library;
};

function App() {
  return (
    <>
      <Web3ReactProvider getLibrary={getLibrary}>
        <I18nextProvider i18n={i18n}>
          <BrowserRouter>
            <GlobalStyles />
            <Switch>
              {renderViewRoutes()}
              <Route path="*">
                <Redirect to={`/${AppView}`} />
              </Route>
            </Switch>
          </BrowserRouter>
        </I18nextProvider>
      </Web3ReactProvider>
    </>
  );
}

export default App;
