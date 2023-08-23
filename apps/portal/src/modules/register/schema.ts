import { z } from 'zod';

export const registerSchema = z
  .object({
    email: z
      .string({ required_error: 'Email harus diisi' })
      .email({ message: 'Email tidak valid' }),
    phone: z.string({ required_error: 'Nomor telepon harus diisi' }).min(10),
    name: z.string({ required_error: 'Nama harus diisi' }),
    address: z.string({ required_error: 'Alamat harus diisi' }),
    subDistrict: z.string({ required_error: 'Kecamatan harus diisi' }),
    urbanVillage: z.string({ required_error: 'Kelurahan harus diisi' }),
    postCode: z.string({ required_error: 'Kode pos harus diisi' }),
    password: z.string({ required_error: 'Password harus diisi' }).min(8),
    confirmPassword: z.string({ required_error: 'Konfirmasi password harus diisi' }).min(8),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Password harus sama',
    path: ['confirmPassword'],
  });

export type RegisterSchema = z.infer<typeof registerSchema>;
