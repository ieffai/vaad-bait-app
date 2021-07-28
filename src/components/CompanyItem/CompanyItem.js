import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Card, Col } from 'react-bootstrap';
import { COMPANY_ROUTE } from '../../constants/constants';
import { setCurrentCompany } from '../../redux/reducers/companyReducer';
import { setNavbar } from '../../redux/reducers/appReducer';

const CompanyItem = ({ company }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  function openCompanyHandler() {
    history.push(COMPANY_ROUTE + '/' + company.id);
    dispatch(setCurrentCompany(company));
    dispatch(setNavbar('street'));
  }
  return (
    <div>
      <Col className="mt-3" onClick={openCompanyHandler}>
        <Card border={'success'}>
          <div className="text-black-50 mt-1 justify-content-between align-items-center">
            {company.name}
          </div>
          <div className="d-flex align-items-center">{company.name}</div>
        </Card>
      </Col>
    </div>
  );
};

export default CompanyItem;
