import { useStyles } from './card-detail-style';

interface IMovieCardProps {
  title: string;
  year: number;
  rating: string;
  releaseDate: string;
  genre: string[];
  writer: string;
  actors: string[];
  plot: string;
  language: string[];
  awards: string;
  posterUrl: string;
}

function CardDetail({
  title,
  year,
  rating,
  releaseDate,
  genre,
  writer,
  actors,
  plot,
  language,
  awards,
  posterUrl,
}: IMovieCardProps) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.card}>
        <img src={posterUrl} alt={title} className={classes.poster} />
        <div className={classes.info}>
          <h2 className={classes.title}>{title}</h2>
          <div className={classes.metadata}>
            <span>Year: {year}</span>
            <span className={classes.rating}>Ratings: {rating}</span>
            <span>Released: {releaseDate}</span>
          </div>
          <div>Genre: {genre}</div>
          <div>Writer: {writer}</div>
          <div>Actors: {actors}</div>
          <p className={classes.plot}>Plot: {plot}</p>
          <div>Language: {language}</div>
          <div className={classes.awards}>{awards}</div>
        </div>
      </div>
    </>
  );
}

export default CardDetail;
