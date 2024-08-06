import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
  },
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
    padding: '10px 0',
  },
  favoriteButton: {
    alignSelf: 'center',
    fontWeight: 'bold',
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
  cardWrapper: {
    display: 'inline-grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
    width: '100%',
    justifyContent: 'center',
  },
});
