const SET_CLIENTS = 'SET_CLIENTS';
const SET_CURRENT_HOUSE = 'SET_CURRENT_HOUSE';
const SET_ADDRESS_CLIENTS = 'SET_ADDRESS_CLIENTS';
const SET_STREETS = 'SET_STREETS';

const defaultState = {
  clients: [],
  currentHouse: null,
  addressClients: [],
  streets: [],
};

export default function companyReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_CLIENTS:
      return { ...state, clients: action.payload };
    case SET_CURRENT_HOUSE:
      return { ...state, currentHouse: action.payload };
    case SET_ADDRESS_CLIENTS:
      return { ...state, addressClients: action.payload };
    case SET_STREETS:
      return {
        ...state,
        streets: action.payload,
      };
    default:
      return state;
  }
}

export const setClients = (clients) => ({ type: SET_CLIENTS, payload: clients });
export const setCurrentHouse = (house) => ({ type: SET_CURRENT_HOUSE, payload: house });
export const setAddressClients = (clients) => ({ type: SET_ADDRESS_CLIENTS, payload: clients });
export const setStreets = (streets) => ({ type: SET_STREETS, payload: streets });
