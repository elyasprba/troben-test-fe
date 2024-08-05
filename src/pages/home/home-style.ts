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
  cardWrapper: {
    display: 'inline-grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
    width: '100%',
    justifyContent: 'center',
  },
});
