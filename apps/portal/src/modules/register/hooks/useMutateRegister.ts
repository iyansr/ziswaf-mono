import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { User } from 'database';

import { RegisterSchema } from '@/modules/register/schema';
import { K_BASE_URL } from '@/modules/shared/constants';

const useMutateRegister = () => {
  return useMutation({
    mutationFn: (body: RegisterSchema) => {
      return axios.request<{ user: Omit<User, 'password'> }>({
        method: 'POST',
        data: body,
        baseURL: K_BASE_URL,
        url: '/api/user/register',
      });
    },
  });
};

export default useMutateRegister;
