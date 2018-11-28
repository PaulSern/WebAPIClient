import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import '../App.css';

class Navigation extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="">ALL API</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem>
            <Link to="/">Home</Link>
          </NavItem>
          <NavDropdown title="Hero">
            <Link to="herosearch">Hero Search</Link>
            <MenuItem divider />
            <Link to="herohistory">Hero History</Link>
          </NavDropdown>
        </Nav>
      </Navbar>
    );
  }
}

export default Navigation;
