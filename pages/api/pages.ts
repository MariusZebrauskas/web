// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

interface Data  {
  one:number;
  two:number;
  three:number;
  four:number;
}

let data:any = [{page:1},{page:2}, {page:3}, {page:4}]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(data)
}
