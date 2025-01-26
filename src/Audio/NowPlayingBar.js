import React from "react";
import { MdClose, MdPause, MdPlayArrow, MdMic } from "react-icons/md";
import {
  NowPlayingContainer,
  ProgressBar,
  ProgressFill,
  ContentContainer,
  Title,
  Controls,
  ControlButton,
  PlayButton,
  CloseButton,
} from "./NowPlayingBar.styles";
import { useAudio } from "./AudioContext";

function NowPlayingBar() {
  const { isPlaying, showPlayer, progress, duration, togglePlay, stop } =
    useAudio();

  if (!showPlayer) return null;

  const progressPercent = duration ? (progress / duration) * 100 : 0;

  return (
    <NowPlayingContainer>
      <ProgressBar>
        <ProgressFill style={{ width: `${progressPercent}%` }} />
      </ProgressBar>
      <ContentContainer>
        <Title>Roots, Reform, and Risk</Title>
        <Controls>
          <ControlButton disabled>
            <MdMic size={22} />
          </ControlButton>
          <PlayButton onClick={togglePlay}>
            {isPlaying ? <MdPause size={24} /> : <MdPlayArrow size={24} />}
          </PlayButton>
          <CloseButton onClick={stop}>
            <MdClose size={22} />
          </CloseButton>
        </Controls>
      </ContentContainer>
    </NowPlayingContainer>
  );
}

export default NowPlayingBar;
