import React from 'react';
import { Route, Routes } from 'react-router';

import App from '@/App';
import AuthLayout from '@/layouts/AuthLayout';
import SignIn from '@/pages/SignIn';
// import Users from '../pages/users/Users';
// import User from '../pages/user/User';
import { PATHS } from './paths';
import Watches from '@/pages/watches/Watches';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<App />}>
        <Route path={PATHS.WATCHES}>
          <Route index element={<Watches />} />
        </Route>
        {/* <Route path={PATHS.USERS}>
          <Route index element={<Users />} />
          <Route path=':id' element={<User />} />
        </Route> */}
      </Route>
      <Route element={<AuthLayout />}>
        <Route path={PATHS.SIGNIN} element={<SignIn />} />
        {/* <Route path='register' element={<Register />} /> */}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
