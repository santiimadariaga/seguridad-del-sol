import axios from 'axios';

const DBURL = 'http://localhost:8000/db';

export const loginLogic = async (errorRef, loginRef) => {
  // valores de los inputs usando el registerRef
  const emailValueL = loginRef.current[0].value;
  const passValueL = loginRef.current[1].value;

  async function nonExistUser() {
    errorRef.current.classList.add('showError');
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

      // SI NO  ENCUENTRA EL EMAIL O LA PASSWORD ES INCORRECTA:
      if (user.data[0] === 'W' || user.data[0] === 'E') {
        await nonExistUser();
        return;
      }

      // ACCESS SUCCESS ==>
      // navigate('/login');
      console.log('ACCESS SUCCESS');
      console.log(user.data[0]);
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  } else {
    await nonExistUser();
  }
  return;
};
