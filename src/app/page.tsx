import { headers } from 'next/headers';
import AddCompanyButton from '@/app/components/add-company-button';

export default async function Home() {
  console.log(Object.fromEntries((await headers()).entries()));

  return (
    <main>
      <h1 className="text-xl">Home page {new Date().toTimeString()}</h1>
      <AddCompanyButton />
    </main>
  );
}
