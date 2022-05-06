export default function validateInfo(values) {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = "Username reqiured";
  }

  if (!values.email) {
    errors.email = "Email reqiured";
  }

  if (!values.password) {
    errors.password = "Password reiured";
  } else if (values.password.length < 6) {
    errors.password = "Password needs to be 6 or more characters";
  }

  if (!values.password2) {
    errors.password2 = "Password reqiured";
  } else if (values.password2 !== values.password) {
    errors.password2 = "Passwords do not match";
  }

  return errors;
}
