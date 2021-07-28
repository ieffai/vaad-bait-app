const SET_STREETS = 'SET_STREETS';

const defaultState = {
  streets: [],
};

export default function companyReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_STREETS:
      return { ...state, streets: action.payload };
    default:
      return state;
  }
}

export const setStreets = (streets) => ({ type: SET_STREETS, payload: streets });
