import { SignIn } from 'modules/auth/signIn';
import { SignUp } from 'modules/auth/signUp';

import { App } from 'views/App';

import { IRoute } from '../../types';

import { AppModules, AppView } from './constants';
import { LandingPage } from '../../../modules/landingPage';
import { RoadMap } from '../../../modules/RoadMap';

export const routes: IRoute = {
  path: `/:view(${AppView})`,
  component: App,
  defaultModule: {
    path: '/',
    component: LandingPage,
  },
  modules: [
    {
      path: `/:module(${AppModules.LADING})`,
      exactLink: true,
      component: LandingPage,
    },
    {
      path: `/:module(${AppModules.ROAD_MAP})`,
      component: RoadMap,
    },
  ],
};
