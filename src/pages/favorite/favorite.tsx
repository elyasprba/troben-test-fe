import { useSelector } from 'react-redux';
import { IMovie } from '../home/home';
import Card from '../../components/card';
import { useStyles } from './favorite-style';
import { Link } from 'react-router-dom';

function Favorite() {
  const classes = useStyles();

  const favMovie = useSelector((state: IMovie) => state.movie);

  return (
    <>
      <div className={classes.container}>
        <h1>Favorite Movie</h1>
        <div className={classes.cardWrapper}>
          {favMovie?.map((fav, idx) => (
            <Card
              key={idx}
              title={fav.Title}
              year={fav.Year}
              posterUrl={fav.Poster}
              imdbID={fav?.imdbID}
              isDisabled={!!favMovie.length}
            />
          ))}
        </div>
        <Link to="/" className={classes.backButton}>
          Back to Dashboard
        </Link>
      </div>
    </>
  );
}

export default Favorite;
