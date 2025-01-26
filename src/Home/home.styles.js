import styled from "styled-components";
import { MdPodcasts, MdChevronRight } from "react-icons/md";
import { IoSearch } from "react-icons/io5";

/* 
  Container for the entire page.
  Allows vertical scrolling and uses the background color from index.css.
*/
export const Container = styled.div`
  width: 100%;
  padding: 16px 0;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  /* Hide scrollbar */
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

/* 
  Top bar layout improvements
*/
export const TopBar = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 10px;
  align-items: center;
  padding: 20px 24px 16px;
  margin-top: 12px;
  background: none;
  box-shadow: none;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 60px;
    height: 60px;
    object-fit: contain;
  }
`;

/* 
  Search bar container on the right side of the top bar 
*/
export const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 0 24px;
  box-sizing: border-box;
  margin-top: 5px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 44px;
  padding: 0 16px 0 42px;
  border: none;
  border-radius: 12px;
  background-color: white;
  font-size: 15px;
  color: var(--text-primary);
  transition: all 0.2s ease;
  box-shadow: var(--shadow-light);

  &:focus {
    outline: none;
    box-shadow: var(--shadow-medium);
  }

  &::placeholder {
    color: var(--text-secondary);
  }
`;

export const SearchIcon = styled(IoSearch)`
  position: absolute;
  left: 36px;
  font-size: 20px;
  color: var(--text-secondary);
  transition: color 0.2s ease;
  pointer-events: none;

  ${SearchInput}:focus ~ & {
    color: var(--primary);
  }
`;

/* 
  The gradient section that links to the Podcast page
  Uses Cal Poly green and gold as a linear gradient background.
*/
export const GradientSection = styled.div`
  margin: 16px 24px;
  padding: 16px 24px;
  border-radius: 12px;
  background: linear-gradient(to right, var(--primary), var(--secondary));
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  box-shadow: var(--shadow-light);
`;

export const PodcastContent = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;

export const StyledPodcastIcon = styled(MdPodcasts)`
  font-size: 38px;
  font-weight: 650;
  color: white;
`;

export const ChevronRight = styled(MdChevronRight)`
  font-size: 24px;
  color: white;
`;

export const PodcastText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;

  span {
    font-size: 18px;
    font-weight: 650;
    line-height: 1.2;
  }
`;

/* 
  Subtitle above the articles 
*/
export const SubtitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 15px 24px 10px;
`;

export const Subtitle = styled.h2`
  color: var(--text-primary);
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.5px;
  margin: 0;
`;

export const StoryEmoji = styled.span`
  font-size: 28px;
  margin-right: -4px;
`;

/* 
  Container holding category buttons 
*/
export const CategoriesContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 24px 10px;
  gap: 10px;
`;

export const CategoriesWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  flex: 1;
`;

/* 
  Each category button: toggles selected / unselected states 
*/
export const CategoryButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background-color: ${(props) =>
    props.$isSelected ? "var(--primary)" : "white"};
  color: ${(props) => (props.$isSelected ? "white" : "var(--text-primary)")};
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;
  height: 36px;
  box-shadow: ${(props) =>
    props.$isSelected
      ? "0 4px 12px rgba(0, 128, 0, 0.2)"
      : "var(--shadow-light)"};

  svg {
    font-size: 18px;
  }

  &:hover {
    transform: translateY(-1px);
    box-shadow: ${(props) =>
      props.$isSelected
        ? "0 6px 14px rgba(0, 128, 0, 0.25)"
        : "var(--shadow-medium)"};
  }

  &:active {
    transform: translateY(0);
  }
`;

export const ClearButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  padding: 0;
  background-color: transparent;
  color: var(--text-secondary);
  border: 1.5px solid var(--header-border);
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s ease;
  flex-shrink: 0;

  &:hover {
    color: var(--text-primary);
    background-color: #f5f5f5;
    transform: rotate(90deg);
  }
`;

/* 
  Grid container for articles:
  - 2 columns on larger screens
  - Adjusts responsively (repeat(auto-fit, minmax(300px, 1fr))) 
*/
export const ArticlesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin: 1rem 2rem;
`;

/* 
  Each article card:
  - Uses the article image as a background
  - 16:9 aspect ratio via padding-bottom
*/
export const ArticleCard = styled.div`
  position: relative;
  background-size: cover;
  background-position: center;
  border-radius: 12px;
  padding-bottom: 56.25%; /* 16:9 ratio */
  box-shadow: var(--shadow-medium);
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.3) 40%,
      rgba(0, 0, 0, 0.7) 100%
    );
    backdrop-filter: blur(1px);
    -webkit-backdrop-filter: blur(1px);
  }
`;

/* 
  Title in the bottom-left corner of the article image 
*/
export const ArticleTitle = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 8px 20px;
  color: #ffffff;
  font-size: 22px;
  font-weight: 650;
  line-height: 1.3;
  z-index: 1;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5), 0 0 10px rgba(0, 0, 0, 0.3);
`;

export const PublisherLogo = styled.img`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 32px;
  padding: 4px;
  z-index: 2;
`;
