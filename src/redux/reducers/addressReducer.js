const SET_STREETS = 'SET_STREETS';
const SET_CURRENT_STREET = 'SET_CURRENT_STREET';

const defaultState = {
  streets: [],
  currentStreet: null,
};

export default function companyReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_STREETS:
      return { ...state, streets: action.payload };
    case SET_CURRENT_STREET:
      return { ...state, currentStreet: action.payload };
    default:
      return state;
  }
}

export const setStreets = (streets) => ({ type: SET_STREETS, payload: streets });
export const setCurrentStreet = (street) => ({ type: SET_CURRENT_STREET, payload: street });
