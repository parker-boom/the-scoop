import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import styled from "styled-components";
import "./index.css";
import { AudioProvider } from "./Audio/AudioContext";
import NowPlayingBar from "./Audio/NowPlayingBar";
import { PreferencesProvider } from "./Shared/PreferencesContext.js";
import ArticlePopUp from "./Shared/articlePopUp";
import { ResponseAudioProvider } from "./Audio/ResponseAudioContext";

import Home from "./Home/home.js";
import Onboarding from "./Onboarding/onboarding.js";
import Podcast from "./Podcast/podcast.js";
import Games from "./Games/games.js";
import Header from "./Navigation/header.js";
import TabBar from "./Navigation/tabBar.js";

const PhoneContainer = styled.div`
  width: 100%;
  max-width: 450px;
  height: calc(100vh - 28px);
  margin: 14px auto;
  background: #f8f9fa; /* Light grey background */
  position: relative;
  border: 0px solid #000000;
  border-radius: 40px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media (max-width: 400px) {
    margin: 0;
    height: 100vh;
    border: none;
    border-radius: 0;
    box-shadow: none;
  }
`;

const ContentContainer = styled.main`
  flex: 1;
  overflow-y: auto;
  margin-top: 80px;
  margin-bottom: 50px;
  position: relative;

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  background-color: #f5f5f5;
`;

// Create a context for managing the popup
export const PopupContext = React.createContext();

function App() {
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [popupArticle, setPopupArticle] = useState(null);

  if (showOnboarding) {
    return (
      <PreferencesProvider>
        <AppContainer>
          <PhoneContainer>
            <Onboarding onComplete={() => setShowOnboarding(false)} />
          </PhoneContainer>
        </AppContainer>
      </PreferencesProvider>
    );
  }

  return (
    <PreferencesProvider>
      <AudioProvider>
        <ResponseAudioProvider>
          <PopupContext.Provider value={{ setPopupArticle }}>
            <AppContainer>
              <PhoneContainer>
                <Header />
                <ContentContainer>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/podcast" element={<Podcast />} />
                    <Route path="/games" element={<Games />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                  </Routes>
                </ContentContainer>
                <NowPlayingBar />
                <TabBar />
                {popupArticle && (
                  <ArticlePopUp
                    article={popupArticle}
                    onClose={() => setPopupArticle(null)}
                  />
                )}
              </PhoneContainer>
            </AppContainer>
          </PopupContext.Provider>
        </ResponseAudioProvider>
      </AudioProvider>
    </PreferencesProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
