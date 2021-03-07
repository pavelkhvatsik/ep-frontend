import React, { LazyExoticComponent } from 'react';
import { RouteProps } from 'react-router-dom';

const SignIn = React.lazy(() => import('./routes/signIn'));

interface RouteType {
  id: number;
  path: string;
  component: LazyExoticComponent<React.FC<RouteProps>> | React.FC;
  exact?: boolean;
}

const routes: Array<RouteType> = [
  { id: 1, path: '/sign-in', component: SignIn },
];

export default routes;
