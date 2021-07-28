import { $host } from '../../http/index';
import { setStreets } from '../reducers/addressReducer';

export function getStreets() {
  return async (dispatch) => {
    try {
      const response = await $host.get(`Request/streets`);
      dispatch(setStreets(response.data));
    } catch (error) {
      console.log(error);
    }
  };
}
