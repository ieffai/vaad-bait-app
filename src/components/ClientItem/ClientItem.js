import React from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { CLIENT_ROUTE } from '../../constants/constants';
import { Row, Card, Col, Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { setClients, setCurrentHouse } from '../../redux/reducers/clientReducer';
import { setNavbar } from '../../redux/reducers/appReducer';

const ClientItem = ({ street }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { streetId, name, houses, clients } = street;

  function openHouseHandler() {
    history.push(CLIENT_ROUTE + '/' + streetId);
    dispatch(setCurrentHouse(street));
    dispatch(setNavbar('house'));
  }

  return (
    <Container>
      {
        <Row>
          Street {name}
          <Col md={3}>
            {houses.map((house, index) => (
              <Row key={index}>
                ID # {house.id}, house number is {house.building}
                {clients.map((client, index) => {
                  dispatch(setClients(client));
                  return (
                    <Card key={index} client={client} onClick={openHouseHandler}>
                      Name : {client.name}
                      Phone : {client.phone}
                      Email : {client.email}
                    </Card>
                  );
                })}
              </Row>
            ))}
          </Col>
        </Row>
      }
    </Container>
  );
};

export default ClientItem;
