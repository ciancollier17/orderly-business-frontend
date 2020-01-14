import React from 'react';
import {Form} from 'reactstrap';

function AuthForm (props) {
  const formContainerStyles = {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '100vh',
    justifyContent: 'center'
  };

  return (
    <div style={formContainerStyles}>
      <Form style={{width: '25%', border: '2px solid #000000', padding: '1rem'}}>
        <h1 style={{textAlign: "center"}}>Orderly</h1>
        {props.children}
      </Form>
    </div>
  );
}

export default AuthForm;
