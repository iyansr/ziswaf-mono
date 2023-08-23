import omit from 'lodash/omit';
import { ZodError } from 'zod';

import { NextResponse } from 'next/server';

import { LoginSchema, loginSchema } from '@/modules/login/schema';
import prismaClient from '@/modules/shared/libs/database/prismaClient';
import { extractBody } from '@/modules/shared/utils/extractBody';
import { hashPassword } from '@/modules/shared/utils/password';

export const loginUserHandler = async (req: Request) => {
  try {
    const body = await extractBody<LoginSchema>(req);

    const { email, password } = await loginSchema.parseAsync(body);

    const user = await prismaClient.user.findUnique({
      where: { email },
      select: {
        id: true,
        image: true,
        email: true,
        address: true,
        district: true,
        password: true,
        phone: true,
        subDistrict: true,
        urbanVillage: true,
        postCode: true,
        name: true,
      },
    });

    const hashedPassword = await hashPassword(password);

    if (!user) {
      return NextResponse.json(
        { error: 'Email atau password salah / User tidak ditemukan' },
        { status: 400 },
      );
    }

    if (user.password !== hashedPassword) {
      return NextResponse.json(
        { error: 'Email atau password salah / User tidak ditemukan' },
        { status: 400 },
      );
    }

    return NextResponse.json({ user: omit(user, ['password']) });
  } catch (error) {
    console.log(error);
    if (error instanceof ZodError) {
      return NextResponse.json({ error: error.issues }, { status: 400 });
    }
    return NextResponse.json({ error: error?.message }, { status: 500 });
  }
};
