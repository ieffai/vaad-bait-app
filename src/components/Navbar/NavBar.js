import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Container, Button, Nav } from 'react-bootstrap';

import { MAIN_ROUTE } from '../../constants/constants';
import './navbar.scss';

const NavBar = () => {
  function clearCompanies() {
    console.log('companies cleared');
  }

  return (
    <Navbar variant="dark">
      <Container>
        <NavLink className="navbar__brand" to={MAIN_ROUTE} style={{ color: 'white' }}>
          {' '}
          Dispex task{' '}
        </NavLink>
        <Nav style={{ color: 'white' }}>
          <Button variant={'outline-light'} onClick={clearCompanies}>
            Clear
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
