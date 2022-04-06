import type { NextApiRequest, NextApiResponse } from 'next'
import { riotGamesApiAmericas } from '../../../../services/api';

export default async function search(req: NextApiRequest, res: NextApiResponse) {
  const { puuid } = req.query;
  const startSet = 0;
  const countSet = 5;
  let matchs = [];
  
  const matchsIds = await riotGamesApiAmericas.get(
    `match/v5/matches/by-puuid/${puuid}/ids?start=${startSet}&count=${countSet}`
  );
  
  for (let i = 0; i <= 4; i++) {
    matchs[i] = await riotGamesApiAmericas.get(
      `match/v5/matches/${matchsIds.data[i]}`
    );
  };


  return res.status(200).json({ matchs: matchs.map(match => match.data) });
}