import React from 'react';

import RegisterForm from '@/modules/register/components/RegisterForm';

const RegisterPage = () => {
  return (
    <div className="px-4 py-6">
      <h2 className="font-medium text-center text-slate-500">
        Yuk Daftar untuk nikmati kemudahan berdonasi dan akses fitur lainnya
      </h2>

      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
