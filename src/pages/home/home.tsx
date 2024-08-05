import { ChangeEvent, useEffect, useState } from 'react';
import { useStyles } from './home-style';
import useDebounce from '../../hooks/useDebounce';
import { useGetMovie } from '../../hooks/useGetMovieApi';
import Navbar from '../../components/navbar';
import SearchMovie from '../../components/search-movie';
import Loading from '../../components/loading/loading';
import Card from '../../components/card';
import { useNavigate } from 'react-router-dom';

interface Movie {
  Title: string;
  Year: number;
  imdbID: string;
  Type: string;
  Poster: string;
}

function Home() {
  const classes = useStyles();

  const [searchMovie, setSearchMovie] = useState<string>('avenger');

  const navigate = useNavigate();

  const debouncedMovie = useDebounce(searchMovie);

  const { data: movies, isLoading } = useGetMovie(debouncedMovie);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchMovie(event.target.value);
  };

  useEffect(() => {}, [debouncedMovie]);

  return (
    <>
      <div className={classes.container}>
        <Navbar />
        <SearchMovie search={searchMovie} handleChange={handleChange} />

        {isLoading ? (
          <Loading />
        ) : movies?.Response === 'False' ? (
          <h1>{movies?.Error}</h1>
        ) : (
          <div className={classes.cardWrapper}>
            {movies?.Search?.map((movie: Movie, idx: number) => (
              <div
                key={idx}
                onClick={() => navigate(`/details/${movie?.imdbID}`)}
              >
                <Card
                  title={movie.Title}
                  year={movie.Year}
                  posterUrl={movie.Poster}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
