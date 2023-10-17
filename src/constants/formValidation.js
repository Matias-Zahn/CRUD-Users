const NAME = {
  required: {
    value: true,
    message: "Este campo es obligatorio",
  },
  maxLength: {
    value: 50,
    message: "Este campo acepta 50 carácteres como máximo",
  },
  minLength: {
    value: 2,
    message: "Este campo acepta 2 carácteres como minimo",
  },
};

const LAST_NAME = {
  required: {
    value: true,
    message: "Este campo es obligatorio",
  },
  maxLength: {
    value: 50,
    message: "Este campo acepta 50 carácteres como máximo",
  },
  minLength: {
    value: 2,
    message: "Este campo acepta 2 carácteres como minimo",
  },
};

const EMAIL = {
  required: {
    value: true,
    message: "Este campo es obligatorio",
  },
  pattern: {
    value:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Ingrese un correo válido",
  },
};

const PASSWORD = {
  required: {
    value: true,
    message: "Este campo es obligatorio",
  },
  maxLength: {
    value: 50,
    message: "Este campo acepta 50 carácteres como máximo",
  },
  minLength: {
    value: 2,
    message: "Este campo acepta 2 carácteres como minimo",
  },
  pattern: {
    value: /^(?=.*[A-Z])(?=.*[!@#$%^&*])/,
    message:
      "Ingrese una contraseña válida que contenga como minimo un caracter especial y una letra mayúscula",
  },
};

export { NAME, LAST_NAME, EMAIL, PASSWORD };
