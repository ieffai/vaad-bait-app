import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { CLIENT_ROUTE, MAIN_ROUTE } from '../constants/constants';
import { useSelector, useDispatch } from 'react-redux';
import { getClients } from '../redux/actions/clientAction';

import { Container, Row, Col, Button } from 'react-bootstrap';
import { showLoader, hideLoader } from '../redux/reducers/appReducer';
import { ClientItem } from '../components';

const CompanyPage = () => {
  const history = useHistory();
  const currentCompany = useSelector((state) => state.company.currentCompany);
  const streets = useSelector((state) => state.client.streets);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showLoader());
    dispatch(getClients(currentCompany.id));
    dispatch(hideLoader());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Container className="mt-5">
      <Row>
        <Col md={3}>
          <div>{currentCompany?.name}</div>
          <Button
            className="mt-5"
            variant={'outline-dark'}
            onClick={() => history.push(MAIN_ROUTE)}>
            Go back
          </Button>
        </Col>
        <Col md={5}>
          {streets.map((street) => (
            <ClientItem key={street.streetId} street={street} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default CompanyPage;
