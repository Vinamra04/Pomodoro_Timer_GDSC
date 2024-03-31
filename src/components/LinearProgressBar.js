// LinearProgressBar.js
import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';

const LinearProgressBar = ({ timeLeft }) => {
  // Calculate the progress percentage
  const progress = ((timeLeft / (25 * 60)) * 100).toFixed(2);

  return (
    <div style={{ width: '80%', margin: '0 auto', marginTop: '10px' }}> {/* Adjust margin-top */}
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          height: 10,
          '& .MuiLinearProgress-bar': {
            backgroundImage: 'linear-gradient(to right, rgba(158, 38, 255, 1), rgba(16, 25, 218, 1))' // Set the gradient color of the progress bar
          }
        }}
      />
      <hr style={{ marginTop: '30px', border: 'none', height: '1px', backgroundColor: 'transparent' }} /> {/* Add a line below the progress bar */}
    </div>
  );
};

export default LinearProgressBar;
