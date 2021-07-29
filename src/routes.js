import { Home, CompanyPage, ClientPage } from './pages';
import { MAIN_ROUTE, COMPANY_ROUTE, CLIENT_ROUTE } from './constants/constants';

export const publicRoutes = [
  {
    path: MAIN_ROUTE,
    Component: Home,
  },
  {
    path: COMPANY_ROUTE + '/:id',
    Component: CompanyPage,
  },
  {
    path: CLIENT_ROUTE + '/:id',
    Component: ClientPage,
  },
];
