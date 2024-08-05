import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    flexDirection: 'column',
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
});
