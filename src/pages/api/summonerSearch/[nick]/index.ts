import type { NextApiRequest, NextApiResponse } from 'next'
import { riotGamesApi } from '../../../../services/api';

export default async function search(req: NextApiRequest, res: NextApiResponse) {
  const { nick } = req.query;
  
  const summonerData = await riotGamesApi.get(
    "summoner/v4/summoners/by-name/" + nick);

  return res.status(200).json({ data: summonerData.data })
}