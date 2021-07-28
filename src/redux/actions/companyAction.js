import { setCompanies } from '../reducers/companyReducer';
import { setStreets } from '../reducers/addressReducer';

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
export function getStreets() {
  return async (dispatch) => {
    try {
      //loader on
      const response = await $host.get(`Request/streets`);
      dispatch(setStreets(response.data));
    } catch (error) {
      console.log(error);
    } finally {
      //loader off
    }
  };
}
