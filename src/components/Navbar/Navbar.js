import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';


class NavbarHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({isOpen: !this.props.isOpen})
  }

  render() {
    return (
      <Navbar color="secondary" className="rounded-0" dark expand="md">
        <Link to="/" className="navbar-brand">Food Picker</Link>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink to="/randomizer" className='nav-link' activeClassName="bg-dark rounded">Randomizer</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default NavbarHeader;
