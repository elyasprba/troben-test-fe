import { useQuery } from '@tanstack/react-query';
import { getMovieApi } from '../api/movie-api';

export const useGetMovie = (search: string) => {
  return useQuery({
    queryKey: ['getMovie', search],
    queryFn: () => getMovieApi(search),
    enabled: !!search,
  });
};
