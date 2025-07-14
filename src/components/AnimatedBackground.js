import React from 'react';
import { useBackgroundConfig } from './BackgroundConfig';
import './AnimatedBackground.css';

const AnimatedBackground = ({ enabled = true }) => {
  const config = useBackgroundConfig();
  
  if (!enabled || !config.enabled || !config.globalEnabled) return null;

  return (
    <div className="animated-background">
      {/* Floating particles */}
      {config.showParticles && (
        <div className="particles-container">
          {[...Array(config.intensity === 'high' ? 30 : config.intensity === 'medium' ? 20 : 10)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                '--delay': `${Math.random() * 20}s`,
                '--duration': `${15 + Math.random() * 10}s`,
                '--size': `${2 + Math.random() * 3}px`,
                '--opacity': `${0.3 + Math.random() * 0.4}`,
                '--x-start': `${Math.random() * 100}%`,
                '--y-start': `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      )}

      {/* Flowing gradient waves */}
      {config.showWaves && (
        <div className="gradient-waves">
          <div className="wave wave-1"></div>
          <div className="wave wave-2"></div>
          <div className="wave wave-3"></div>
        </div>
      )}

      {/* Soft moving stars */}
      {config.showStars && (
        <div className="stars-container">
          {[...Array(config.intensity === 'high' ? 20 : config.intensity === 'medium' ? 15 : 8)].map((_, i) => (
            <div
              key={i}
              className="star"
              style={{
                '--delay': `${Math.random() * 10}s`,
                '--duration': `${8 + Math.random() * 12}s`,
                '--size': `${1 + Math.random() * 2}px`,
                '--x-start': `${Math.random() * 100}%`,
                '--y-start': `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      )}

      {/* Ambient light effects */}
      {config.showLights && (
        <div className="ambient-lights">
          <div className="light light-1"></div>
          <div className="light light-2"></div>
          <div className="light light-3"></div>
        </div>
      )}
    </div>
  );
};

export default AnimatedBackground; 