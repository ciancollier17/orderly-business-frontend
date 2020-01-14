import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
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
import * as firebase from 'firebase/app';
import 'firebase/auth';

function Navigation () {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const user = useSelector(full_state => full_state.user);

  function logout () {
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
    }).catch(function(error) {
      // An error happened.
      alert(error);
    });
  }

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
          <Button style={{marginLeft: "0.5rem", marginRight: "0.5rem"}} color="danger" onClick={logout}>Logout</Button>
          <NavbarToggler onClick={toggle} />
        </span>
      </Navbar>
      {!user ? <Redirect to='/auth/login' /> : ""}
    </div>
  );
}

export default Navigation;
