import React from 'react';
import { useSelector } from 'react-redux';
import { ClientItem } from '../components';

const ClientPage = () => {
  const bets = useSelector((state) => state.client.bets);
  return <ClientItem clients={bets} />;
};

export default ClientPage;
