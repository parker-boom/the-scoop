import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { MdHome, MdSportsEsports, MdPodcasts, MdMenu } from "react-icons/md";

const HeaderContainer = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 65px;
  background-color: var(--background-color);
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 0 24px 12px;
  z-index: 100;
  border-bottom: 1px solid var(--header-border);
`;

const ViewInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const ViewIcon = styled.div`
  display: flex;
  align-items: center;
  font-size: 32px;
  color: var(--header-icon);
  opacity: 0.9;
  margin-top: 4px;
`;

const ViewTitle = styled.h1`
  margin: 0;
  font-size: 32px;
  font-weight: 700;
  font-family: var(--font-display);
  color: var(--header-text);
  letter-spacing: -0.5px;
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  color: var(--header-icon);
  display: flex;
  align-items: center;
  margin-right: 8px;
  margin-bottom: 4px;

  svg {
    font-size: 34px;
    opacity: 0.9;
  }
`;

function Header() {
  const location = useLocation();
  const path = location.pathname;

  const viewConfigs = {
    "/": { icon: MdHome, title: "Home" },
    "/podcast": { icon: MdPodcasts, title: "Podcast" },
    "/games": { icon: MdSportsEsports, title: "Games" },
  };

  const currentView = viewConfigs[path] || viewConfigs["/"];
  const Icon = currentView.icon;

  return (
    <HeaderContainer>
      <ViewInfo>
        <ViewIcon>
          <Icon />
        </ViewIcon>
        <ViewTitle>{currentView.title}</ViewTitle>
      </ViewInfo>
      <MenuButton>
        <MdMenu />
      </MenuButton>
    </HeaderContainer>
  );
}

export default Header;
