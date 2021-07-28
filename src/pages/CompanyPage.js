import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getStreets } from '../redux/actions/addressAction';

import { StreetItem } from '../components';
import { Container, Row, Col } from 'react-bootstrap';
import { showLoader, hideLoader } from '../redux/reducers/appReducer';

const CompanyPage = () => {
  const currentCompany = useSelector((state) => state.company.currentCompany);
  const streets = useSelector((state) => state.address.streets);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showLoader());
    dispatch(getStreets());
    dispatch(hideLoader());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Container className="mt-5">
      <Row>
        <Col md={4}>
          <div>{currentCompany?.name}</div>
        </Col>
        <Col md={4}>
          {streets.map((street) => (
            <StreetItem key={street.id} street={street} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default CompanyPage;
