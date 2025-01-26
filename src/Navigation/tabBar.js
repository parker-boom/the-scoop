import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  MdHome,
  MdOutlineHome,
  MdSportsEsports,
  MdOutlineSportsEsports,
  MdPodcasts,
  MdOutlinePodcasts,
} from "react-icons/md";

const TabBarContainer = styled.nav`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
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
  height: 40px;
`;

const TabLink = styled(Link)`
  color: var(--tab-inactive);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-decoration: none;

  svg {
    font-size: 28px;
    color: ${(props) =>
      props.$isActive ? "var(--primary)" : "var(--text-secondary)"};
    transition: all 0.2s ease;
  }

  &:hover svg {
    transform: scale(1.1);
    color: var(--primary);
  }
`;

function TabBar() {
  const location = useLocation();
  const currentPath = location.pathname;

  const getIcon = (path) => {
    switch (path) {
      case "/":
        return currentPath === "/" ? <MdHome /> : <MdOutlineHome />;
      case "/podcast":
        return currentPath === "/podcast" ? (
          <MdPodcasts />
        ) : (
          <MdOutlinePodcasts />
        );
      case "/games":
        return currentPath === "/games" ? (
          <MdSportsEsports />
        ) : (
          <MdOutlineSportsEsports />
        );
      default:
        return <MdOutlineHome />;
    }
  };

  return (
    <TabBarContainer>
      <TabList>
        <TabItem>
          <TabLink to="/" $isActive={currentPath === "/"}>
            {getIcon("/")}
          </TabLink>
        </TabItem>
        <TabItem>
          <TabLink to="/podcast" $isActive={currentPath === "/podcast"}>
            {getIcon("/podcast")}
          </TabLink>
        </TabItem>
        <TabItem>
          <TabLink to="/games" $isActive={currentPath === "/games"}>
            {getIcon("/games")}
          </TabLink>
        </TabItem>
      </TabList>
    </TabBarContainer>
  );
}

export default TabBar;
