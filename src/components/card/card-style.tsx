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
    cursor: 'pointer',
  },
  year: {
    fontSize: '14px',
    margin: 0,
  },
  buttonWrapper: {
    textAlign: 'center',
    marginBottom: '10px',
  },
  favoriteButton: {
    alignSelf: 'center',
    padding: '10px 20px',
    fontSize: '14px',
    cursor: 'pointer',
    backgroundColor: '#66a5ab',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    marginTop: '10px',
    '&:hover': {
      backgroundColor: '#003b46',
    },
  },
  bookmark: {
    float: 'right',
    cursor: 'pointer',
  },
});
