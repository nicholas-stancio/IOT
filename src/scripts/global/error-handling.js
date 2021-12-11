/* eslint-disable no-useless-escape */
/* eslint-disable no-use-before-define */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function checkError({
  register, user, rePassword, emailInvalidId,
  passwordInvalidId, rePasswordInvalidId,
}) {
  const status = [];
  if (register === true) {
    status[0] = checkEmail({ email: user.id, emailInvalidId });
    status[1] = checkPassword({ password: user.password, passwordInvalidId });
    status[2] = checkRePassword({ password: user.password, rePassword, rePasswordInvalidId });
  } else {
    status[0] = checkEmail({ email: user.id, emailInvalidId });
    status[1] = checkPassword({ password: user.password, passwordInvalidId });
  }
  if (status.indexOf(false) !== -1) { // check if there is false in array
    return false;
  }
  return true;
}

function checkEmail({ email, emailInvalidId }) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    $(emailInvalidId).hide();
    return true;
  }
  $(emailInvalidId).html('Please enter a valid email');
  $(emailInvalidId).show();
  return false;
}

function checkPassword({ password, passwordInvalidId }) {
  if (password.length > 7) {
    $(passwordInvalidId).hide();
    return true;
  }
  $(passwordInvalidId).html('Password must be atleast 8 characters');
  $(passwordInvalidId).show();
  return false;
}

function checkRePassword({ password, rePassword, rePasswordInvalidId }) {
  if (password === rePassword) {
    $(rePasswordInvalidId).hide();
    return true;
  }
  $(rePasswordInvalidId).html('Password must be the same');
  $(rePasswordInvalidId).show();
  return false;
}

export default checkError;
