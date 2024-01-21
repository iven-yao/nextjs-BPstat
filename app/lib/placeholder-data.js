// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
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
    id:'918f287c-98c6-4033-901b-9127453d580c',
    member_id: members[0].id,
    name: 'Square One',
    release_date: '2016-08-08',
    sale: 0,
    cover: '/albums/square_one.jpg'
  },
  {
    id:'4d515e01-7b03-438e-b4c6-c7df75b4dfe0',
    member_id: members[0].id,
    name: 'Square Two',
    release_date: '2016-11-01',
    sale: 0,
    cover: '/albums/square_two.jpg'
  },
  {
    id:'72bbd839-4cbd-4074-8229-4a994646989a',
    member_id: members[0].id,
    name: 'Square Up',
    release_date: '2018-06-15',
    sale: 544410,
    cover: '/albums/square_up.png'
  },
  {
    id:'cac3de4a-0f1e-4d78-995d-5d2faab61c9f',
    member_id: members[0].id,
    name: 'Kill This Love',
    release_date: '2019-04-05',
    sale: 715915,
    cover: '/albums/kill_this_love.png'
  },
  {
    id:'60620b50-f0ee-44b0-9ea9-43283f7b518f',
    member_id: members[0].id,
    name: 'The Album',
    release_date: '2020-10-02',
    sale: 1649559,
    cover: '/albums/the_album.png'
  },
  {
    id:'d3e460d5-04cf-476a-8eb5-1768b6a29b2e',
    member_id: members[0].id,
    name: 'Born Pink',
    release_date: '2022-09-16',
    sale: 2872940,
    cover: '/albums/born_pink.jpeg'
  },
  {
    id:'63081bec-259e-4378-a9f3-3be45716a8b2',
    member_id: members[1].id,
    name: 'Me',
    release_date: '2023-03-31', 
    sale: 1542205,
    cover: '/albums/me.png'
  },
  {
    id:'5b20c12d-59e1-4818-9c69-663d7f51da47',
    member_id: members[2].id,
    name: 'Solo',
    release_date: '2018-11-12', 
    sale: 213016,
    cover: '/albums/solo.jpg'
  },
  {
    id:'349182fa-9424-4e32-85f7-ce200261c54a',
    member_id: members[3].id,
    name: 'R',
    release_date: '2021-03-12', 
    sale: 875563,
    cover: '/albums/r.png'
  },
  {
    id:'2a6d1c87-ecd3-49aa-96f6-d42f4cec69bf',
    member_id: members[4].id,
    name: 'Lalisa',
    release_date: '2021-09-10', 
    sale: 845866,
    cover: '/albums/lalisa.png'
  },{
    id:'cabebc28-d560-457a-a8a0-f12e747a2d1e',
    member_id: members[2].id,
    name: 'You & Me',
    release_date: '2023-10-06',
    sale: 0,
    cover: '/albums/youandme.png'
  },{
    id:'17f2ef30-1848-415d-a500-bfddbeb71923',
    member_id: members[0].id,
    name: 'As If It\'s Your Last',
    release_date: '2017-06-22',
    sale: 0,
    cover: '/albums/aiiyl.jpg'
  },{
    id:'ef9a1ed4-ee6f-4d9d-a825-6ebda98bd475',
    member_id: members[0].id,
    name: 'THE GIRLS',
    release_date: '2023-08-25',
    sale:190480,
    cover: '/albums/the_girls.png'
  }

];

const singles = [
  {
    album_id: albums[0].id,
    member_id: members[0].id,
    name: 'Whistle',
    views: 876528235,
    streamings: 360117944,
  },
  {
    album_id: albums[0].id,
    member_id: members[0].id,
    name: 'BOOMBAYAH',
    views: 1665471972,
    streamings: 504035170,
  },{
    album_id: albums[1].id,
    member_id: members[0].id,
    name: 'Playing with Fire',
    views: 857525567,
    streamings: 400881074,
  },{
    album_id: albums[1].id,
    member_id: members[0].id,
    name: 'Stay',
    views: 356091812,
    streamings: 214131447,
  },{
    album_id: albums[1].id,
    member_id: members[0].id,
    name: 'Whistle - Acoustic Ver.',
    views: 0,
    streamings: 67372898,
  },{
    album_id: albums[11].id,
    member_id: members[0].id,
    name: 'As If It\'s Your Last',
    views: 1347832119,
    streamings: 550771120,
  },{
    album_id:albums[2].id,
    member_id: members[0].id,
    name: 'DDU-DU DDU-DU',
    views: 2160237349,
    streamings: 668539152
  },{
    album_id:albums[2].id,
    member_id: members[0].id,
    name: 'Forever Young',
    views: 0,
    streamings: 315727655	
  },{
    album_id:albums[2].id,
    member_id: members[0].id,
    name: 'Really',
    views: 0,
    streamings: 156432913
  },{
    album_id:albums[2].id,
    member_id: members[0].id,
    name: 'See U Later',
    views: 0,
    streamings: 136417088
  },{
    album_id:albums[3].id,
    member_id: members[0].id,
    name: 'Kill This Love',
    views: 1915889064,
    streamings: 780061941
  },{
    album_id:albums[3].id,
    member_id: members[0].id,
    name: 'Don\'t Know What To Do',
    views: 0,
    streamings: 278917124
  },{
    album_id:albums[3].id,
    member_id: members[0].id,
    name: 'Kick It',
    views: 0,
    streamings: 149529562
  },{
    album_id:albums[3].id,
    member_id: members[0].id,
    name: 'Hope Not',
    views: 0,
    streamings: 113715509
  },{
    album_id:albums[3].id,
    member_id: members[0].id,
    name: 'DDU-DU DDU-DU (Remix)',
    views: 0,
    streamings: 78087140
  },{
    album_id:albums[4].id,
    member_id: members[0].id,
    name: 'How You Like That',
    views: 1263684834,
    streamings: 944381554
  },{
    album_id:albums[4].id,
    member_id: members[0].id,
    name: 'Ice Cream',
    views: 888334713,
    streamings: 551178794
  },{
    album_id:albums[4].id,
    member_id: members[0].id,
    name: 'Pretty Savage',
    views: 0,
    streamings: 401379880
  },{
    album_id:albums[4].id,
    member_id: members[0].id,
    name: 'Bet You Wanna',
    views: 0,
    streamings: 185079479
  },{
    album_id:albums[4].id,
    member_id: members[0].id,
    name: 'Lovesick Girls',
    views: 730687745,
    streamings: 521256338
  },{
    album_id:albums[4].id,
    member_id: members[0].id,
    name: 'Crazy Over You',
    views: 0,
    streamings: 210590321
  },{
    album_id:albums[4].id,
    member_id: members[0].id,
    name: 'Love To Hate Me',
    views: 0,
    streamings: 225146256
  },{
    album_id:albums[4].id,
    member_id: members[0].id,
    name: 'You Never Know',
    views: 0,
    streamings: 162806872
  },{
    album_id:albums[5].id,
    member_id: members[0].id,
    name: 'Pink Venom',
    views: 794484739,
    streamings: 654778923
  },{
    album_id:albums[5].id,
    member_id: members[0].id,
    name: 'Shut Down',
    views: 575075402,
    streamings: 590502912
  },{
    album_id:albums[5].id,
    member_id: members[0].id,
    name: 'Typa Girl',
    views: 0,
    streamings: 311800572
  },{
    album_id:albums[5].id,
    member_id: members[0].id,
    name: 'Yeah Yeah Yeah',
    views: 0,
    streamings: 105924869
  },{
    album_id:albums[5].id,
    member_id: members[3].id,
    name: 'Hard to Love',
    views: 0,
    streamings: 185347519,
  },{
    album_id:albums[5].id,
    member_id: members[0].id,
    name: 'The Happiest Girl',
    views: 0,
    streamings: 115532215
  },{
    album_id:albums[5].id,
    member_id: members[0].id,
    name: 'Tally',
    views: 0,
    streamings: 239440801
  },{
    album_id:albums[5].id,
    member_id: members[0].id,
    name: 'Ready For Love',
    views: 154190698,
    streamings: 103948070
  },{
    album_id:albums[6].id,
    member_id: members[1].id,
    name: 'FLOWER',
    views: 453997657,
    streamings: 362321101
  },{
    album_id:albums[6].id,
    member_id: members[1].id,
    name: 'All Eyes On Me',
    views: 0,
    streamings: 100528627
  },{
    album_id:albums[7].id,
    member_id: members[2].id,
    name: 'SOLO',
    views: 990586792,
    streamings: 574873726
  },{
    album_id:albums[8].id,
    member_id: members[3].id,
    name: 'On The Ground',
    views: 352504616,
    streamings: 374485326
  },{
    album_id:albums[8].id,
    member_id: members[3].id,
    name: 'Gone',
    views: 280523223,
    streamings: 300201043
  },{
    album_id:albums[9].id,
    member_id: members[4].id,
    name: 'LALISA',
    views: 677589704,
    streamings: 433323325
  },{
    album_id:albums[9].id,
    member_id: members[4].id,
    name: 'MONEY',
    views: 953779204,
    streamings: 1097719442
  },{
    album_id:albums[10].id,
    member_id: members[2].id,
    name: 'You & Me',
    views: 0,
    streamings: 113013828
  },{
    album_id:albums[10].id,
    member_id: members[2].id,
    name: 'You & Me (Coachella ver.)',
    views: 0,
    streamings: 45360789
  },{
    album_id:albums[12].id,
    member_id: members[0].id,
    name: 'THE GIRLS',
    views: 77465181,
    streamings: 87827360
  }
];

module.exports = {
  albums,
  members,
  events,
  singles
};
