// Timer.js
import React from 'react';
import LinearProgressBar from './LinearProgressBar'; // Import LinearProgressBar component
import './Timer.css'; // Import Timer specific styles

const Timer = ({ timeLeft, timerMode, sessionCount, isRunning }) => {
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="timer-container">
      <h1 className="timer-heading">{timerMode}</h1>
      <LinearProgressBar timeLeft={timeLeft} className="linear-progress-bar" /> {/* Include LinearProgressBar component with the new class */}
      <div className="timer-circle">
        <h2 className="timer-text">{formatTime(timeLeft)}</h2>
      </div>
      <div className="session-counter"><strong style={{ fontSize: '20px', fontFamily: 'Times New Roman' }}>Session Count: {sessionCount}</strong></div> {/* Make the text bold, increase font size, and change font family */}
    </div>
  );
};

export default Timer;
