import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCurrentStreet } from '../../redux/reducers/addressReducer';
import { setNavbar } from '../../redux/reducers/appReducer';
import { STREET_ROUTE } from '../../constants/constants';
import { Container } from 'react-bootstrap';

const StreetItem = ({ street }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  function openStreetHandler() {
    history.push(STREET_ROUTE + '/' + street.id);
    dispatch(setCurrentStreet(street));
    dispatch(setNavbar('houses'));
  }

  return (
    <Container onClick={openStreetHandler}>
      <div>{street.name}</div>
    </Container>
  );
};

export default StreetItem;
