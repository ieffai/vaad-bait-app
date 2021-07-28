import React from 'react';
import { useSelector } from 'react-redux';

const StreetPage = () => {
  const currentStreet = useSelector((state) => state.address.currentStreet);
  return <div>{currentStreet?.name}</div>;
};

export default StreetPage;
