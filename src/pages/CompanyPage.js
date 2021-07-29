import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { CLIENT_ROUTE, MAIN_ROUTE } from '../constants/constants';
import { useSelector, useDispatch } from 'react-redux';
import { getClients } from '../redux/actions/clientAction';

import { Container, Row, Col, Button } from 'react-bootstrap';
import { showLoader, hideLoader } from '../redux/reducers/appReducer';

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
          <ul>
            {streets.map((street, index) => (
              <li key={index}>
                {street.name}
                <ul>
                  {street.houses.map((house) => (
                    <li
                      style={{ cursor: 'pointer' }}
                      key={house.building}
                      id={house.id}
                      onClick={(e) => history.push(CLIENT_ROUTE + '/' + e.target.id)}>
                      {' '}
                      House {house.building}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default CompanyPage;
