import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Spinner } from 'react-bootstrap';
import { NavBar, AppRouter } from './components';

function App() {
  const loading = useSelector((state) => state.app.loader);

  if (loading) {
    return <Spinner animation={'grow'} variant={'success'} />;
  }
  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
