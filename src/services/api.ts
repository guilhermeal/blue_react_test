import axios from 'axios';
import { md5HashGenerator } from '../utils/hash';

const { VITE_MARVEL_PRIVATE_KEY, VITE_MARVEL_PUBLIC_KEY } = import.meta.env;

const marvelApi = {
  url: 'http://gateway.marvel.com',
  version: 'v1',
};

const timeStamp = Date.now();
const hash = md5HashGenerator(`${timeStamp}${VITE_MARVEL_PRIVATE_KEY}${VITE_MARVEL_PUBLIC_KEY}`)

export const api = axios.create({
  baseURL: `${marvelApi.url}./${marvelApi.version}/public`,
  params: {
    ts: timeStamp,
    apikey: VITE_MARVEL_PUBLIC_KEY,
    hash: hash,
    limit: 30,
  }
})