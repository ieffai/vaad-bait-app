import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Navbar, Container, Button, Nav } from 'react-bootstrap';
import { setNavbar } from '../../redux/reducers/appReducer';

import { MAIN_ROUTE } from '../../constants/constants';
import './navbar.scss';

const NavBar = () => {
  const dispatch = useDispatch();
  const navBarView = useSelector((state) => state.app.navbar);

  function navbarHandler() {
    dispatch(setNavbar('company'));
  }
  function addCompanies() {
    console.log('company added');
  }
  function delCompanies() {
    console.log('company deleted');
  }

  return (
    <Navbar variant="dark">
      <Container>
        <NavLink
          className="navbar__brand"
          to={MAIN_ROUTE}
          style={{ color: 'white' }}
          onClick={navbarHandler}>
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
        {navBarView === 'address' && (
          <Nav className="ml-auto" style={{ color: 'white' }}>
            <Button className="mr-3" variant={'outline-light'} onClick={addCompanies}>
              Add address
            </Button>
            <Button variant={'outline-light'} onClick={delCompanies}>
              Delete address
            </Button>
          </Nav>
        )}
        {navBarView === 'client' && (
          <Nav className="ml-auto" style={{ color: 'white' }}>
            <Button className="mr-3" variant={'outline-light'} onClick={addCompanies}>
              Add client
            </Button>
            <Button variant={'outline-light'} onClick={delCompanies}>
              Delete client
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
};

export default NavBar;
