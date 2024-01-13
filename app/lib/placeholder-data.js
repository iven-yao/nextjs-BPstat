// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'User',
    email: 'user@nextmail.com',
    password: '123456',
  },
];

const customers = [
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Delba de Oliveira',
    email: 'delba@oliveira.com',
    image_url: '/customers/delba-de-oliveira.png',
  },
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    name: 'Lee Robinson',
    email: 'lee@robinson.com',
    image_url: '/customers/lee-robinson.png',
  },
  {
    id: '3958dc9e-737f-4377-85e9-fec4b6a6442a',
    name: 'Hector Simpson',
    email: 'hector@simpson.com',
    image_url: '/customers/hector-simpson.png',
  },
  {
    id: '50ca3e18-62cd-11ee-8c99-0242ac120002',
    name: 'Steven Tey',
    email: 'steven@tey.com',
    image_url: '/customers/steven-tey.png',
  },
  {
    id: '3958dc9e-787f-4377-85e9-fec4b6a6442a',
    name: 'Steph Dietz',
    email: 'steph@dietz.com',
    image_url: '/customers/steph-dietz.png',
  },
  {
    id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    name: 'Michael Novotny',
    email: 'michael@novotny.com',
    image_url: '/customers/michael-novotny.png',
  },
  {
    id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    name: 'Evil Rabbit',
    email: 'evil@rabbit.com',
    image_url: '/customers/evil-rabbit.png',
  },
  {
    id: '126eed9c-c90c-4ef6-a4a8-fcf7408d3c66',
    name: 'Emil Kowalski',
    email: 'emil@kowalski.com',
    image_url: '/customers/emil-kowalski.png',
  },
  {
    id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
    name: 'Amy Burns',
    email: 'amy@burns.com',
    image_url: '/customers/amy-burns.png',
  },
  {
    id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
    name: 'Balazs Orban',
    email: 'balazs@orban.com',
    image_url: '/customers/balazs-orban.png',
  },
];

const invoices = [
  {
    customer_id: customers[0].id,
    amount: 15795,
    status: 'pending',
    date: '2022-12-06',
  },
  {
    customer_id: customers[1].id,
    amount: 20348,
    status: 'pending',
    date: '2022-11-14',
  },
  {
    customer_id: customers[4].id,
    amount: 3040,
    status: 'paid',
    date: '2022-10-29',
  },
  {
    customer_id: customers[3].id,
    amount: 44800,
    status: 'paid',
    date: '2023-09-10',
  },
  {
    customer_id: customers[5].id,
    amount: 34577,
    status: 'pending',
    date: '2023-08-05',
  },
  {
    customer_id: customers[7].id,
    amount: 54246,
    status: 'pending',
    date: '2023-07-16',
  },
  {
    customer_id: customers[6].id,
    amount: 666,
    status: 'pending',
    date: '2023-06-27',
  },
  {
    customer_id: customers[3].id,
    amount: 32545,
    status: 'paid',
    date: '2023-06-09',
  },
  {
    customer_id: customers[4].id,
    amount: 1250,
    status: 'paid',
    date: '2023-06-17',
  },
  {
    customer_id: customers[5].id,
    amount: 8546,
    status: 'paid',
    date: '2023-06-07',
  },
  {
    customer_id: customers[1].id,
    amount: 500,
    status: 'paid',
    date: '2023-08-19',
  },
  {
    customer_id: customers[5].id,
    amount: 8945,
    status: 'paid',
    date: '2023-06-03',
  },
  {
    customer_id: customers[2].id,
    amount: 8945,
    status: 'paid',
    date: '2023-06-18',
  },
  {
    customer_id: customers[0].id,
    amount: 8945,
    status: 'paid',
    date: '2023-10-04',
  },
  {
    customer_id: customers[2].id,
    amount: 1000,
    status: 'paid',
    date: '2022-06-05',
  },
];

const revenue = [
  { month: 'Jan', revenue: 2000 },
  { month: 'Feb', revenue: 1800 },
  { month: 'Mar', revenue: 2200 },
  { month: 'Apr', revenue: 2500 },
  { month: 'May', revenue: 2300 },
  { month: 'Jun', revenue: 3200 },
  { month: 'Jul', revenue: 3500 },
  { month: 'Aug', revenue: 3700 },
  { month: 'Sep', revenue: 2500 },
  { month: 'Oct', revenue: 2800 },
  { month: 'Nov', revenue: 3000 },
  { month: 'Dec', revenue: 4800 },
];


const members = [
  {
    id: 'ed218cf0-339e-4d54-9d66-2a0ccb062553',
    name: 'BLACKPINK',
    image_url: '/members/blackpink.jpg'
  },
  {
    id: 'b4e1176f-ab37-44a5-aa3b-2557b07197d5',
    name: 'Jisoo',
    image_url: '/members/jisoo.jpg'
  },
  {
    id: 'ac7cf25a-acc4-468f-91d2-48461acb775c',
    name: 'Jennie',
    image_url: '/members/jennie.jpg'
  },
  {
    id: '83518bb8-29b0-4ca6-8e56-b0e222622a79',
    name: 'Rosé',
    image_url: '/members/rose.jpg'
  },
  {
    id: '12e0e7ab-fe57-41f9-89d5-0b20461e669d',
    name: 'Lisa',
    image_url: '/members/lisa.jpg'
  }
];

const events = [
  {
    id: '1398c776-4a98-4396-b205-ab8f068a8c77',
    member_id: members[1].id,
    description: 'Jisoo\'s Birthday',
    date: '2024-01-03',
    category: 'special'
  },
  {
    id: 'ecdfb99c-6e36-4217-9905-f988d339ee18',
    member_id: members[2].id,
    description: 'Jennie\'s Birthday',
    date: '2024-01-16',
    category: 'special'
  },
  {
    id: 'c808c387-50d4-46be-bb1f-615900bf327a',
    member_id: members[4].id,
    description: 'Le Gala des Pièces Jaunes',
    date: '2024-01-26',
    category: 'stage'
  },
  {
    id: 'bd02b902-f68b-4787-8869-0473211a8805',
    member_id: members[3].id,
    description: 'Rosé\'s Birthday',
    date: '2024-02-11',
    category: 'special'
  },
  {
    id: 'bc7dfb47-97e0-4899-ad9b-922e9cda823e',
    member_id: members[2].id,
    description: 'Apartment 404 Ep.1',
    date: '2024-02-15',
    category: 'tvshow'
  },
  {
    id: '4ff79c8e-d9e8-4827-a43d-427177acdd83',
    member_id: members[4].id,
    description: 'Lisa\'s Birthday',
    date: '2024-03-27',
    category: 'special'
  },

]

const albums = [
  {
    id:'72bbd839-4cbd-4074-8229-4a994646989a',
    member_id: members[0].id,
    name: 'Square Up',
    release_date: '2018/06/15',
    sale: 544410
  },
  {
    id:'cac3de4a-0f1e-4d78-995d-5d2faab61c9f',
    member_id: members[0].id,
    name: 'Kill This Love',
    release_date: '2019/04/05',
    sale: 715915
  },
  {
    id:'60620b50-f0ee-44b0-9ea9-43283f7b518f',
    member_id: members[0].id,
    name: 'The Album',
    release_date: '2020/10/02',
    sale: 1649559
  },
  {
    id:'d3e460d5-04cf-476a-8eb5-1768b6a29b2e',
    member_id: members[0].id,
    name: 'Born Pink',
    release_date: '2022/09/16',
    sale: 2872940
  },
  {
    id:'63081bec-259e-4378-a9f3-3be45716a8b2',
    member_id: members[1].id,
    name: 'Me',
    release_date: '2023/03/31', 
    sale: 1542205
  },
  {
    id:'5b20c12d-59e1-4818-9c69-663d7f51da47',
    member_id: members[2].id,
    name: 'Solo',
    release_date: '2018/11/12', 
    sale: 213016
  },
  {
    id:'349182fa-9424-4e32-85f7-ce200261c54a',
    member_id: members[3].id,
    name: 'R',
    release_date: '2021/03/12', 
    sale: 875563
  },
  {
    id:'2a6d1c87-ecd3-49aa-96f6-d42f4cec69bf',
    member_id: members[4].id,
    name: 'Lalisa',
    release_date: '2021/09/10', 
    sale: 845866
  }
];

module.exports = {
  users,
  customers,
  invoices,
  revenue,
  albums,
  members,
  events
};
