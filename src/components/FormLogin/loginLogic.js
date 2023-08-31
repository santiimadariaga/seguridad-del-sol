import axios from 'axios';

// const DBURL = 'http://localhost:8000/db';
const DBURL = 'https://seguridad-del-sol-api.onrender.com/db';

export const loginLogic = async (errorRef, loginRef) => {
  // valores de los inputs usando el registerRef
  const emailValueL = loginRef.current[0].value;
  const passValueL = loginRef.current[1].value;

  async function nonExistUser(success) {
    if (success) {
      errorRef.current.classList.add('showSuccess');
      errorRef.current.innerHTML = success;
      // ENVIAR A LA PAGINA DE USER
      return;
    }

    errorRef.current.classList.remove('showSuccess');
    errorRef.current.classList.add('showError');
    errorRef.current.innerHTML = 'Email o contraseña incorrectos';

    setTimeout(() => {
      errorRef.current.classList.remove('showError');
    }, 5000);
  }

  // estados con los valores de los inputs
  if (emailValueL && passValueL) {
    try {
      const user = await axios.post(DBURL + '/login', {
        email: emailValueL,
        password: passValueL,
      });

      const result = user.data.user;

      // SI NO  ENCUENTRA EL EMAIL O LA PASSWORD ES INCORRECTA:
      if (result === 'Wrong password' || result === 'Email not found') {
        await nonExistUser();
        return;
      }

      // ACCESS SUCCESS ==>
      nonExistUser('Acceso correcto, ingresando...');
      // console.log('ACCESS SUCCESS');
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  } else {
    await nonExistUser();
  }
  return;
};
