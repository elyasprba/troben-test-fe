import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  loadingContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100%',
  },
  spinner: {
    width: '50px',
    height: '50px',
    border: '5px solid #f3f3f3',
    borderTop: '5px solid #3498db',
    borderRadius: '50%',
    animation: '$spin 1s linear infinite',
  },
  '@keyframes spin': {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' },
  },
});

interface LoadingProps {
  message?: string;
}

const Loading: React.FC<LoadingProps> = ({ message = 'Loading...' }) => {
  const classes = useStyles();

  return (
    <div className={classes.loadingContainer}>
      <div>
        <div className={classes.spinner}></div>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Loading;
