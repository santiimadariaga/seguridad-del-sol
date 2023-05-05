import * as Yup from "yup";

// eslint-disable-next-line
const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export const recargasValidationSchema = Yup.object({
  name: Yup.string()
    .min(6, "Mínimo de caracteres: 6")
    .required("Campo Requerido"),
  email: Yup.string()
    .matches(regEmail, "Mail no valido")
    .required("Campo Requerido"),
  textarea: Yup.string()
    .min(8, "Mínimo de caracteres: 8")
    .required("Campo Requerido"),
});

// export const registerValidationSchema = Yup.object({
//   name: Yup.string().required("Campo requerido"),
//   email: Yup.string()
//     .matches(regEmail, "Mail no valido")
//     .required("Campo Requerido"),
//   password: Yup.string()
//     .min(6, "Mínimo de caracteres: 6")
//     .required("Campo Requerido"),
// });

// export const loginValidationSchema = Yup.object({
//   email: Yup.string()
//     .matches(regEmail, "Mail no valido")
//     .required("Campo Requerido"),
//   password: Yup.string()
//     .min(6, "Mínimo de caracteres: 6")
//     .required("Campo Requerido"),
// });

// export const forgotPasswordValidationSchema = Yup.object({
//   email: Yup.string()
//     .matches(regEmail, "Mail no valido")
//     .required("Campo Requerido"),
// });
