/// checkEmailValid(string email)
/// Takes in an email address and checks if it is valid. It is
/// invalid if it does not contain an @ character or at least one
/// . character after the @ character. It is also invalid if it
/// contains special characters (with the exception of the single)
/// @ character.
function checkEmailValid (email) {
  // Check that email contains a single @
  let numberOfAts = ((email || '').match(/@/g) || []).length;
  let containsOneAt = numberOfAts == 1;

  // Check that email contains no spaces
  let containsNoSpaces = ((email || '').match(/\s/g) || []).length == 0;

  // Check that the email contains no special characters
  let containsNoSpecialCharacters = ((email || '').match(/[!#$%^&*(),?":{}|<>]/g) || []).length == 0;

  // Check that the portion after @ contains atleast one .
  let containsDotAfterAt = false;
  let noDotsAtEnds = false;
  let hasBothHalves = false;

  if (containsOneAt) {
    let splitEmail = email.split('@');
    let beforeAt = splitEmail[0];
    let afterAt = splitEmail[1];
    containsDotAfterAt = (afterAt.match(/[.]/g) || []).length > 0;
    noDotsAtEnds = beforeAt[0] != '.' && afterAt[0] != '.' && beforeAt[beforeAt.length - 1] != '.' && afterAt[afterAt.length - 1] != '.';
    hasBothHalves = beforeAt.length > 0 && afterAt.length > 0;
  }

  return containsOneAt && containsNoSpaces && containsNoSpecialCharacters && containsDotAfterAt && noDotsAtEnds && hasBothHalves;
}

export default checkEmailValid;
