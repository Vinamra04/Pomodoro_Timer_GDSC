// Controls.js
import React from 'react';
import './Controls.css'; // Import Controls specific styles

const Controls = ({ onStart, onPause, onReset, onSelectTimerMode, showModeButtons }) => {
  return (
    <div className="controls-container">
      {showModeButtons && (
        <>
          <button className="control-btn" onClick={() => onSelectTimerMode('Pomodoro')}>Pomodoro Timer</button>
          <button className="control-btn" onClick={() => onSelectTimerMode('Short Break')}>Short Break</button>
          <button className="control-btn" onClick={() => onSelectTimerMode('Long Break')}>Long Break</button>
        </>
      )}
      <button className="control-btn" onClick={onStart}>Start</button>
      <button className="control-btn" onClick={onPause}>Pause</button>
      <button className="control-btn" onClick={onReset}>Reset</button>
    </div>
  );
};

export default Controls;
