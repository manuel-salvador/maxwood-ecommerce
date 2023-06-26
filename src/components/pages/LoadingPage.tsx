import PageLayout from '@/layouts/PageLayout';

import Loader from '../shared/Loader';

export default function LoadingPage() {
  return (
    <PageLayout title="Cargando">
      <div>
        <Loader />
      </div>
    </PageLayout>
  );
}
