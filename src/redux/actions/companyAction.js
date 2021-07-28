import { setCompanies } from '../reducers/companyReducer';

import { $host } from '../../http/index';

export function getCompanies() {
  return async (dispatch) => {
    try {
      //loader on
      const response = await $host.get(`Request/companies`);
      dispatch(setCompanies(response.data));
    } catch (error) {
      console.log(error);
    } finally {
      //loader off
    }
  };
}
