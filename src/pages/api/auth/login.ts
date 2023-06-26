import type { NextApiHandler } from 'next';

import { IUser } from '@/types';

const credentialsAuth: NextApiHandler = (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).end();
    return;
  }

  if (req.body.password === process.env.AUTH_WEB_SECRET && req.body.email === 'test@example.com') {
    const user: IUser = {
      name: 'Manuel Salvador',
      email: 'test@example.com',
      role: 'superAdmin',
    };

    return res.status(200).json(user);
  }

  return res.status(401).end();
};

export default credentialsAuth;
