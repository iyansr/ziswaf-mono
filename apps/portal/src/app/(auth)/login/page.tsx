import React from 'react';

import LoginForm from '@/modules/login/components/LoginForm';

const LoginPage = () => {
  return (
    <div className="px-4 py-6">
      <h2 className="font-medium text-center text-slate-500">
        Yuk Masuk untuk nikmati kemudahan berdonasi dan akses fitur lainnya
      </h2>

      <LoginForm />
    </div>
  );
};

export default LoginPage;
