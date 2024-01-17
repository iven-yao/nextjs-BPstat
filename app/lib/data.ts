import { sql } from '@vercel/postgres';
import {
  User,
  TopAlbums,
  Events,
  EventForm,
  MemberField,
  Singles,
  Albums
} from './definitions';
import { formatCurrency } from './utils';
import { unstable_noStore as noStore } from 'next/cache';

export async function fetchSaleChart() {
  try {
    console.log('Fetching albums data...');
    // mock wait
    await new Promise((resolve) => setTimeout(resolve, 2500));

    const data = await sql<TopAlbums> `SELECT * FROM albums ORDER BY sale DESC LIMIT 8`;
    console.log('Data fetch completed after 2.5 seconds.');

    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch albums data');
  }
}

export async function fetchRecentEvents() {
  noStore();
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const data = await sql<Events>`
      SELECT events.id, events.description, events.date, events.category, members.name, members.image_url
      FROM events
      JOIN members ON events.member_id = members.id
      WHERE events.date >= CURRENT_DATE
      ORDER BY events.date ASC
      LIMIT 5`;

    return data.rows;
  } catch(error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch events data.');
  }
}

export async function fetchBPCardData() {
  noStore();
  try {
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const totalSalesPromise = sql`SELECT SUM(sale) AS total FROM albums`;
    const totalViewsPromise = sql`SELECT SUM(views) AS total FROM singles`;
    const totalStreamingsPromise = sql`SELECT SUM(streamings) AS total FROM singles`;
    const upcomingEventsPromise = sql`SELECT COUNT(*) FROM events WHERE date >= CURRENT_DATE`;

    const data = await Promise.all([
      totalSalesPromise,
      totalViewsPromise,
      totalStreamingsPromise,
      upcomingEventsPromise
    ]);

    const totalSales = Number(data[0].rows[0].total ?? '0');
    const totalViews = Number(data[1].rows[0].total ?? '0');
    const totalStreamings = Number(data[2].rows[0].total ?? '0');
    const upcomingEvents = Number(data[3].rows[0].count ?? '0');

    return {
      totalSales,
      totalViews,
      totalStreamings,
      upcomingEvents
    };
  } catch(error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch card data.');
  }
}

export async function fetchCardData() {
  noStore();
  try {

    await new Promise((resolve) => setTimeout(resolve, 2000));
    // You can probably combine these into a single SQL query
    // However, we are intentionally splitting them to demonstrate
    // how to initialize multiple queries in parallel with JS.
    const invoiceCountPromise = sql`SELECT COUNT(*) FROM invoices`;
    const customerCountPromise = sql`SELECT COUNT(*) FROM customers`;
    const invoiceStatusPromise = sql`SELECT
         SUM(CASE WHEN status = 'paid' THEN amount ELSE 0 END) AS "paid",
         SUM(CASE WHEN status = 'pending' THEN amount ELSE 0 END) AS "pending"
         FROM invoices`;

    const data = await Promise.all([
      invoiceCountPromise,
      customerCountPromise,
      invoiceStatusPromise,
    ]);

    const numberOfInvoices = Number(data[0].rows[0].count ?? '0');
    const numberOfCustomers = Number(data[1].rows[0].count ?? '0');
    const totalPaidInvoices = formatCurrency(data[2].rows[0].paid ?? '0');
    const totalPendingInvoices = formatCurrency(data[2].rows[0].pending ?? '0');

    return {
      numberOfCustomers,
      numberOfInvoices,
      totalPaidInvoices,
      totalPendingInvoices,
    };
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch card data.');
  }
}

const ITEMS_PER_PAGE = 6;
export async function fetchFilteredEvents(
  query: string,
  currentPage: number,
) {
  noStore();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const events = await sql<Events>`
      SELECT
        events.id,
        events.description,
        events.date,
        events.category,
        members.name,
        members.image_url
      FROM events
      JOIN members ON events.member_id = members.id
      WHERE
        members.name ILIKE ${`%${query}%`} OR
        events.description::text ILIKE ${`%${query}%`} OR
        events.date::text ILIKE ${`%${query}%`} OR
        events.category ILIKE ${`%${query}%`}
      ORDER BY events.date DESC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;

    return events.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch events.');
  }
}

export async function fetchEventsPages(query: string) {
  noStore();
  try {
    const count = await sql`SELECT COUNT(*)
    FROM events
    JOIN members ON events.member_id = members.id
    WHERE
      members.name ILIKE ${`%${query}%`} OR
      events.description::text ILIKE ${`%${query}%`} OR
      events.date::text ILIKE ${`%${query}%`} OR
      events.category ILIKE ${`%${query}%`}
  `;

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of invoices.');
  }
}

export async function fetchEventById(id: string) {
  noStore();
  try {
    const data = await sql<EventForm>`
      SELECT
        events.id,
        events.member_id,
        events.description,
        events.date,
        events.category
      FROM events
      WHERE events.id = ${id};
    `;
    return data.rows[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch event.');
  }
}

export async function fetchAlbums() {
  noStore();
  try {
    const data = await sql<Albums>`
      SELECT
        albums.id,
        albums.name,
        albums.release_date,
        albums.sale,
        albums.cover,
        members.name as artist,
        members.image_url as artist_img
      FROM albums
      JOIN members ON albums.member_id = members.id
      ORDER BY albums.release_date ASC
    `;

    return data.rows;
  } catch(error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch all albums.');
  }
}

export async function fetchSingles() {
  noStore();
  try{
    const data = await sql<Singles>`
      SELECT
        singles.id,
        singles.album_id,
        members.image_url as member_image_url,
        singles.name,
        singles.views,
        singles.streamings
      FROM singles
      JOIN members ON singles.member_id = members.id
    `;

    return data.rows;
  } catch(error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch all singles.');
  }
}

export async function fetchMembersForm() {
  try {
    const data = await sql<MemberField>`
      SELECT id, name
      FROM members
    `;

    return data.rows;
  } catch(error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch all members.');
  }
}

export async function getUser(email: string) {
  try {
    const user = await sql`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0] as User;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}
