import StatusLabel, { Status } from './components/status-label';
import { headers } from 'next/headers';

export default async function Home() {
  console.log(Object.fromEntries((await headers()).entries()));

  return (
    <main>
      <h1 className="text-xl">Home page {new Date().toTimeString()}</h1>
      <StatusLabel status={Status.Active}>Active</StatusLabel>
      <StatusLabel status={Status.NotActive}>Not Active</StatusLabel>{' '}
      <StatusLabel status={Status.Pending}>Pending</StatusLabel>{' '}
      <StatusLabel status={Status.Suspended}>Suspended</StatusLabel>
    </main>
  );
}
