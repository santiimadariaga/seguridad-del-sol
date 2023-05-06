import * as Yup from "yup";

// eslint-disable-next-line
const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// eslint-disable-next-line
const regPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

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

export const loginValidationSchema = Yup.object({
  email: Yup.string()
    .matches(regEmail, "Mail no valido")
    .required("Campo Requerido"),
  password: Yup.string()
    .matches(regPass, "Min 1 mayus, 1 minus, 1 número y 8 caracteres")
    .required("Campo Requerido"),
});
