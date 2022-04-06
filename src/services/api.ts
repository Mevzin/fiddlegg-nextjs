import axios from 'axios';

export const riotGamesApiBr1 = axios.create({
  baseURL: 'https://br1.api.riotgames.com/lol/',
  headers: {
    'X-Riot-Token': process.env.RIOT_API_KEY,
  }
});

export const riotGamesApiAmericas = axios.create({
  baseURL: 'https://americas.api.riotgames.com/lol/',
  headers: {
    'X-Riot-Token': process.env.RIOT_API_KEY,
  }
});