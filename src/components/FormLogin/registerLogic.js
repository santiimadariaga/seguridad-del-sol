import axios from 'axios';

// const DBURL = 'http://localhost:8000/db';
const DBURL = 'https://seguridad-del-sol-api.onrender.com/db';

export async function setStatesRegister(nameC, emailC, passC) {
  // mando un post con las variables actualizadas a la db
  const inputLogin = await axios.post(DBURL + '/register', {
    name: nameC,
    email: emailC,
    password: passC,
  });
  return inputLogin;
}
