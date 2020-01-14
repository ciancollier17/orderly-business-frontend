import checkEmailValid from './checkEmailValid';

/// validateLogin (string email, string password)
/// Perform validation checks on the provided email and password
/// throw an exception if the details entered are invalid. Return
/// modified email and password if valid with modifications.
function validateLogin (email, password) {
  if (!email) {
    throw new Error("You must enter your email.");
  }

  if (!password) {
    throw new Error("You must enter your password.");
  }

  if (!checkEmailValid(email)) {
    throw new Error("The email you entered is invalid.");
  }

  return [email, password];
}

export default validateLogin;
