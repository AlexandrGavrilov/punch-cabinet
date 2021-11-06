import { FC, ComponentType } from 'react';
import { RouteProps } from 'react-router-dom';

export interface IModule extends Omit<RouteProps, 'component'> {
  exactLink?: boolean;
  title?: string;
  to?: string;
  iconName?: string;
  iconComponent?: any;
  component: ComponentType<any>;
}

export interface IRoute extends RouteProps {
  defaultModule: Omit<RouteProps, 'component'> & { component: ComponentType<any> };
  modules: IModule[];
  component: FC<IRouteComponentProps>;
}
export type IRouteComponentProps = Omit<IRoute, 'component'>;

export interface IParams {
  [key: string]: string | number | boolean;
}

export interface IQueryParams {
  [key: string]: IParams;
}

export type TFCs<T> = () => T[];
