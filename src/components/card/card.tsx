import { useNavigate } from 'react-router-dom';
import { useStyles } from './card-style';

interface MovieCardProps {
  title: string;
  year: number;
  posterUrl: string;
  imdbID: string;
  isDisabled?: boolean;
  handleClick?: () => void;
}

function Card({
  title,
  year,
  posterUrl,
  imdbID,
  isDisabled,
  handleClick,
}: MovieCardProps) {
  const classes = useStyles();

  const navigate = useNavigate();

  return (
    <>
      <div className={classes.card}>
        <img src={posterUrl} alt={title} className={classes.poster} />
        <div className={classes.info}>
          <h3
            className={classes.title}
            onClick={() => navigate(`/details/${imdbID}`)}
          >
            {title}
          </h3>
          <p className={classes.year}>{year}</p>
        </div>
        {isDisabled ? (
          <></>
        ) : (
          <div className={classes.buttonWrapper} onClick={handleClick}>
            <button className={classes.favoriteButton}>Add to Favorite</button>
          </div>
        )}
      </div>
    </>
  );
}

export default Card;
