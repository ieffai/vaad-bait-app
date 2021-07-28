import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Spinner } from 'react-bootstrap';
import { NavBar, AppRouter } from './components';

function App() {
  const loading = false; //to take from redux via useState
  if (loading) {
    return <Spinner animation={'grow'} />;
  }
  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
