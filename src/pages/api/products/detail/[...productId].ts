import type { NextApiRequest, NextApiResponse } from 'next';

import { promises as fs } from 'fs';
import path from 'path';

import { IProduct } from '@/types';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const productId = req.query.productId as string;

  const jsonDirectory = path.join(process.cwd(), 'public');
  const fileContents = await fs.readFile(jsonDirectory + '/productos.json', 'utf8');
  const { productos }: { productos: IProduct[] } = JSON.parse(fileContents);

  const product = productos.find((product) => product.id === parseInt(productId));

  const relatedProducts = productos
    .filter((p) => p.subCategoria === product?.subCategoria && p.id !== product.id)
    .sort(() => Math.random() - 0.5)
    .slice(0, 4);

  res.status(200).json({ product, relatedProducts });
}
