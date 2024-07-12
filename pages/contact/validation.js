export default function validation(values) {
  const errors = {};
  const email_pattern =
    "/^[a-zA-Z0-9. _%+-]+@[a-zA-Z0-9. -]+\\. [a-zA-Z]{2,}$/";

  if (values.name === "") {
    errors.name = "name is required";
  }
  if (values.email === "") {
    errors.email = "email is required";
  } else if (!email_pattern.test(values.email)) {
    errors.email = "email is not correct";
  }

  if (values.subject === "") {
    errors.subject = "subject is required";
  }

  if (values.message === "") {
    errors.message = "message is required";
  }
  return errors;
}
