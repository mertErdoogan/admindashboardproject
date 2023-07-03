import { ReactElement } from 'react';
import FullBgLayout from '../components/Layout/FullBgLayout';
import type { NextPageWithLayout } from './_app';
import LoginPopup from '../components/Login/LoginPopup';

const Login: NextPageWithLayout = () => {
  return (
    <>
      <div className="text-yellow-500">
        <LoginPopup />
      </div>
    </>
  );
};

Login.getLayout = function getLayout(page: ReactElement) {
  return <FullBgLayout>{page}</FullBgLayout>;
};

export default Login;
