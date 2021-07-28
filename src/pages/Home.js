import React, { useEffect } from 'react';
import { Row, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getCompanies } from '../redux/actions/companyAction';

import { CompanyItem } from '../components';

const Home = () => {
  const dispatch = useDispatch();
  const companies = useSelector((state) => state.company.companies);

  useEffect(() => {
    dispatch(getCompanies());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Container fluid>
      <Row md={3} className="d-flex">
        {companies.map((company) => (
          <CompanyItem key={company.id} company={company} />
        ))}
      </Row>
    </Container>
  );
};

export default Home;
