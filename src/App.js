// App.js
import React, { useState, useEffect } from 'react';
import Timer from './components/Timer';
import Controls from './components/Controls';
import SettingsMenu from './components/SettingsMenu';
import './App.css';

function App() {
  const [timerMode, setTimerMode] = useState('Pomodoro');
  const [timerDuration, setTimerDuration] = useState({
    pomodoro: 25 * 60,
    shortBreak: 5 * 60,
    longBreak: 15 * 60
  });
  const [timeLeft, setTimeLeft] = useState(timerDuration.pomodoro);
  const [isRunning, setIsRunning] = useState(false);
  const [sessionCount, setSessionCount] = useState(0);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    // Update timeLeft whenever timerDuration changes
    setTimeLeft(timerDuration.pomodoro);
  }, [timerDuration]);

  useEffect(() => {
    let intervalId;

    if (isRunning && timeLeft > 0) {
      intervalId = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      // Handle timer completion
      // Example logic: Switch to the next mode
      // You might need to adjust this logic based on your requirements
      if (sessionCount % 2 === 0) {
        setTimerMode('Short Break');
        setTimerDuration({ ...timerDuration, pomodoro: 5 * 60 });
        setTimeLeft(5 * 60);
      } else {
        setTimerMode('Pomodoro');
        setTimerDuration({ ...timerDuration, pomodoro: 25 * 60 });
        setTimeLeft(25 * 60);
      }
      setSessionCount(sessionCount + 1);
      setIsRunning(false);
    }

    return () => clearInterval(intervalId);
  }, [isRunning, timeLeft, timerDuration, sessionCount]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(timerDuration.pomodoro);
  };

  const handleToggleSettings = () => {
    setShowSettings(!showSettings);
  };

  const handleChangeTimerDuration = (timerType, value) => {
    setTimerDuration({
      ...timerDuration,
      [timerType]: parseInt(value, 10)
    });
  };

  const handleSaveSettings = () => {
    setTimeLeft(timerDuration.pomodoro);
    setShowSettings(false);
  };

  const onSelectTimerMode = (mode) => {
    let duration = timerDuration.pomodoro;
    if (mode === 'Pomodoro') {
      duration = timerDuration.pomodoro;
    } else if (mode === 'Short Break') {
      duration = timerDuration.shortBreak;
    } else if (mode === 'Long Break') {
      duration = timerDuration.longBreak;
    }
    setTimerMode(mode);
    setTimeLeft(duration);
    setIsRunning(false);
  };

  return (
    <div className="App">
      <div className="mode-controls">
        <button className="control-btn" onClick={() => onSelectTimerMode('Pomodoro')}>Pomodoro Timer</button>
        <button className="control-btn" onClick={() => onSelectTimerMode('Short Break')}>Short Break</button>
        <button className="control-btn" onClick={() => onSelectTimerMode('Long Break')}>Long Break</button>
        <button className="control-btn" onClick={handleToggleSettings}>Settings</button>
      </div>
      <Timer timeLeft={timeLeft} timerMode={timerMode} sessionCount={sessionCount} />
      <Controls
        onStart={handleStart}
        onPause={handlePause}
        onReset={handleReset}
        onSelectTimerMode={onSelectTimerMode}
      />
      {showSettings && (
        <SettingsMenu
          timerDurations={timerDuration}
          onChangeTimerDuration={handleChangeTimerDuration}
          onSave={handleSaveSettings}
        />
      )}
    </div>
  );
}

export default App;
