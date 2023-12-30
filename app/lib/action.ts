'use server';
import { sql } from '@vercel/postgres';
import {custom, z} from 'zod'
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const FormSchema = z.object({
    id: z.string(),
    customerId: z.string(),
    amount: z.coerce.number(),
    status: z.enum(['pending', 'paid']),
    date: z.string()
});

const CreateInvoice = FormSchema.omit({id: true, date: true});
const UpdateInvoice = FormSchema.omit({id: true, date: true});

export async function createInvoice(formData: FormData) {
    const rawFormData = {
        customerId: formData.get('customerId'),
        amount: formData.get('amount'),
        status: formData.get('status')
    };
    // Alternative way
    // const rawFormData = Object.fromEntries(formData.entries());

    try{
        const {customerId, amount, status} = CreateInvoice.parse(rawFormData);
        const amountInCents = amount * 100;
        const date = new Date().toISOString().split('T')[0];

        await sql`
            INSERT INTO invoices (customer_id, amount, status, date)
            VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
        `;

        revalidatePath('/dashboard/invoices');
    } catch (e) {
        return { message: 'Database Error: Failed to Create Invoice.'};
    }

    redirect('/dashboard/invoices');
}

export async function updateInvoice(id:string, formData: FormData) {
    try {
        const rawFormData = Object.fromEntries(formData.entries());
        const {customerId, amount, status} = UpdateInvoice.parse(rawFormData);
        const amountInCents = amount * 100;

        await sql`
            UPDATE invoices
            SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
            WHERE id = ${id}
        `;

        revalidatePath('/dashboard/invoices');
    } catch(e) {
        return { message: 'Database Error: Failed to Update Invoice.' };
    }

    redirect('/dashboard/invoices');
}

export async function deleteInvoice(id: string) {
    try{
        await sql`DELETE FROM invoices WHERE id = ${id}`;
        revalidatePath('/dashboard/invoices');
        return { message: 'Deleted Invoice.' };
    } catch(e) {
        return { message: 'Database Error: Failed to Delete Invoice' };
    }
}