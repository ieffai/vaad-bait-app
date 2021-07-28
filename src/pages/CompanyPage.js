import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getStreets } from '../redux/actions/companyAction';

const CompanyPage = () => {
  const currentCompany = useSelector((state) => state.company.currentCompany);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStreets());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <div>{currentCompany?.name}</div>;
};

export default CompanyPage;
