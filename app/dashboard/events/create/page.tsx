import Form from '@/app/ui/events/create-form';
import Breadcrumbs from '@/app/ui/events/breadcrumbs';
import { fetchMembers } from '@/app/lib/data';
import { Metadata } from 'next';
export const metadata: Metadata = {
    title: 'Create Invoice',
  };
export default async function Page() {
  const members = await fetchMembers();
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Events', href: '/dashboard/events' },
          {
            label: 'Create Event',
            href: '/dashboard/events/create',
            active: true,
          },
        ]}
      />
      <Form members={members} />
    </main>
  );
}