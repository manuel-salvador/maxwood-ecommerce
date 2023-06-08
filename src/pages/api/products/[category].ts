import type { NextApiRequest, NextApiResponse } from 'next';

import { promises as fs } from 'fs';
import path from 'path';

import { IProduct } from '@/types';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const category = req.query.category as string;

  const jsonDirectory = path.join(process.cwd(), 'public');
  const fileContents = await fs.readFile(jsonDirectory + '/productos.json', 'utf8');
  const { productos }: { productos: IProduct[] } = JSON.parse(fileContents);

  const dataFiltered = productos.filter(
    (product) => product.categoria.toLowerCase() === category.toLowerCase(),
  );

  res.status(200).json(dataFiltered);
}
