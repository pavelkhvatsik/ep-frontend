import React, { LazyExoticComponent } from 'react';
import { RouteProps } from 'react-router-dom';

import SignIn from './routes/SignIn';
import SignUp from './routes/SignUp';

interface RouteType {
  id: number;
  path: string;
  component: LazyExoticComponent<React.FC<RouteProps>> | React.FC;
  exact?: boolean;
}

const routes: Array<RouteType> = [
  { id: 0, path: '/sign-in', component: SignIn },
  { id: 1, path: '/sign-up', component: SignUp },
];

export default routes;
