const { db } = require('@vercel/postgres');
const {
  invoices,
  customers,
  revenue,
  members,
  albums,
  events,
  singles
} = require('../app/lib/placeholder-data.js');
const bcrypt = require('bcrypt');

async function seedInvoices(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "invoices" table if it doesn't exist
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS invoices (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    customer_id UUID NOT NULL,
    amount INT NOT NULL,
    status VARCHAR(255) NOT NULL,
    date DATE NOT NULL
  );
`;

    console.log(`Created "invoices" table`);

    // Insert data into the "invoices" table
    const insertedInvoices = await Promise.all(
      invoices.map(
        (invoice) => client.sql`
        INSERT INTO invoices (customer_id, amount, status, date)
        VALUES (${invoice.customer_id}, ${invoice.amount}, ${invoice.status}, ${invoice.date})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedInvoices.length} invoices`);

    return {
      createTable,
      invoices: insertedInvoices,
    };
  } catch (error) {
    console.error('Error seeding invoices:', error);
    throw error;
  }
}

async function seedCustomers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "customers" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS customers (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        image_url VARCHAR(255) NOT NULL
      );
    `;

    console.log(`Created "customers" table`);

    // Insert data into the "customers" table
    const insertedCustomers = await Promise.all(
      customers.map(
        (customer) => client.sql`
        INSERT INTO customers (id, name, email, image_url)
        VALUES (${customer.id}, ${customer.name}, ${customer.email}, ${customer.image_url})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedCustomers.length} customers`);

    return {
      createTable,
      customers: insertedCustomers,
    };
  } catch (error) {
    console.error('Error seeding customers:', error);
    throw error;
  }
}

async function seedRevenue(client) {
  try {
    // Create the "revenue" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS revenue (
        month VARCHAR(4) NOT NULL UNIQUE,
        revenue INT NOT NULL
      );
    `;

    console.log(`Created "revenue" table`);

    // Insert data into the "revenue" table
    const insertedRevenue = await Promise.all(
      revenue.map(
        (rev) => client.sql`
        INSERT INTO revenue (month, revenue)
        VALUES (${rev.month}, ${rev.revenue})
        ON CONFLICT (month) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedRevenue.length} revenue`);

    return {
      createTable,
      revenue: insertedRevenue,
    };
  } catch (error) {
    console.error('Error seeding revenue:', error);
    throw error;
  }
}

async function seedMembers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "members" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS members (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        image_url VARCHAR(255) NOT NULL
      );
    `;

    console.log(`Created "members" table`);

    // Insert data into the "members" table
    const insertedMembers = await Promise.all(
      members.map(
        (member) => client.sql`
        INSERT INTO members (id, name, image_url)
        VALUES (${member.id}, ${member.name}, ${member.image_url})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedMembers.length} members`);

    return {
      createTable,
      members: insertedMembers,
    };
  } catch (error) {
    console.error('Error seeding members:', error);
    throw error;
  }
}

async function seedAlbums(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await client.sql`DROP TABLE albums`;
    // Create the "albums" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS albums (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        member_id UUID NOT NULL,
        name VARCHAR(255) NOT NULL,
        release_date DATE NOT NULL,
        sale INT NOT NULL,
        cover VARCHAR(255) NOT NULL
      );
    `;

    console.log(`Created "albums" table`);

    // Insert data into the "albums" table
    const insertedAlbums = await Promise.all(
      albums.map(
        (album) => client.sql`
        INSERT INTO albums (id, member_id, name, release_date, sale, cover)
        VALUES (${album.id}, ${album.member_id}, ${album.name}, ${album.release_date}, ${album.sale}, ${album.cover})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedAlbums.length} albums`);

    return {
      createTable,
      albums: insertedAlbums,
    };
  } catch (error) {
    console.error('Error seeding albums:', error);
    throw error;
  }
}

async function seedEvents(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "events" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS events (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        member_id UUID NOT NULL,
        description VARCHAR(255) NOT NULL,
        date DATE NOT NULL,
        category VARCHAR(255) NOT NULL
      );
    `;

    console.log(`Created "events" table`);

    // Insert data into the "albums" table
    const insertedEvents = await Promise.all(
      events.map(
        (event) => client.sql`
        INSERT INTO events (id, member_id, description, date, category)
        VALUES (${event.id}, ${event.member_id}, ${event.description}, ${event.date}, ${event.category})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedEvents.length} events`);

    return {
      createTable,
      events: insertedEvents,
    };
  } catch (error) {
    console.error('Error seeding events:', error);
    throw error;
  }
}

async function seedSingles(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await client.sql`DROP TABLE singles`;
    // Create the "singles" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS singles (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        album_id UUID,
        member_id UUID NOT NULL,
        name VARCHAR(255) NOT NULL,
        views BIGINT NOT NULL,
        streamings BIGINT NOT NULL
      );
    `;

    console.log(`Created "singles" table`);

    // Insert data into the "albums" table
    const insertedSingles = await Promise.all(
      singles.map(
        (single) => client.sql`
        INSERT INTO singles (album_id, member_id, name, views, streamings)
        VALUES (${single.album_id}, ${single.member_id}, ${single.name}, ${single.views}, ${single.streamings})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedSingles.length} singles`);

    return {
      createTable,
      singles: insertedSingles,
    };
  } catch (error) {
    console.error('Error seeding singles:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  // await seedUsers(client);
  // await seedCustomers(client);
  // await seedInvoices(client);
  // await seedRevenue(client);
  await seedMembers(client);
  // await seedEvents(client);
  // await seedAlbums(client);
  // await seedSingles(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
