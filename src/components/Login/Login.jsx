import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {Form, FormGroup, Input, Button, Label, Alert} from 'reactstrap';
import {Redirect} from 'react-router-dom';
import submitLogin from './submitLogin';

function Login () {
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const [errorLogin, setErrorLogin] = useState("");
  const user = useSelector(full_state => full_state.user);

  const formContainerStyles = {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '100vh',
    justifyContent: 'center'
  };

  return (
    <div style={formContainerStyles}>
    <Form style={{width: '40%', border: '2px solid #000000', padding: '1rem'}}>
      <h1 style={{textAlign: "center"}}>Orderly</h1>
      {errorLogin ? <Alert color="danger">{errorLogin}</Alert> : <span></span>}
      <FormGroup>
        <Label for="email">Email:</Label>
        <Input id="email" name="email" type="text" placeholder="user@example.com" onChange={(e) => setEmailLogin(e.target.value)} />
      </FormGroup>
      <FormGroup>
        <Label for="password">Password:</Label>
        <Input id="password" name="password" type="password" placeholder="Password" onChange={(e) => setPasswordLogin(e.target.value)} />
      </FormGroup>
      <Button color="primary" onClick={() => submitLogin(emailLogin, passwordLogin, setErrorLogin)}>Login</Button>
    </Form>
    {user ? <Redirect to='/' /> : ""}
    </div>
  );
}

export default Login;
