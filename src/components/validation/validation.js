/* eslint-disable no-useless-escape */
function isValidEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
}

function isValidPassword(password) {
  const passwordPattern =
    /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\\-])[a-zA-Z\d!@#$%^&*()_+{}\[\]:;<>,.?~\\\-]{6,}$/;
  return passwordPattern.test(password);
}
export { isValidEmail, isValidPassword };

// function isValidPassword(password) {
//   const passwordPattern =
//     /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\\-]).{6,}$/;
//   return passwordPattern.test(password);
// }

// function isPasswordValidForRegistration(password) {
//   if (password.length < 6) {
//     return "Password must be at least 6 characters long.";
//   }
//   if (!/[A-Z]/.test(password)) {
//     return "Password must contain at least one capital letter.";
//   }
//   if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\\-]/.test(password)) {
//     return "Password must contain at least one special character.";
//   }
//   return null; // Password is valid
// }

// export { isValidEmail, isValidPassword };
