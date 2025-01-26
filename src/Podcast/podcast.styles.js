import styled from "styled-components";
import { MdChevronRight } from "react-icons/md";

/* 
  We assume you have index.css with CSS variables.
  These styled-components reference those variables with var(--...).
*/

export const PageContainer = styled.div`
  padding: 0 24px;
  margin-top: 15px;
  overflow-y: auto;

  /* Hide scrollbar */
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

/* Top Section for the Podcast playback */
export const TopPodcastSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 160px;
  background: linear-gradient(45deg, var(--primary) 0%, var(--secondary) 100%);
  border-radius: 20px;
  padding: 24px;
  margin-bottom: 16px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`;

export const TitleText = styled.h1`
  font-size: 32px;
  font-weight: 650;
  white-space: pre-line; /* Allows "\n" in the text */
  color: var(--fill-color);
  margin: 0;
`;

/* Play button on the right side */
export const HeadphoneIcon = styled.div`
  color: rgba(255, 255, 255, 0.3);
  font-size: 42px;
  margin-bottom: 8px;
`;

export const PlayButtonContainer = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: var(--fill-color);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }

  .play-icon {
    display: flex;
    align-items: center;
    justify-content: center;

    // For the play triangle
    &:empty {
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 18px 0 18px 28px;
      border-color: transparent transparent transparent var(--primary);
      margin-left: 6px;
    }
  }
`;

/* Collapsible Section Container */
export const CollapsibleSection = styled.div`
  background-color: var(--background-color);
  border-radius: 12px;
  box-shadow: var(--shadow-light);
  overflow: hidden;
  margin-bottom: 16px;
`;

export const CollapsibleHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  cursor: pointer;
  border-bottom: 2px solid var(--header-border);
  background-color: var(--fill-color);
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const HeaderEmoji = styled.span`
  font-size: 20px;
`;

export const ChevronIcon = styled.div`
  color: var(--text-secondary);
  transition: transform 0.3s ease;
  transform: ${(props) => (props.$isOpen ? "rotate(-180deg)" : "rotate(0)")};
`;

export const CollapsibleTitle = styled.h2`
  margin: 0;
  font-size: 18px;
  color: var(--text-primary);
`;

// Base CollapsibleContent that both will extend
const BaseCollapsibleContent = styled.div`
  width: 100%;
  overflow-y: auto;
  transition: max-height 0.3s ease;
`;

// Scrollable version for Sources
export const CollapsibleContent = styled(BaseCollapsibleContent)`
  max-height: ${(props) => (props.isOpen ? "200px" : "0px")};

  /* Hide scrollbar */
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

// Full height version for Customize section
export const CustomizeContent = styled(BaseCollapsibleContent)`
  max-height: ${(props) => (props.isOpen ? "1000px" : "0px")};
  margin-bottom: ${(props) => (props.isOpen ? "15px" : "0")};
`;

/* Source List for articles */
export const SourceList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const SourceItem = styled.div`
  display: flex;
  align-items: stretch;
  width: 100%;
  height: 72px;
  cursor: pointer;
  background: var(--background-color);
  transition: background-color 0.2s ease;

  &:not(:last-child) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  }

  &:hover {
    background-color: #f8f9fa;
  }
`;

export const SourceImage = styled.img`
  width: 72px;
  height: 72px;
  object-fit: cover;
  flex-shrink: 0;
`;

export const SourceTextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 0 16px;
  flex: 1;
  justify-content: center;
`;

export const SourceTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
`;

export const SourcePublisher = styled.div`
  font-size: 14px;
  color: var(--text-secondary);
`;

export const SourceChevron = styled(MdChevronRight)`
  color: var(--primary);
  font-size: 24px;
  font-weight: 600;
  margin-right: 12px;
  opacity: 0.7;
  align-self: center;

  ${SourceItem}:hover & {
    opacity: 1;
    transform: translateX(2px);
  }
  transition: all 0.2s ease;
`;

/* Settings within "Customize Tomorrow's Scoop" */
export const SliderLabel = styled.label`
  display: block;
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
  padding: 20px 20px 12px;
`;

export const SliderContainer = styled.div`
  padding: 0 20px 20px;
`;

export const SliderValue = styled.div`
  color: var(--text-secondary);
  font-size: 14px;
  margin-top: 8px;
`;

export const SliderInput = styled.input`
  width: 100%;
  height: 4px;
  background: #e0e0e0;
  border-radius: 2px;
  outline: none;
  -webkit-appearance: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    background: var(--primary);
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }

  &::-webkit-slider-thumb:hover {
    transform: scale(1.1);
  }
`;

export const StyleSection = styled.div`
  padding: 0 20px 20px;
`;

export const StyleOptions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
`;

export const StyleOption = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  text-align: center;
  border-radius: 12px;
  background-color: ${(props) =>
    props.isSelected ? "var(--primary)" : "var(--fill-color)"};
  color: ${(props) => (props.isSelected ? "#fff" : "var(--text-primary)")};
  border: 1.5px solid
    ${(props) => (props.isSelected ? "var(--primary)" : "var(--header-border)")};
  cursor: pointer;
  transition: all 0.2s ease;

  svg {
    font-size: 24px;
    opacity: ${(props) => (props.isSelected ? 1 : 0.7)};
  }

  &:hover {
    transform: translateY(-2px);
    background-color: ${(props) =>
      props.isSelected ? "var(--primary)" : "#f5f5f5"};
    border-color: ${(props) =>
      props.isSelected ? "var(--primary)" : "var(--primary)"};
  }

  &:active {
    transform: translateY(0);
  }
`;
