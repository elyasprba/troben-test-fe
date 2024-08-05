import { useQuery } from '@tanstack/react-query';
import { getDeatailMovieApi } from '../api/movie-api';

export const useGetDetailMovie = (id: string) => {
  return useQuery({
    queryKey: ['getDetailMovie', id],
    queryFn: () => getDeatailMovieApi(id),
    enabled: !!id,
  });
};
