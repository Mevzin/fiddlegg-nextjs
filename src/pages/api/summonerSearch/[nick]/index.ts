import type { NextApiRequest, NextApiResponse } from 'next'
import { riotGamesApi } from '../../../../services/api';

interface ISummnoerData {
  id: string;
  accountId: string;
  puuid: string;
  name: string;
  profileIconId: number;
  revisionDate: number;
  summonerLevel: number;
}

export default async function search(req: NextApiRequest, res: NextApiResponse) {
  const { nick } = req.query;
  
  const summonerData = await riotGamesApi.get<ISummnoerData>(
    "summoner/v4/summoners/by-name/" + nick);

  const summonerRank = await riotGamesApi.get(
      "league/v4/entries/by-summoner/" + summonerData.data.id);
  

  return res.status(200).json({ 
     data: {
       summoner: summonerData.data,
       summonerRank: summonerRank.data
     }
  });
}