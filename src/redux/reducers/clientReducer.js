const SET_CLIENTS = 'SET_CLIENTS';
const SET_CURRENT_CLIENT = 'SET_CURRENT_CLIENT';
const SET_ADDRESS_CLIENTS = 'SET_ADDRESS_CLIENTS';
const SET_STREETS = 'SET_STREETS';

const defaultState = {
  clients: [],
  currentClient: null,
  addressClients: [],
  streets: [],
  bets: [],
};

export default function companyReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_CLIENTS:
      return { ...state, clients: action.payload };
    case SET_CURRENT_CLIENT:
      return { ...state, currentClient: action.payload };
    case SET_ADDRESS_CLIENTS:
      return { ...state, addressClients: action.payload };
    case SET_STREETS:
      return {
        ...state,
        streets: action.payload,
        bets: action.payload.map((client) => client.clients.map((client) => client.name)),
      };
    default:
      return state;
  }
}

export const setClients = (clients) => ({ type: SET_CLIENTS, payload: clients });
export const setCurrentClient = (client) => ({ type: SET_CURRENT_CLIENT, payload: client });
export const setAddressClients = (clients) => ({ type: SET_ADDRESS_CLIENTS, payload: clients });
export const setStreets = (streets) => ({ type: SET_STREETS, payload: streets });
