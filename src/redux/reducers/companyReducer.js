const SET_COMPANIES = 'SET_COMPANIES';
const SET_COMPANY = 'SET_COMPANY';

const defaultState = {
  companies: [],
  currentCompany: null,
};

export default function companyReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_COMPANIES:
      return { ...state, companies: action.payload };
    case SET_COMPANY:
      return { ...state, currentCompany: action.payload };
    default:
      return state;
  }
}

export const setCompanies = (companies) => ({ type: SET_COMPANIES, payload: companies });
export const setCurrentCompany = (company) => ({ type: SET_COMPANY, payload: company });
