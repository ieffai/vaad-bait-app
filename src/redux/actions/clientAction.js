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
      const streets = data.reduce(
        (result, { streetId, streetName, houseId, building, clients }) => {
          let target = result.find((row) => row.streetId === streetId);
          let house = {
            id: houseId,
            building: building,
          };
          if (!target) {
            target = { streetId, name: streetName, houses: [], clients };
            target.houses.push(house);
            target.clients.push(clients);
            result.push(target);
          }
          return result;
        },
        [],
      );
      dispatch(setStreets(streets));
    } catch (error) {
      console.log(error);
    }
  };
}
