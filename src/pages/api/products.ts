import type { NextApiRequest, NextApiResponse } from 'next';

import { promises as fs } from 'fs';
import path from 'path';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const jsonDirectory = path.join(process.cwd(), 'public');
  const fileContents = await fs.readFile(jsonDirectory + '/productos.json', 'utf8');
  const data = JSON.parse(fileContents);

  res.status(200).json(data);
}
