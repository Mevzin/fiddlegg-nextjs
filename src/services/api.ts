import axios from 'axios';

export const riotGamesApi = axios.create({
  baseURL: 'https://br1.api.riotgames.com/lol/',
  headers: {
    'X-Riot-Token': process.env.RIOT_API_KEY,
  }
});