import React, { useState } from "react";
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
  TimeStamp,
} from "./NowPlayingBar.styles";
import { useAudio } from "./AudioContext";
import { useResponseAudio } from "./ResponseAudioContext";
import CutInPopUp from "./cutInPopUp";

function NowPlayingBar() {
  const { isPlaying, showPlayer, progress, duration, togglePlay, stop, pause } =
    useAudio();

  const { isResponding, playResponse } = useResponseAudio();
  const [showCutIn, setShowCutIn] = useState(false);

  if (!showPlayer) return null;

  const progressPercent = duration ? (progress / duration) * 100 : 0;

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const handleMicClick = () => {
    setShowCutIn(true);
    pause(); // Pause the main podcast
  };

  const handleCutInSubmit = () => {
    setShowCutIn(false);
    playResponse();
  };

  return (
    <>
      <NowPlayingContainer>
        {!isResponding && <TimeStamp>{formatTime(progress)}</TimeStamp>}
        {!isResponding && (
          <ProgressBar>
            <ProgressFill style={{ width: `${progressPercent}%` }} />
          </ProgressBar>
        )}
        <ContentContainer>
          <Title>
            {isResponding ? "Responding..." : "Roots, Reform, and Risk"}
          </Title>
          <Controls>
            <ControlButton onClick={handleMicClick} disabled={isResponding}>
              <MdMic size={22} />
            </ControlButton>
            {!isResponding && (
              <PlayButton onClick={togglePlay}>
                {isPlaying ? <MdPause size={24} /> : <MdPlayArrow size={24} />}
              </PlayButton>
            )}
            <CloseButton onClick={stop}>
              <MdClose size={22} />
            </CloseButton>
          </Controls>
        </ContentContainer>
      </NowPlayingContainer>
      {showCutIn && <CutInPopUp onSubmit={handleCutInSubmit} />}
    </>
  );
}

export default NowPlayingBar;
