import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import styled from "styled-components";
import "./index.css";

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
  background: var(--background-color);
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
  margin-bottom: 60px;
  position: relative;
`;

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  background-color: #f5f5f5;
`;

function App() {
  const [showOnboarding, setShowOnboarding] = useState(false);

  if (showOnboarding) {
    return (
      <AppContainer>
        <PhoneContainer>
          <Onboarding onComplete={() => setShowOnboarding(false)} />
        </PhoneContainer>
      </AppContainer>
    );
  }

  return (
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
        <TabBar />
      </PhoneContainer>
    </AppContainer>
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
