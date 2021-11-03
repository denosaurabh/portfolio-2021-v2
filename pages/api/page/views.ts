import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@lib/prisma';

export default async function PageViews(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const views = await prisma.pageViews.findMany();
  res.json(views);
}
