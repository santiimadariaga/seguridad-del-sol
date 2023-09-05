import { axiosDb } from '../../config/axios';

export async function setStatesRegister(nameC, emailC, passC) {
  // mando un post con las variables actualizadas a la db
  const inputLogin = await axiosDb.post('/register', {
    name: nameC,
    email: emailC,
    password: passC,
  });
  return inputLogin;
}
