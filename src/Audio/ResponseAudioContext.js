import React, { createContext, useContext, useState, useRef } from "react";
import responseAudio from "./responseAudio.mp4";

const ResponseAudioContext = createContext();

export function ResponseAudioProvider({ children }) {
  const [isResponding, setIsResponding] = useState(false);
  const responseRef = useRef(new Audio(responseAudio));

  React.useEffect(() => {
    const response = responseRef.current;
    response.volume = 0;
    response.preload = "auto";
    response.load();

    const handleError = (e) => {
      console.error("Response audio error:", e);
    };

    response.addEventListener("error", handleError);

    return () => {
      response.removeEventListener("error", handleError);
      response.pause();
    };
  }, []);

  const playResponse = () => {
    const response = responseRef.current;
    response.volume = 0;
    response.play();
    setIsResponding(true);

    const fadeIn = (duration = 500) => {
      const interval = 50;
      const steps = duration / interval;
      const step = 1 / steps;

      const fadeInterval = setInterval(() => {
        response.volume = Math.min(1, response.volume + step);
        if (response.volume === 1) {
          clearInterval(fadeInterval);
        }
      }, interval);
    };

    setTimeout(() => fadeIn(), 1000);
  };

  const stopResponse = () => {
    const response = responseRef.current;
    response.pause();
    response.currentTime = 0;
    setIsResponding(false);
  };

  const value = {
    isResponding,
    playResponse,
    stopResponse,
  };

  return (
    <ResponseAudioContext.Provider value={value}>
      {children}
    </ResponseAudioContext.Provider>
  );
}

export function useResponseAudio() {
  const context = useContext(ResponseAudioContext);
  if (!context) {
    throw new Error(
      "useResponseAudio must be used within a ResponseAudioProvider"
    );
  }
  return context;
}
