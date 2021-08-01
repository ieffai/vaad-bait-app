import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ClientItem } from '../components';
import { getLivers } from '../redux/actions/clientAction';

const ClientPage = () => {
  const clients = useSelector((state) => state.client.clients);
  console.log(clients);
  useEffect(() => {
    dispatch(getLivers());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // console.log(client);
  // const house = useSelector((state) => state.client.currentHouse);
  return <div />;
};

export default ClientPage;
