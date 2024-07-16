import * as Yup from "yup";

export const validation = Yup.object({
  name: Yup.string().min(3).required("Please Enter Name"),
  email: Yup.string()
    .email("Please Eter Valid Email")
    .required("Please Enter Email"),
  subject: Yup.string().required("Please Enter Subject"),
  message: Yup.string().required("Please Enter Message"),
});
