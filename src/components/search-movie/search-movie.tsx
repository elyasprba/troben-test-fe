import { useStyles } from './search-move-style';

interface ISearchMovie {
  search: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleChange: any;
}

function SearchMovie({ search, handleChange }: ISearchMovie) {
  const classes = useStyles();

  return (
    <form className={classes.form}>
      <input
        type="text"
        className={classes.input}
        placeholder="Cari..."
        value={search}
        onChange={handleChange}
      />
    </form>
  );
}

export default SearchMovie;
