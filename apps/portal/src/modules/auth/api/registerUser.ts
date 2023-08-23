import omit from 'lodash/omit';
import { ZodError } from 'zod';

import { ApiError } from 'next/dist/server/api-utils';
import { NextResponse } from 'next/server';

import { RegisterSchema, registerSchema } from '@/modules/register/schema';
import prismaClient from '@/modules/shared/libs/database/prismaClient';
import { extractBody } from '@/modules/shared/utils/extractBody';
import { hashPassword } from '@/modules/shared/utils/password';

export const registerUserHandler = async (req: Request) => {
  try {
    const body = await extractBody<Omit<RegisterSchema, 'confirmPassword'>>(req);

    const parsedBody = await registerSchema.parseAsync(body);

    const user = await prismaClient.user.findUnique({
      where: { email: parsedBody.email },
    });

    if (user) {
      return NextResponse.json(
        { error: `User dengan email ${parsedBody.email} sudah ada` },
        { status: 400 },
      );
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, confirmPassword, ...rest } = parsedBody;
    const hashedPassword = await hashPassword(password);

    const newUser = await prismaClient.user.create({
      data: {
        ...rest,
        password: hashedPassword,
      },
    });

    return new Response(JSON.stringify({ user: omit(newUser, ['password']) }), {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
      status: 200,
    });
  } catch (error) {
    console.log(error);
    if (error instanceof ZodError) {
      return NextResponse.json({ error: error.issues }, { status: 400 });
    }
    return NextResponse.json({ error: (error as ApiError)?.message }, { status: 400 });
  }
};
