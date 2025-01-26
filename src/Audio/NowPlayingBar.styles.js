import styled from "styled-components";

export const NowPlayingContainer = styled.div`
  position: fixed;
  bottom: 65px;
  left: 10px;
  right: 10px;
  background: rgba(255, 255, 255, 1);
  max-width: 430px;
  margin: 0 auto;
  border-radius: 12px;
  z-index: 1000;
  padding-bottom: 2px;
  backdrop-filter: blur(8px);
  margin-bottom: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);

  /* Gradient border effect */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 12px;
    padding: 2px;
    background: linear-gradient(
      to right,
      var(--primary) 0%,
      var(--secondary) 100%
    );
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`;

export const Title = styled.div`
  font-size: 19px;
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: -0.3px;
`;

export const ProgressBar = styled.div`
  width: calc(100% - 24px);
  height: 3px;
  background: rgba(0, 0, 0, 0.25); // More visible unfilled state
  position: absolute;
  bottom: 0;
  left: 12px;
  border-radius: 0 0 12px 12px;
  overflow: hidden;
`;

export const ProgressFill = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background: rgba(0, 0, 0, 0.7); // Solid black with slight transparency
  transition: width 0.1s linear;
`;

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 7px 18px;
  padding-bottom: 10px;
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;

export const ControlButton = styled.button`
  background: none;
  border: none;
  padding: 8px;
  color: var(--text-secondary);
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  border-radius: 50%;
  opacity: ${(props) => (props.disabled ? 0.5 : 0.6)};
  position: relative;
  z-index: 2;

  &:hover:not(:disabled) {
    opacity: 0.8;
    background: rgba(0, 0, 0, 0.05);
  }
`;

export const PlayButton = styled(ControlButton)`
  color: var(--primary);
  opacity: 1;

  &:hover:not(:disabled) {
    opacity: 1;
    background: rgba(0, 0, 0, 0.05);
    transform: scale(1.1);
  }

  &:active:not(:disabled) {
    transform: scale(0.95);
  }
`;

export const CloseButton = styled(ControlButton)`
  &:hover:not(:disabled) {
    color: var(--text-primary);
    background: rgba(0, 0, 0, 0.05);
    transform: scale(1.1);
  }

  &:active:not(:disabled) {
    transform: scale(0.95);
  }
`;
