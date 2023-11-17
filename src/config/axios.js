import axios from 'axios';
import Cookies from 'js-cookie';

// Creo una instancia de Axios para la db
export const axiosDb = axios.create({
  // baseURL: 'https://seguridad-del-sol-api.onrender.com/db',
  baseURL: 'http://localhost:8000/db', // Cambia la URL según sea necesario
});

// Obtengo el token de la cookie
if (!Cookies.get()) {
  console.log('Token not found');
}
const token = Cookies.get('Auth');

// Configuro el header de auth adentro de esta instancia
axiosDb.defaults.headers.common['Auth'] = token;
