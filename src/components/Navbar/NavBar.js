import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Navbar, Container, Button, Nav } from 'react-bootstrap';

import { MAIN_ROUTE } from '../../constants/constants';
import './navbar.scss';

const NavBar = () => {
  const navBarView = useSelector((state) => state.app.navbar);
  function addCompanies() {
    console.log('company added');
  }
  function delCompanies() {
    console.log('company deleted');
  }

  return (
    <Navbar variant="dark">
      <Container>
        <NavLink className="navbar__brand" to={MAIN_ROUTE} style={{ color: 'white' }}>
          {' '}
          Dispex task{' '}
        </NavLink>

        {navBarView === 'company' && (
          <Nav className="ml-auto" style={{ color: 'white' }}>
            <Button className="mr-3" variant={'outline-light'} onClick={addCompanies}>
              Add company
            </Button>
            <Button variant={'outline-light'} onClick={delCompanies}>
              Delete company
            </Button>
          </Nav>
        )}
        {navBarView === 'street' && (
          <Nav className="ml-auto" style={{ color: 'white' }}>
            <Button className="mr-3" variant={'outline-light'} onClick={addCompanies}>
              Add street
            </Button>
            <Button variant={'outline-light'} onClick={delCompanies}>
              Delete street
            </Button>
          </Nav>
        )}
        {navBarView === 'houses' && (
          <Nav className="ml-auto" style={{ color: 'white' }}>
            <Button className="mr-3" variant={'outline-light'} onClick={addCompanies}>
              Add house
            </Button>
            <Button variant={'outline-light'} onClick={delCompanies}>
              Delete house
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
};

export default NavBar;
