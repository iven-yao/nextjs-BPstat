'use server';
import { sql } from '@vercel/postgres';
import {custom, z} from 'zod'
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';

export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
  ) {
    try {
      await signIn('credentials', formData);
    } catch (error) {
      if (error instanceof AuthError) {
        switch (error.type) {
          case 'CredentialsSignin':
            return 'Invalid credentials.';
          default:
            return 'Something went wrong.';
        }
      }
      throw error;
    }
  }

// This is temporary until @types/react-dom is updated
export type State = {
    errors?: {
      member_id?: string[];
      description?: string[];
      category?: string[];
      date?: string[];
    };
    message?: string | null;
};

const FormSchema = z.object({
    id: z.string(),
    member_id: z.string({invalid_type_error: 'Please select a member.',}),
    description: z.string({required_error:'Please enter something about this event'}).min(1, 'Please enter something about this event'),
    category: z.enum(['special', 'stage','tvshow','music'],{ invalid_type_error: 'Please select an invoice status.'}),
    date: z.coerce.date()
});

const CreateEvent = FormSchema.omit({id: true});
const UpdateEvent = FormSchema.omit({id: true});

export async function createEvent(prevState: State, formData: FormData) {
    // Validate form using Zod
    const validatedFields = CreateEvent.safeParse({
      member_id: formData.get('member_id'),
      description: formData.get('description'),
      category: formData.get('category'),
      date: Date.parse(formData.get('date')?.toString()||"")
    });
   
    // If form validation fails, return errors early. Otherwise, continue.
    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: 'Missing Fields. Failed to Create Invoice.',
      };
    }
   
    // Prepare data for insertion into the database
    const { member_id, description, category, date } = validatedFields.data;
    // Insert data into the database
    try {
      await sql`
        INSERT INTO events (member_id, description, category, date)
        VALUES (${member_id}, ${description}, ${category}, ${date.toISOString().slice(0,10)})
      `;
    } catch (error) {
      // If a database error occurs, return a more specific error.
      return {
        message: 'Database Error: Failed to Create Event.',
      };
    }
   
    // Revalidate the cache for the events page and redirect the user.
    revalidatePath('/dashboard/events');
    redirect('/dashboard/events');
}

export async function updateEvent(id:string, prevState: State, formData: FormData) {
    try {
        const validatedFields = UpdateEvent.safeParse({
            member_id: formData.get('member_id'),
            description: formData.get('description'),
            category: formData.get('category'),
            date: formData.get('date')
          });
        if(!validatedFields.success) {
            return {
                errors: validatedFields.error.flatten().fieldErrors,
                message: 'Missing Fields. Failed to Edit Event.',
            };
        }
        const {member_id, description, category, date} = validatedFields.data;

        await sql`
            UPDATE events
            SET member_id = ${member_id}, description = ${description}, category = ${category}, date = ${date.toISOString().slice(0,10)}
            WHERE id = ${id}
        `;

        revalidatePath('/dashboard/events');
    } catch(e) {
        return { message: 'Database Error: Failed to Update Event.' };
    }

    redirect('/dashboard/events');
}

export async function deleteEvent(id: string) {
    try{
        await sql`DELETE FROM events WHERE id = ${id}`;
        revalidatePath('/dashboard/events');
        return { message: 'Deleted Event.' };
    } catch(e) {
        return { message: 'Database Error: Failed to Delete Event' };
    }
}