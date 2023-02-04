function isEmailValid(email) {
  let regexp = /([a-zA-Z0-9._-]+)@([a-zA-Z0-9._-]+)\.([a-zA-Z0-9_-]+)/g;
  if (regexp.test(email)) {
    return "Email is valid";
  } else {
    return "Email is invalid";
  }
}

let email1 = "juan.delacruz@kodego";

console.log(isEmailValid(email1));
