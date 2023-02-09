const USERS = {
  1: {
    id: 1,
    username: 'Alexia Jane',
    avatar: require('../../assets/images/users/32.jpeg'),
  },
  2: {
    id: 2,
    username: 'Jacky Depp',
    avatar: require('../../assets/images/users/35.jpeg'),
  },
};

const REVIEWS = {
  1: {
    id: 1,
    date: '21 Jan, 2023',
    author: USERS[1],
    rating: 7,
    text: 'Lorem ipsum dolor sit amet. Iusto nihil et porro soluta ut labore nesciunt sed dolor nihil qui laudantium consequatur',
  },
  2: {
    id: 2,
    date: '14 Jan, 2023',
    author: USERS[2],
    rating: 9.1,
    text: 'Lorem ipsum dolor sit amet.',
  },
};

export const HOTELS = {
  1: {
    id: 1,
    title: 'Cinnamon Lakeside',
    image: require('../../assets/images/hotels/clp.jpg'),
    location: '115, Sir Chittampalam A Gardiner Mawatha, Colombo',
    rating: 9,
    pricePeerDay: 'LKR 33,156',
    type: 'HOTEL',
  },
  2: {
    id: 2,
    title: 'The Kingsbury Hotel',
    image: require('../../assets/images/hotels/tkh.jpg'),
    location: '48, Janadhipathi Mawatha, Colombo 01',
    rating: 9.3,
    pricePeerDay: 'LKR 27,967',
    type: 'HOTEL',
  },
  3: {
    id: 3,
    title: 'Anantara Peace Haven',
    image: require('../../assets/images/hotels/aph.jpg'),
    location: 'Goyambokka Estate, Tangalle',
    rating: 9.4,
    pricePeerDay: 'LKR 118,173',
    type: 'HOTEL',
  },
  4: {
    id: 4,
    title: 'Mandarina',
    image: require('../../assets/images/hotels/mc.jpg'),
    location: '433, Galle Road, Colombo 03',
    rating: 9.3,
    pricePeerDay: 'LKR 20,345',
    type: 'HOTEL',
  },
  5: {
    id: 5,
    title: 'Avani Bentota Resort',
    image: require('../../assets/images/hotels/abr.jpg'),
    location: 'Beach Road, Bentota',
    rating: 9.2,
    pricePeerDay: 'LKR 57,264',
    type: 'HOTEL',
  },
  6: {
    id: 6,
    title: 'Marino Beach',
    image: require('../../assets/images/hotels/mb.jpg'),
    location: '590, Marine Drive, Colombo 03',
    rating: 9.4,
    pricePeerDay: 'LKR 25,760',
    type: 'HOTEL',
  },
  7: {
    id: 7,
    title: 'Cinnamon Red',
    image: require('../../assets/images/hotels/crc.jpg'),
    location: '59, Ananda Coomaraswamy Mawatha, Colombo',
    rating: 9.2,
    pricePeerDay: 'LKR 34,865',
    type: 'HOTEL',
  },
  8: {
    id: 8,
    title: 'Amaya Lake',
    image: require('../../assets/images/hotels/al.jpg'),
    location: 'Kandalama, Dambulla',
    rating: 9.4,
    pricePeerDay: 'LKR 33,723',
    type: 'HOTEL',
  },
  9: {
    id: 9,
    title: 'Cinnamon Citadel',
    image: require('../../assets/images/hotels/cck.jpg'),
    location: '124, Srimath Kuda Ratwatte Mawatha, Kandy',
    rating: 9.2,
    pricePeerDay: 'LKR 54,345',
    type: 'HOTEL',
  },
  10: {
    id: 10,
    title: 'Hikka Tranz by Cinnamon',
    image: require('../../assets/images/hotels/htc.jpg'),
    location: 'Galle Road, Hikkaduwa',
    rating: 9.4,
    pricePeerDay: 'LKR 60,459',
    type: 'HOTEL',
  },
  11: {
    id: 11,
    title: 'Centara Ceysands Resort & Spa',
    image: require('../../assets/images/hotels/ccrs.jpg'),
    location: 'Aluthgama - Mathugama Rd, Aluthgama',
    rating: 9.2,
    pricePeerDay: 'LKR 26,785',
    type: 'HOTEL',
  },
  12: {
    id: 12,
    title: 'Shangri-La',
    image: require('../../assets/images/hotels/slc.jpg'),
    location: '1, Galle Face Colombo 2,',
    rating: 9.4,
    pricePeerDay: 'LKR 62,568',
    type: 'HOTEL',
  },

  13: {
    id: 13,
    title: 'Heritage Hotel',
    image: require('../../assets/images/hotels/hta.jpg'),
    location: 'Galwala Road Pothanegama, Anuradhapura',
    rating: 9.2,
    pricePeerDay: 'LKR 18,450',
    type: 'HOTEL',
  },
  14: {
    id: 14,
    title: 'Jetwing Sea',
    image: require('../../assets/images/hotels/js.jpg'),
    location: 'Palangaturai, Kochchikade, Negombo',
    rating: 9.4,
    pricePeerDay: 'LKR 23,980',
    type: 'HOTEL',
  },
};

export const TOP_PLACES = [
  {
    id: 1,
    image: require('../../assets/images/trips/ella-1.jpg'),
    title: 'Ella',
    location: 'Ella',
    description:
      'Situated in the middle of beautiful countryside, with small vegetable plots, tea plantations on the hill slopes and forests on the tops this hill station is nothing less than breathtaking',
    rating: 9.2,
    gallery: [
      require('../../assets/images/trips/ella-2.jpg'),
      require('../../assets/images/trips/ella-3.jpg'),
    ],
    reviews: [REVIEWS[2], REVIEWS[1]],
    hotels: [HOTELS[9], HOTELS[10]],
    type: 'PLACE',
  },
  {
    id: 4,
    image: require('../../assets/images/trips/mirissa-1.jpg'),
    title: 'Mirissa',
    location: 'South Cost',
    description:
      'Spend your days, soaking in the sun on a hammock and whale-watching at the little village of Mirissa, one of the most appealing beach hideaways and places to see in Sri Lanka.',
    rating: 8.9,
    gallery: [
      require('../../assets/images/trips/mirissa-2.jpg'),
      require('../../assets/images/trips/mirissa-3.jpg'),
    ],
    reviews: [REVIEWS[1], REVIEWS[2]],
    hotels: [HOTELS[11], HOTELS[12]],
    type: 'PLACE',
  },
  {
    id: 6,
    image: require('../../assets/images/trips/sigiriya-1.jpg'),
    title: 'Sigiriya',
    location: 'Dambulla',
    description:
      "Sigiriya impresses visitors just with the absurdity of its construction. It's a huge rock formation that's been carved and transformed into a palace.",
    rating: 8.4,
    gallery: [],
    reviews: [REVIEWS[1], REVIEWS[2]],
    hotels: [HOTELS[13], HOTELS[14]],
    type: 'PLACE',
  },
];

export const PLACES = [
  {
    id: 5,
    image: require('../../assets/images/trips/adam-1.jpg'),
    title: 'Adam’s Peak',
    location: 'Central Sri Lanka',
    description:
      'Adam’s Peak is topped by a sacred rock formation, and pilgrims traditionally climb to the summit at night in time to watch the sunrise.',
    rating: 9.2,
    gallery: [
      require('../../assets/images/trips/adam-2.jpg'),
      require('../../assets/images/trips/adam-3.jpg'),
    ],
    reviews: [REVIEWS[1], REVIEWS[2]],
    hotels: [HOTELS[1], HOTELS[2]],
    type: 'PLACE',
  },
  {
    id: 2,
    image: require('../../assets/images/trips/yala-1.jpg'),
    title: 'Yala National Park',
    location: 'Hambanthota',
    description:
      'Yala National Park is a huge area of forest, grassland and lagoons bordering the Indian Ocean, in southeast Sri Lanka. It’s home to wildlife such as leopards, elephants and crocodiles, as well as hundreds of bird species.',
    rating: 9.1,
    gallery: [],
    reviews: [REVIEWS[2], REVIEWS[1]],
    hotels: [HOTELS[3], HOTELS[4]],
    type: 'PLACE',
  },
  {
    id: 3,
    image: require('../../assets/images/trips/jaffna-1.jpg'),
    title: 'Jaffna',
    location: 'Jaffna',
    description:
      'Jaffna is a city on the northern tip of Sri Lanka. Nallur Kandaswamy is a huge Hindu temple with golden arches and an ornate gopuram tower.',
    rating: 8.9,
    gallery: [],
    reviews: [REVIEWS[1], REVIEWS[2]],
    hotels: [HOTELS[5], HOTELS[6]],
    type: 'PLACE',
  },
  {
    id: 7,
    image: require('../../assets/images/trips/anuradhapura-1.jpg'),
    title: 'Anuradhapura',
    location: 'Anuradhapura',
    description:
      'Anuradhapura is a major city located in north central plain of Sri Lanka. It is the capital city of North Central Province, Sri Lanka and the capital of Anuradhapura District.',
    rating: 9.2,
    gallery: [],
    reviews: [REVIEWS[2], REVIEWS[1]],
    hotels: [HOTELS[7], HOTELS[8]],
    type: 'PLACE',
  },
];

export const SEARCH_PLACES = [...PLACES, ...TOP_PLACES].map((item) => ({
  ...item,
  id: Math.random().toString(),
}));

export const SEARCH_HOTELS = [...Object.values(HOTELS)].map((item) => ({
  ...item,
  id: Math.random().toString(),
}));

export const SEARCH_ALL = [...SEARCH_PLACES, ...SEARCH_HOTELS];

export const traveler={
  username: 'Jane Doe',
  picture:  require('../../assets/images/users/32.jpeg'),
  location: 'Kalutara, Sri Lanka',
}