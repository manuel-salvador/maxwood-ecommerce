import PageLayout from '@/layouts/PageLayout';

import Loader from '../shared/Loader';

export default function LoadingPage() {
  return (
    <PageLayout title="Cargando">
      <div className="h-full w-full flex justify-center items-center">
        <Loader />
      </div>
    </PageLayout>
  );
}
