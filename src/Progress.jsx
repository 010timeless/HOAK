import React from 'react';
import './Progress.css';

function Progress() {
  return (
    <div className="loading-container">
      <h2 className="loading-title">House Of Ansan KIM</h2>
      <div className="progress-track">
        <div className="progress-fill"></div>
      </div>
    </div>
  );
}

export default Progress;