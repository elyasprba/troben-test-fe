import axios from 'axios';

export const getMovieApi = async (search: string) => {
  const response = await axios.get(
    `http://www.omdbapi.com/?apikey=35e953c3&s=${search}`
  );
  return response.data;
};

export const getDeatailMovieApi = async (id: string) => {
  const response = await axios.get(
    `http://www.omdbapi.com/?apikey=35e953c3&i=${id}`
  );
  return response.data;
};
