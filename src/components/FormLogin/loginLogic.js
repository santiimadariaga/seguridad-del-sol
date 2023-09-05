import accessSuccess from './accessSuccess';
import { axiosDb } from '../../config/axios';

export const loginLogic = async (errorRef, loginRef) => {
  // valores de los inputs usando el registerRef
  const emailValueL = loginRef.current[0].value;
  const passValueL = loginRef.current[1].value;

  async function existUser(msgSuccess, token) {
    if (msgSuccess) {
      errorRef.current.classList.add('showSuccess');
      errorRef.current.innerHTML = msgSuccess;
      accessSuccess(token);
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
      const user = await axiosDb.post('/login', {
        email: emailValueL,
        password: passValueL,
      });

      const result = user.data;

      // SI NO  ENCUENTRA EL EMAIL O LA PASSWORD ES INCORRECTA:
      if (
        result.user === 'Wrong password' ||
        result.user === 'Email not found'
      ) {
        await existUser();
        return;
      }

      // ACCESS SUCCESS ==>
      existUser('Acceso correcto, ingresando...', result.token);
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  } else {
    await existUser();
  }
  return;
};
