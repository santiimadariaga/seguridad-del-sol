import React from 'react';
import {
  BrowserRouter,
  Routes as ReactDomRoutes,
  Route,
} from 'react-router-dom';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Home from '../pages/Home/Home';

const Routes = () => {
  return (
    <BrowserRouter>
      <ReactDomRoutes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </ReactDomRoutes>
    </BrowserRouter>
  );
};

export default Routes;
