import { Link, useParams } from 'react-router-dom';
import CardDetail from '../../components/card-detail';
import Loading from '../../components/loading/loading';
import { useGetDetailMovie } from '../../hooks/useGetDetailMovie';
import { useStyles } from './detail-movie-style';

function DetailMovie() {
  const classes = useStyles();

  const { id } = useParams();

  const { data, isLoading } = useGetDetailMovie(id ?? '');

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className={classes.container}>
        <CardDetail
          title={data?.Title}
          year={data?.Year}
          rating={data?.Ratings[0]?.Value}
          releaseDate={data?.Released}
          genre={data?.Genre}
          writer={data?.Writer}
          actors={data?.Actors}
          plot={data?.Plot}
          language={data?.Language}
          awards={data?.Awards}
          posterUrl={data?.Poster}
        />

        <Link to="/" className={classes.backButton}>
          Back to Dashboard
        </Link>
      </div>
    </>
  );
}

export default DetailMovie;
