import { $host } from '../../http/index';
import { setStreets } from '../reducers/clientReducer';

export function getClients(companyId) {
  return async (dispatch) => {
    try {
      const response = await $host.get(`/HousingStock`, {
        params: {
          companyId,
        },
      });
      const data = response.data;
      const streets = data.reduce((res, { streetId, streetName, houseId, building, clients }) => {
        let target = res.find((row) => row.streetId === streetId);
        let house = {
          id: houseId,
          building: building,
        };

        if (!target) {
          target = { streetId, name: streetName, houses: [], clients };
          target.houses.push(house);
          res.push(target);
        }
        return res;
      }, []);
      dispatch(setStreets(streets));
    } catch (error) {
      console.log(error);
    }
  };
}

export function getLivers(phoneNumber) {
  return async (dispatch) => {
    try {
      const response = await $host.get(`/HousingStock/client`, {
        params: {
          phoneNumber,
        },
      });
      const data = response;
      console.log(data);
    } catch (error) {}
  };
}
