import type { NextApiHandler } from 'next';

const credentialsAuth: NextApiHandler = (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).end();
    return;
  }

  if (req.body.password === process.env.AUTH_WEB_SECRET && req.body.email === 'test@example.com') {
    const user: User = {
      name: 'Manuel',
      email: 'test@example.com',
      rol: 'superAdmin',
    };

    return res.status(200).json(user);
  }

  return res.status(401).end();
};

export default credentialsAuth;
