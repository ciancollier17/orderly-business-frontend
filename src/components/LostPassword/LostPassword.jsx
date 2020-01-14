import React, {useState} from 'react';
import {FormGroup, Input, Button, Label, Alert} from 'reactstrap';
import {Link} from 'react-router-dom';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import AuthForm from '../AuthForm/AuthForm';

function LostPassword () {
  const [email, setEmail] = useState("");
  const [messageSent, setMessageSent] = useState(false);
  const [errorSending, setErrorSending] = useState(false);

  function sendPasswordReset (email) {
    firebase.auth().sendPasswordResetEmail(email).then(function() {
      // Email sent.
      setMessageSent(true);
      setErrorSending(false);
    }).catch(function(error) {
      // An error happened.
      switch (error.code) {
        case "auth/user-not-found":
          setErrorSending("There is no user matching this email.");
          break;
        default:
          setErrorSending(error.message);
          break;
      }
    });
  }

  return (
    <AuthForm>
      {messageSent ? <Alert color="success">Password reset instructions sent to your email. <Link to="/auth/login">Back to Login</Link></Alert> : ""}
      {errorSending ? <Alert color="danger">{errorSending}</Alert> : ""}
      <FormGroup>
        <Label for="test">Email:</Label>
        <Input id="email" type="text" onChange={(e) => setEmail(e.target.value)} />
      </FormGroup>
      <Button color="primary" onClick={() => sendPasswordReset(email)}>Send Password Reset Email</Button>
    </AuthForm>
  );
}

export default LostPassword;
