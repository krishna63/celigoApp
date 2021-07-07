import { lazy } from 'react';
import Home from './Home';
import SignIn from './SignIn';
import { ABOUT } from './common/constants.js';

const About = lazy(() => import("./About"));
const AppRoutes = [
  {
    displayLabel: 'Home',
    routePath: '/',
    componentName: Home,
    uid: 'home',
    exact: true,
  },
  {
    routePath: ['/signin', '/signin:rd'],
    componentName: SignIn,
    uid: 'signin',
    hide: true,
  },
  {
    displayLabel: 'About',
    routePath: `/${ABOUT}`,
    componentName: About,
    uid: ABOUT,
    exact: false,
    subRoutes: [{
      displayLabel: 'Company',
      routePath: `/${ABOUT}/company`,
      componentName: About,
      uid: `${ABOUT}_company`,
      exact: true,
    },
    {
      displayLabel: 'Jobs',
      routePath: `/${ABOUT}/jobs`,
      componentName: About,
      uid: `${ABOUT}_jobs`,
      exact: true,
    },
    {
      displayLabel: 'Edit Jobs',
      routePath: `/${ABOUT}/editJobs`,
      componentName: About,
      uid: `${ABOUT}_editJobs`,
      exact: true,
    }
    ]
  },
];
export default AppRoutes;
