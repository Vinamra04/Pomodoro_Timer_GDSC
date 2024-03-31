// SettingsMenu.js
import React from 'react';

const SettingsMenu = ({ timerDurations, onChangeTimerDuration, onSave }) => {
  return (
    <div className="settings-menu">
      <h2>Customize Timer:</h2>
      <div className="timer-settings">
        <div>
          <label htmlFor="pomodoroDuration">Pomodoro:</label>
          <input
            type="number"
            id="pomodoroDuration"
            value={timerDurations.pomodoro}
            onChange={(e) => onChangeTimerDuration('pomodoro', e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="shortBreakDuration">Short Break:</label>
          <input
            type="number"
            id="shortBreakDuration"
            value={timerDurations.shortBreak}
            onChange={(e) => onChangeTimerDuration('shortBreak', e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="longBreakDuration">Long Break:</label>
          <input
            type="number"
            id="longBreakDuration"
            value={timerDurations.longBreak}
            onChange={(e) => onChangeTimerDuration('longBreak', e.target.value)}
          />
        </div>
      </div>
      <button className="button-custom" onClick={onSave}>SAVE</button> {/* Replace the existing button with the new button */}
    </div>
  );
};

export default SettingsMenu;
