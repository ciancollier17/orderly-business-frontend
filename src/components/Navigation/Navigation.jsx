import React from 'react';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  Button} from 'reactstrap';

function Navigation () {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">Orderly</NavbarBrand>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavbarText style={{marginLeft: "0.5rem", marginRight: "0.5rem"}}>
              <Link to="/">Orders</Link>
            </NavbarText>
            <NavbarText style={{marginLeft: "0.5rem", marginRight: "0.5rem"}}>
              <Link to='/analytics'>Analytics</Link>
            </NavbarText>
            <NavbarText style={{marginLeft: "0.5rem", marginRight: "0.5rem"}}>
              <Link to="/settings">Settings</Link>
            </NavbarText>
          </Nav>
        </Collapse>
        <span style={{position: "absolute", top: "0.3rem", right: "0.3rem"}}>
          <NavbarText style={{marginTop: "0.2rem"}}>Cian @ White Hart</NavbarText>
          <Button style={{marginLeft: "0.5rem", marginRight: "0.5rem"}} color="danger">Logout</Button>
          <NavbarToggler onClick={toggle} />
        </span>
      </Navbar>
    </div>
  );
}

export default Navigation;
