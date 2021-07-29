import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';

const ClientItem = () => {
  const bets = useSelector((state) => state.client.bets);

  return (
    <Container>
      {bets.map((bet, index) => (
        <div key={index}>{bet}</div>
      ))}
    </Container>
  );
};

export default ClientItem;
