import type { NextApiRequest, NextApiResponse } from 'next';

import { promises as fs } from 'fs';
import path from 'path';

import { IProduct } from '@/types';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const jsonDirectory = path.join(process.cwd(), 'public');
  const fileContents = await fs.readFile(jsonDirectory + '/productos.json', 'utf8');
  const { productos }: { productos: IProduct[] } = JSON.parse(fileContents);

  const query = req.query.search as string;

  if (query) {
    const productsFiltered = productos.filter((product) => {
      const matchName = product.nombre.toLowerCase().includes(query.toLowerCase());
      const matchCategory = product.categoria.toLowerCase().includes(query.toLowerCase());
      const matchSubCategory = product.subCategoria.toLowerCase().includes(query.toLowerCase());
      return matchName || matchCategory || matchSubCategory;
    });
    return res.status(200).json(productsFiltered);
  }

  return res.status(200).json(productos);
}
