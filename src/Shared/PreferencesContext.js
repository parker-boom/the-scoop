import React, { createContext, useContext, useState, useEffect } from "react";

const PreferencesContext = createContext();

export function PreferencesProvider({ children }) {
  const [preferences, setPreferences] = useState(() => {
    // Load from localStorage on initial render
    const saved = localStorage.getItem("userPreferences");
    return saved
      ? JSON.parse(saved)
      : {
          interests: [],
          readingTime: 5,
          newsStyle: "Down to Earth",
        };
  });

  // Save to localStorage whenever preferences change
  useEffect(() => {
    localStorage.setItem("userPreferences", JSON.stringify(preferences));
  }, [preferences]);

  const updatePreferences = (newPreferences) => {
    setPreferences((prev) => ({
      ...prev,
      ...newPreferences,
    }));
  };

  const value = {
    preferences,
    updatePreferences,
  };

  return (
    <PreferencesContext.Provider value={value}>
      {children}
    </PreferencesContext.Provider>
  );
}

export function usePreferences() {
  const context = useContext(PreferencesContext);
  if (!context) {
    throw new Error("usePreferences must be used within a PreferencesProvider");
  }
  return context;
}
