import { Home, CompanyPage, StreetPage } from './pages';
import { MAIN_ROUTE, COMPANY_ROUTE, STREET_ROUTE } from './constants/constants';

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
    path: STREET_ROUTE + '/:id',
    Component: StreetPage,
  },
];
