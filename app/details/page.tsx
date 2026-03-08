import { Suspense } from 'react';
import Detail from './Detail';

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Detail />
    </Suspense>
  );
}
