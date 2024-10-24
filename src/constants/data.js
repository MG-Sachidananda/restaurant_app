import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: ' $56',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: '$59',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieillw Rose',
    price: '$44',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: '$31',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: '$26',
    tags: 'IE | 750 ml',
  },
];

const teas = [
  {
    title: 'Coffee ',
    price: ' ₹10',
    tags: 'Black Coffee | Instant Coffee | Filter Coffee | Regular Cold Coffee | KitKat Cold Coffee | Caramel Cold Coffee | Belgian Chocolate Cold Coffee ',
  },
  {
    title: 'Tea ',
    price: ' ₹10',
    tags: 'Regular Tea | Masala Tea | Black Tea | Ginger Tea | Lemon Tea | Elaichi Tea |',
  },
  {
    title: 'MilkShake ',
    price: ' ₹50',
    tags: 'Vanilla  | Butterscotch  | Strawberry  | Oreo  | Ferrero Rocher  ',
  },
  // {
  //   title: 'Cold Coffee',
  //   price: ' ₹60',
  //   tags: 'Regular | KitKat | Caramel | Belgian Chocolate ',
  // },
  {
    title: 'Mojito ',
    price: ' ₹50',
    tags: ' Virgin Mojito | Green Apple Mojito | Lime and Mint Mojito | Strawberry Mojito | Blue Lime Mojito | Blueberry Mojito '
  },
  {
    title: 'Lassi ',
    price: ' ₹50',
    tags: 'Sweet Lassi | Mango Lassi | Badam Lassi | Kesar Badam Lassi ',
  },

]

const vegFoods = [

  {
    title: 'Samosas ',
    price: ' ₹80',
    tags: 'Mini Veg Samosa | Mini Paneer Samosa ',
  },
  {
    title: 'Fries',
    price: ' ₹70',
    tags: 'Salted Fries | Peri Peri Fries ',
  },
  {
    title: 'Shots',
    price: ' ₹80',
    tags: 'Potato Garlic Shots ',
  },
  {
    title: 'Bites',
    price: ' ₹80',
    tags: 'Veg Bites',
  },
  {
    title: 'Noodles ',
    price: ' ₹89',
    tags: 'Veg Noodles | Schezwan Noodles | Chinese Bhel Noodles| Burnt Garlic Noodles ',
  },
  {
    title: 'Fried Rice ',
    price: ' ₹89',
    tags: 'Veg Fried Rice | Schezwan Fried Rice| Triple Rice | Gobi Fried Rice | Burnt Garlic Fried Rice | Mushroom Fried rice | Paneer Fried Rice',
  },
]

const nonVegFoods = [
  {
    title: 'Chicken Snacks ',
    price: ' ₹90',
    tags: 'Chicken Nuggets | Chicken Popcorn | Chicken Garlic fingers | Spicy Chicken Wings | Chicken Breast',
  },
  {
    title: 'Chicken Snacks ',
    price: ' ₹90',
    tags: 'Spicy Chicken Wings | Chicken Breast',
  },
 
  {
    title: 'Egg Rice',
    price: ' ₹89',
    tags: 'Egg Fried Rice | Egg Schezwan Fried Rice',
  },
  {
    title: 'Chicken Fried Rice ',
    price: ' ₹89',
    tags: 'Chicken Fried Rice | Chicken Schezwan Fried Rice| Chicken Triple Rice | Chicken Burnt GarlicFried Rice ',
  },
  {
    title: 'Egg Noodles ',
    price: ' ₹89',
    tags: 'Egg Noodles | Egg Schezwan Noodles',
  },
  {
    title: 'Chicken Noodles ',
    price: ' ₹89',
    tags: 'Egg Noodles | Chicken Noodles | Chicken Schezwan Noodles |   Noodles| Burnt Garlic Noodles ',
  },
 
]

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '$20',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '$16',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '$10',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '$31',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '$26',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  // {
  //   imgUrl: images.award05,
  //   title: 'AA Hospitality',
  //   subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  // },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, awards,teas,  vegFoods, nonVegFoods };
