import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

type IBreadcrumbs = { href: string; text: string }[];

export default function Breadcrumb() {
  const [breadcrumbs, setBreadcrumbs] = useState<IBreadcrumbs | []>([]);
  const router = useRouter();

  const generateBreadCrumbs = () => {
    const asPathNestedRoutes = router.asPath.split('/').filter((v) => v.length > 0);

    const crumblist = asPathNestedRoutes.map((subpath, idx) => {
      const href = '/' + asPathNestedRoutes.slice(0, idx + 1).join('/');
      const text = subpath;

      return { href, text };
    });

    // Add in a default "Home" crumb for the top-level
    return [{ href: '/', text: 'Inicio' }, ...crumblist];
  };

  useEffect(() => {
    const breadcrumbsList = generateBreadCrumbs();

    setBreadcrumbs(breadcrumbsList);
  }, [router]);

  return (
    <div className="hidden md:block px-6 my-3" aria-label="breadcrumb">
      <ul className="flex">
        {breadcrumbs.map((crumb, idx) =>
          breadcrumbs.length - 1 === idx ? (
            <li key={crumb.text} className="capitalize cursor-default">
              <span>{crumb.text}</span>
            </li>
          ) : (
            <li key={crumb.text} className="capitalize">
              <Link href={crumb.href} className="link-animation">
                {crumb.text}
              </Link>
              <span className="mx-1">/</span>
            </li>
          ),
        )}
      </ul>
    </div>
  );
}
