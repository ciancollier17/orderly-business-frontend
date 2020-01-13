import React from 'react';
import {Form, FormGroup, Input, Button, Label} from 'reactstrap'

function Login () {
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
      <FormGroup>
        <Label for="email">Email:</Label>
        <Input id="email" name="email" type="text" placeholder="user@example.com" />
      </FormGroup>
      <FormGroup>
        <Label for="password">Password:</Label>
        <Input id="password" name="password" type="password" placeholder="Password" />
      </FormGroup>
      <Button color="primary">Login</Button>
    </Form>
    </div>
  );
}

export default Login;
