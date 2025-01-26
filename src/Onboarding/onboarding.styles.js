import styled from "styled-components";
import { MdKeyboardArrowDown } from "react-icons/md";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  height: 100%;
  gap: 5px;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-bottom: 8px;
  margin-top: 8px;

  img {
    width: 110px;
    height: 50px;
  }
`;

export const Message = styled.h1`
  color: var(--text-primary);
  font-size: 28px;
  font-weight: 700;
  margin: 0 25px 28px;
  letter-spacing: -0.5px;
  text-align: center;
`;

export const Section = styled.div`
  margin-bottom: 16px;
  border-radius: 12px;
  background: ${(props) =>
    props.$isActive ? "var(--fill-color)" : "transparent"};
  box-shadow: ${(props) => (props.$isActive ? "var(--shadow-light)" : "none")};
  transition: all 0.3s ease;
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  cursor: pointer;
  background: var(--fill-color);
  box-shadow: var(--shadow-light);
  border-radius: ${(props) => (props.$isActive ? "12px 12px 0 0" : "12px")};
  transition: border-radius 0.2s ease;

  h2 {
    margin: 0;
    font-size: 18px;
    color: var(--text-primary);
    font-weight: 600;
  }
`;

export const Chevron = styled(MdKeyboardArrowDown)`
  font-size: 24px;
  color: var(--text-secondary);
  transition: transform 0.2s ease;
  transform: ${(props) => (props.$isActive ? "rotate(-180deg)" : "rotate(0)")};
`;

export const SectionContent = styled.div`
  padding: ${(props) => (props.$isActive ? "16px" : "0")};
  max-height: ${(props) => (props.$isActive ? "400px" : "0")};
  overflow: hidden;
  transition: ${(props) =>
    props.$isActive
      ? "all 0.3s ease"
      : "all 0s"}; // Instant close, animated open
`;

export const ButtonGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const SelectButton = styled.button`
  padding: 8px 16px;
  border-radius: 20px;
  border: none;
  background: ${(props) =>
    props.$isSelected ? "var(--primary)" : "var(--fill-color)"};
  color: ${(props) =>
    props.$isSelected ? "#ffffff" : "var(--text-secondary)"};
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: var(--shadow-light);

  &:hover {
    transform: scale(1.05);
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Input = styled.input`
  padding: 12px;
  border-radius: 8px;
  border: 1px solid var(--header-border);
  font-size: 16px;
  outline: none;

  &:focus {
    border-color: var(--primary);
  }
`;

export const StartButton = styled.button`
  margin-top: auto;
  padding: 16px;
  border-radius: 12px;
  border: none;
  background: ${(props) => (props.$isEnabled ? "var(--primary)" : "#cccccc")};
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: ${(props) => (props.$isEnabled ? "pointer" : "not-allowed")};
  transition: all 0.2s ease;

  &:hover {
    transform: ${(props) => (props.$isEnabled ? "scale(1.02)" : "none")};
  }
`;

export const Select = styled.select`
  padding: 12px;
  border-radius: 8px;
  border: 1px solid var(--header-border);
  font-size: 16px;
  outline: none;
  background: var(--fill-color);

  &:focus {
    border-color: var(--primary);
  }
`;

// Style variations for different sections
export const StyleButton = styled(SelectButton)`
  background: ${(props) =>
    props.$isSelected ? "var(--primary)" : "var(--fill-color)"};
  border: 2px solid var(--primary);
  font-weight: 600;
`;

export const InterestButton = styled(SelectButton)`
  background: ${(props) =>
    props.$isSelected ? "var(--secondary)" : "var(--fill-color)"};
  border: none;
  font-weight: 500;
`;

export const PublisherButton = styled(SelectButton)`
  background: ${(props) =>
    props.$isSelected ? "var(--text-primary)" : "var(--fill-color)"};
  border: 1px solid var(--header-border);
  font-weight: 400;
`;
