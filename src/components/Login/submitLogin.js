import * as firebase from 'firebase';
import 'firebase/auth';
import validateLogin from './validateLogin';

/// submitLogin (email, password, setErrorLogin)
/// Takes the email and password from the login form and attempts to authenticate
/// with firebase auth. If there are errors run setErrorLogin to pass them back to
/// the callee state.
function submitLogin (email, password, setErrorLogin) {
  try {
    const [validatedEmail, validatedPassword] = validateLogin(email, password);

    firebase.auth().signInWithEmailAndPassword(validatedEmail, validatedPassword).catch(function(error) {
      // Handle Errors here.
      switch (error.code) {
        case "auth/wrong-password":
          setErrorLogin("This password is not correct.");
          break;
        case "auth/user-not-found":
          setErrorLogin("This user account was not found.");
          break;
        default:
          setErrorLogin(error.message);
          break;
      }
    });
  } catch (err) {
    setErrorLogin(err.message);
  }
}

export default submitLogin;
