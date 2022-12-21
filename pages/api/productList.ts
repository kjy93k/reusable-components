// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

export interface ProductItem {
  thumb: string;
  title: string;
  price: string;
  description: string;
  note: string;
}

const productList: ProductItem[] = [
  {
    thumb: 'https://picsum.photos/seed/1/600/500',
    title: 'Neque porro quisquam',
    price: '$150',
    description:
      'Mauris sit amet finibus lorem. Donec sed rhoncus magna, vel pellentesque arcu. Donec eget sem eget arcu laoreet luctus. Ut id justo dapibus, commodo massa et, feugiat sapien. Quisque cursus velit id porttitor elementum. Curabitur lacinia ipsum tincidunt ante rutrum, vitae posuere urna sodales. Aenean sit amet dignissim nisl, vel rhoncus sapien. Nulla sit amet hendrerit purus. Sed id risus nulla. Sed ullamcorper sed mi eget luctus. Donec fringilla interdum ante. Etiam quis turpis nunc. Aliquam erat volutpat. Praesent ut dignissim ex.',
    note: 'Quisque porta tristique nibh, vitae commodo nisl ultricies sollicitudin. Nullam accumsan ex in ante interdum commodo.',
  },
  {
    thumb: 'https://picsum.photos/seed/2/200/150',
    title: 'Quisque non ultrices elit',
    price: '$300',
    description: 'Suspendisse potenti.',
    note: '',
  },
  {
    thumb: 'https://picsum.photos/seed/3/200/600',
    title: 'Mauris sit amet finibus lorem',
    price: '',
    description: '',
    note: 'Etiam auctor, ante non tincidunt malesuada, nisi sapien consequat purus, vel sollicitudin purus diam id sem.',
  },
  {
    thumb: 'https://picsum.photos/seed/4/500/300',
    title: 'Etiam quis turpis nunc',
    price: '$99,999',
    description: 'Donec dictum tempor sapiensapiensapiensapiensapiensapiensapiensapiensapiensapiensapiensapien.',
    note: 'puruspuruspuruspuruspuruspuruspuruspuruspuruspurus.',
  },
];

export async function getProductList() {
  return productList;
}
