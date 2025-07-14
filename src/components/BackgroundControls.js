import React, { useState } from 'react';
import { useBackgroundConfig } from './BackgroundConfig';
import './BackgroundControls.css';

const BackgroundControls = () => {
  const [isOpen, setIsOpen] = useState(false);
  const config = useBackgroundConfig();

  const handleToggle = () => {
    config.toggleBackground();
  };

  const handleGlobalToggle = () => {
    config.toggleGlobalBackground();
  };

  const handleIntensityChange = (intensity) => {
    config.setIntensity(intensity);
  };

  const handleToggleElement = (element) => {
    config.updateBackgroundConfig({
      [element]: !config[element]
    });
  };

  return (
    <div className="background-controls">
      <button 
        className="control-toggle-btn"
        onClick={() => setIsOpen(!isOpen)}
        title="Background Settings"
      >
        ✨
      </button>
      
      {isOpen && (
        <div className="control-panel">
          <div className="control-section">
            <h6>Global Background</h6>
            <button 
              className={`control-btn ${config.globalEnabled ? 'active' : ''}`}
              onClick={handleGlobalToggle}
            >
              {config.globalEnabled ? 'All Pages' : 'Disabled'}
            </button>
          </div>

          <div className="control-section">
            <h6>Current Page</h6>
            <button 
              className={`control-btn ${config.enabled ? 'active' : ''}`}
              onClick={handleToggle}
            >
              {config.enabled ? 'Enabled' : 'Disabled'}
            </button>
          </div>

          <div className="control-section">
            <h6>Intensity</h6>
            <div className="intensity-buttons">
              {['low', 'medium', 'high'].map(intensity => (
                <button
                  key={intensity}
                  className={`control-btn ${config.intensity === intensity ? 'active' : ''}`}
                  onClick={() => handleIntensityChange(intensity)}
                >
                  {intensity.charAt(0).toUpperCase() + intensity.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="control-section">
            <h6>Elements</h6>
            <div className="element-toggles">
              <button 
                className={`control-btn ${config.showParticles ? 'active' : ''}`}
                onClick={() => handleToggleElement('showParticles')}
              >
                Particles
              </button>
              <button 
                className={`control-btn ${config.showWaves ? 'active' : ''}`}
                onClick={() => handleToggleElement('showWaves')}
              >
                Waves
              </button>
              <button 
                className={`control-btn ${config.showStars ? 'active' : ''}`}
                onClick={() => handleToggleElement('showStars')}
              >
                Stars
              </button>
              <button 
                className={`control-btn ${config.showLights ? 'active' : ''}`}
                onClick={() => handleToggleElement('showLights')}
              >
                Lights
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BackgroundControls; 