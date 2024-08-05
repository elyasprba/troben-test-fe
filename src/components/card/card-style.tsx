import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  card: {
    width: '100%',
    maxWidth: '250px',
    margin: '0 auto',
    backgroundColor: '#fff',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    cursor: 'pointer',
  },
  poster: {
    width: '100%',
    height: '350px',
    objectFit: 'cover',
  },
  info: {
    padding: '10px',
  },
  title: {
    margin: '0',
    fontSize: '18px',
    fontWeight: 'bold',
  },
  year: {
    fontSize: '14px',
    margin: 0,
  },
});
