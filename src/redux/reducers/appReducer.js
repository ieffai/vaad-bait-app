const SHOW_LOADER = 'SHOW_LOADER';
const HIDE_LOADER = 'HIDE_LOADER';
const SET_NAVBAR = 'SET_NAVBAR';

const defaultState = {
  loader: false,
  navbar: 'company',
};

export default function appReducer(state = defaultState, action) {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, loader: true };
    case HIDE_LOADER:
      return { ...state, loader: false };
    case SET_NAVBAR:
      return { ...state, navbar: action.payload };
    default:
      return state;
  }
}

export const showLoader = () => ({ type: SHOW_LOADER });
export const hideLoader = () => ({ type: HIDE_LOADER });
export const setNavbar = (payload) => ({ type: SET_NAVBAR, payload });
