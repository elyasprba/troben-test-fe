import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    flexDirection: 'column',
    padding: '0 20px',
  },
  cardWrapper: {
    display: 'flex',
    gap: '20px',
    marginBottom: '3rem',
  },
  backButton: {
    marginBottom: '20px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    textDecoration: 'none',
    color: '#fff',
    backgroundColor: '#66a5ab',
    border: 'none',
    borderRadius: '4px',
    '&:hover': {
      backgroundColor: '#003b46',
    },
  },
  '@media (max-width: 420px)': {
    container: {
      height: '100%',
    },
    cardWrapper: {
      flexDirection: 'column',
      alignItems: 'center',
      gap: '10px',
    },
  },
});
