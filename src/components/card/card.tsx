import { useStyles } from './card-style';

interface MovieCardProps {
  title: string;
  year: number;
  posterUrl: string;
}

function Card({ title, year, posterUrl }: MovieCardProps) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.card}>
        <img src={posterUrl} alt={title} className={classes.poster} />
        <div className={classes.info}>
          <h3 className={classes.title}>{title}</h3>
          <p className={classes.year}>{year}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
