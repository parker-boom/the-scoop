import React from "react";
import styled from "styled-components";
import { MdMic } from "react-icons/md";
import Waveform from "./Waveform";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  opacity: 0;
  animation: fadeIn 0.3s ease forwards;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ContentContainer = styled.div`
  background: var(--background-color);
  padding: 32px;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 80%;
  max-width: 320px;
  transform: translateY(20px);
  animation: slideUp 0.3s ease forwards;

  @keyframes slideUp {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const MicContainer = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(45deg, var(--primary) 0%, var(--secondary) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 32px;
  animation: pulse 2s ease-in-out infinite;

  @keyframes pulse {
    0% {
      transform: scale(1);
      box-shadow: 0 0 0 0 rgba(34, 127, 133, 0.4);
    }
    70% {
      transform: scale(1.05);
      box-shadow: 0 0 0 10px rgba(34, 127, 133, 0);
    }
    100% {
      transform: scale(1);
      box-shadow: 0 0 0 0 rgba(34, 127, 133, 0);
    }
  }
`;

const ListeningText = styled.div`
  font-size: 24px;
  font-weight: var(--font-weight-semibold);
  color: var(--text-primary);
  opacity: 0;
  animation: fadeIn 0.3s ease forwards 0.2s;
`;

const SubmitButton = styled.button`
  background: linear-gradient(45deg, var(--primary) 0%, var(--secondary) 100%);
  color: white;
  border: none;
  padding: 12px 32px;
  border-radius: 12px;
  font-size: 18px;
  font-weight: var(--font-weight-medium);
  cursor: pointer;
  transition: all 0.2s ease;
  opacity: 0;
  animation: fadeIn 0.3s ease forwards 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(34, 127, 133, 0.2);
  }

  &:active {
    transform: scale(0.95);
  }
`;

function CutInPopUp({ onSubmit }) {
  return (
    <Overlay>
      <ContentContainer>
        <MicContainer>
          <MdMic />
        </MicContainer>
        <ListeningText>Listening...</ListeningText>
        <Waveform />
        <SubmitButton onClick={onSubmit}>Submit</SubmitButton>
      </ContentContainer>
    </Overlay>
  );
}

export default CutInPopUp;
