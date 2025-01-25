import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MdHome, MdSportsEsports, MdPodcasts } from "react-icons/md";

const TabBarContainer = styled.nav`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: var(--fill-color);
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
`;

const TabList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const TabItem = styled.li`
  flex: 1;
  height: 50px;
`;

const TabLink = styled(Link)`
  color: var(--tab-inactive);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-decoration: none;
  font-size: 12px;
  gap: 4px;

  svg {
    font-size: 24px;
    color: ${(props) =>
      props.$isActive ? "var(--tab-active)" : "var(--tab-inactive)"};
    transition: all 0.3s ease;
  }

  &:hover svg {
    transform: scale(1.1);
    color: var(--tab-active);
  }
`;

function TabBar() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <TabBarContainer>
      <TabList>
        <TabItem>
          <TabLink to="/" $isActive={currentPath === "/"}>
            <MdHome />
            Home
          </TabLink>
        </TabItem>
        <TabItem>
          <TabLink to="/podcast" $isActive={currentPath === "/podcast"}>
            <MdPodcasts />
            Podcast
          </TabLink>
        </TabItem>
        <TabItem>
          <TabLink to="/games" $isActive={currentPath === "/games"}>
            <MdSportsEsports />
            Games
          </TabLink>
        </TabItem>
      </TabList>
    </TabBarContainer>
  );
}

export default TabBar;
