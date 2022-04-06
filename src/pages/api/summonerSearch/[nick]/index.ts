import { riotGamesApiBr1 } from "@services/api";
import type { NextApiRequest, NextApiResponse } from "next";

interface ISummonerData {
  id: string;
  accountId: string;
  puuid: string;
  name: string;
  profileIconId: number;
  revisionDate: number;
  summonerLevel: number;
}

export default async function search(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { nick } = req.query;

  const summonerData = await riotGamesApiBr1.get<ISummonerData>(
    "summoner/v4/summoners/by-name/" + nick
  );

  const summonerRank = await riotGamesApiBr1.get(
    "league/v4/entries/by-summoner/" + summonerData.data.id
  );

  return res.status(200).json({
    data: {
      summoner: summonerData.data,
      summonerRank: summonerRank.data,
    },
  });
}
