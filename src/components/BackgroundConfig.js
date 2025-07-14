import React, { createContext, useContext, useState } from 'react';

// Create context for background configuration
const BackgroundContext = createContext();

// Custom hook to use background configuration
export const useBackgroundConfig = () => {
  const context = useContext(BackgroundContext);
  if (!context) {
    throw new Error('useBackgroundConfig must be used within a BackgroundProvider');
  }
  return context;
};

// Background configuration provider
export const BackgroundProvider = ({ children }) => {
  const [backgroundConfig, setBackgroundConfig] = useState({
    enabled: true,
    intensity: 'medium', // 'low', 'medium', 'high'
    showParticles: true,
    showWaves: true,
    showStars: true,
    showLights: true,
    globalEnabled: true, // Global toggle for all pages
  });

  const updateBackgroundConfig = (newConfig) => {
    setBackgroundConfig(prev => ({ ...prev, ...newConfig }));
  };

  const toggleBackground = () => {
    setBackgroundConfig(prev => ({ ...prev, enabled: !prev.enabled }));
  };

  const toggleGlobalBackground = () => {
    setBackgroundConfig(prev => ({ ...prev, globalEnabled: !prev.globalEnabled }));
  };

  const setIntensity = (intensity) => {
    setBackgroundConfig(prev => ({ ...prev, intensity }));
  };

  return (
    <BackgroundContext.Provider value={{
      ...backgroundConfig,
      updateBackgroundConfig,
      toggleBackground,
      toggleGlobalBackground,
      setIntensity,
    }}>
      {children}
    </BackgroundContext.Provider>
  );
};

export default BackgroundProvider; 