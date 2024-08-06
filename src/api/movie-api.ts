import axios from 'axios';
import { KEY } from './constans';

const secret = KEY ?? '';

export const getMovieApi = async (search: string) => {
  const response = await axios.get(
    `http://www.omdbapi.com/?apikey=${secret}&s=${search}`
  );
  return response.data;
};

export const getDeatailMovieApi = async (id: string) => {
  const response = await axios.get(
    `http://www.omdbapi.com/?apikey=${secret}&i=${id}`
  );
  return response.data;
};
