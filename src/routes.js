import { Home, CompanyPage } from './pages';
import { MAIN_ROUTE, COMPANY_ROUTE } from './constants/constants';

export const publicRoutes = [
  {
    path: MAIN_ROUTE,
    Component: Home,
  },
  {
    path: COMPANY_ROUTE + '/:id',
    Component: CompanyPage,
  },
];
