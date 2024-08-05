import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '20px',
  },
  input: {
    width: '300px',
    padding: '10px',
    marginBottom: '10px',
    outline: 'none',
    borderRadius: '4px',
    border: '1px solid #66a5ad',
    '&:focus': {
      color: '#07575b',
    },
  },
});
