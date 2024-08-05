import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  card: {
    display: 'flex',
    backgroundColor: '#003b46',
    color: 'white',
    padding: '20px',
    borderRadius: '10px',
    maxWidth: '800px',
    margin: '20px auto',
  },
  poster: {
    width: '200px',
    marginRight: '20px',
  },
  info: {
    flex: 1,
  },
  title: {
    color: '#66a5ad',
    fontSize: '24px',
    marginBottom: '10px',
  },
  metadata: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px',
  },
  rating: {
    backgroundColor: '#66a5ad',
    color: 'black',
    padding: '2px 5px',
    borderRadius: '3px',
  },
  plot: {
    marginBottom: '10px',
  },
  awards: {
    color: '#66a5ad',
  },
});
