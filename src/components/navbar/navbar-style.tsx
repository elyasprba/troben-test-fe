import { createUseStyles } from 'react-jss';

const navbarStyle = createUseStyles(() => ({
  navbar: {
    padding: '10px 0',
    borderBottom: '1px solid #07575b',
    textAlign: 'center',

    '& h3': {
      fontWeight: 'bold',
    },

    '& span': {
      color: '#66a5ad',
    },
  },
}));

export default navbarStyle;
