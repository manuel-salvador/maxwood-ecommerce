import { useRouter } from 'next/router';
import React from 'react';

export default function DetailPage() {
  const {
    query: { productId },
  } = useRouter();

  console.log(productId);
  return <div>DetailPage {productId}</div>;
}
