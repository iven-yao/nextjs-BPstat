import Form from "@/app/ui/events/edit-form";
import Breadcrumbs from "@/app/ui/events/breadcrumbs";
import { fetchMembers, fetchEventById } from "@/app/lib/data";
import { notFound } from "next/navigation";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: 'Edit Event',
  };
export default async function Page({params} : {params: {id: string}}) {
    const id = params.id;
    const [event, members] = await Promise.all([
        fetchEventById(id),
        fetchMembers()
    ]);
    if(!event) {
        notFound();
    }
    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    {label: 'Events', href: '/dashbaord/events'},
                    {
                        label: 'Edit Event',
                        href: `/dashboard/events/${id}/edit`,
                        active: true
                    }
                ]} 
            />
            <Form event={event} members={members} />
        </main>
    );
}