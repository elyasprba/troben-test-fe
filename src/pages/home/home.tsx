import { ChangeEvent, useEffect, useState } from 'react';
import { useStyles } from './home-style';
import useDebounce from '../../hooks/useDebounce';
import { useGetMovie } from '../../hooks/useGetMovieApi';
import Navbar from '../../components/navbar';
import SearchMovie from '../../components/search-movie';
import Loading from '../../components/loading/loading';
import Card from '../../components/card';
import { useDispatch, useSelector } from 'react-redux';
import { addFavoriteMovie } from '../../redux/movie';
import { useNavigate } from 'react-router-dom';

interface Movie {
  Title: string;
  Year: number;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface IMovie {
  movie: Movie[];
}

function Home() {
  const classes = useStyles();

  const [searchMovie, setSearchMovie] = useState<string>('avenger');

  const debouncedMovie = useDebounce(searchMovie);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const favMovie = useSelector((state: IMovie) => state.movie);

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

        <div className={classes.buttonWrapper}>
          <button
            className={classes.favoriteButton}
            onClick={() => navigate('/favorite')}
          >
            List Favorite: {favMovie.length}
          </button>
        </div>

        {isLoading ? (
          <Loading />
        ) : movies?.Response === 'False' ? (
          <h1>{movies?.Error}</h1>
        ) : (
          <div className={classes.cardWrapper}>
            {movies?.Search?.map((movie: Movie, idx: number) => (
              <Card
                key={idx}
                title={movie.Title}
                year={movie.Year}
                posterUrl={movie.Poster}
                imdbID={movie?.imdbID}
                handleClick={() => dispatch(addFavoriteMovie(movie))}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
