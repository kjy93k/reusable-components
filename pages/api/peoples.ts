// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

export interface PeopleData {
  name: string;
  age: number;
  country: string;
}

const peoplesInfo: PeopleData[] = [
  {
    name: 'A',
    age: 30,
    country: 'Korea',
  },
  {
    name: 'B',
    age: 28,
    country: 'Japan',
  },
  {
    name: 'C',
    age: 20,
    country: 'China',
  },
  {
    name: 'D',
    age: 43,
    country: 'Korea',
  },
];

export async function getPeoplesInfo() {
  return peoplesInfo;
}
