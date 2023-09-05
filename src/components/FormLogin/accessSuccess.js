import Cookies from 'js-cookie';

const accessSuccess = (token) => {
  console.log('token==> ', token);
  // guardo el token en una cookie que expira en un dia
  Cookies.set('Auth', token, { expires: 1 });

  // cookie seteada con token, crear user page con auth
};

export default accessSuccess;
