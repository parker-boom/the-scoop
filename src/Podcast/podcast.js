import React, { useState, useContext } from "react";
import {
  PageContainer,
  TopPodcastSection,
  TitleContainer,
  TitleText,
  PlayButtonContainer,
  CollapsibleSection,
  CollapsibleHeader,
  CollapsibleTitle,
  CollapsibleContent,
  CustomizeContent,
  SourceList,
  SourceItem,
  SourceImage,
  SliderLabel,
  SliderInput,
  StyleOptions,
  StyleOption,
  HeadphoneIcon,
  HeaderLeft,
  HeaderEmoji,
  ChevronIcon,
  SourceTextContent,
  SourceTitle,
  SourcePublisher,
  SliderContainer,
  SliderValue,
  StyleSection,
  SourceChevron,
} from "./podcast.styles";
import { MdHeadphones, MdKeyboardArrowDown } from "react-icons/md";
import {
  BsEmojiSmile,
  BsEmojiLaughing,
  BsEmojiNeutral,
  BsBook,
} from "react-icons/bs";
import sourcesData from "./sources.json";
import articleImages from "../Assets/ArticleImages/images";
import { useAudio } from "../Audio/AudioContext";
import { usePreferences } from "../Shared/PreferencesContext";
import ArticlePopUp from "../Shared/articlePopUp";
import { PopupContext } from "../index";

function Podcast() {
  const [showSources, setShowSources] = useState(true);
  const [showCustomize, setShowCustomize] = useState(true);
  const [lengthValue, setLengthValue] = useState(6);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const { preferences, updatePreferences } = usePreferences();
  // Get style from preferences, default to "Down to Earth" if not set
  const [selectedStyle, setSelectedStyle] = useState(
    preferences.newsStyle || "Down to Earth"
  );

  const { isPlaying, togglePlay } = useAudio();
  const { setPopupArticle } = useContext(PopupContext);

  const toggleSources = () => {
    setShowSources(!showSources);
  };

  const toggleCustomize = () => {
    setShowCustomize(!showCustomize);
  };

  const handleStyleSelect = (style) => {
    setSelectedStyle(style);
    updatePreferences({ newsStyle: style });
  };

  // Style options array moved outside for clarity
  const styleOptions = [
    { name: "Cheerful", icon: BsEmojiSmile },
    { name: "Comedic", icon: BsEmojiLaughing },
    { name: "Down to Earth", icon: BsEmojiNeutral },
    { name: "Informative", icon: BsBook },
  ];

  const handleSourceClick = (source) => {
    // Only show popup for the first article (Cal Poly's Organic Farm)
    if (source.title === "Cal Poly's Organic Farm") {
      setPopupArticle({
        ...source,
        image: articleImages[source.image],
      });
    }
  };

  return (
    <PageContainer>
      {/* Top section with gradient background and play button */}
      <TopPodcastSection>
        <TitleContainer>
          <HeadphoneIcon>
            <MdHeadphones />
          </HeadphoneIcon>
          <TitleText>{"Today's\nScoop"}</TitleText>
        </TitleContainer>
        <PlayButtonContainer onClick={togglePlay}>
          <div className="play-icon">
            {isPlaying ? (
              // Pause icon using CSS
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  display: "flex",
                  gap: "6px",
                }}
              >
                <div
                  style={{
                    width: "6px",
                    height: "100%",
                    background: "var(--primary)",
                  }}
                />
                <div
                  style={{
                    width: "6px",
                    height: "100%",
                    background: "var(--primary)",
                  }}
                />
              </div>
            ) : (
              // Play triangle (existing style)
              <div className="play-icon" />
            )}
          </div>
        </PlayButtonContainer>
      </TopPodcastSection>

      {/* Collapsible "Sources" section */}
      <CollapsibleSection>
        <CollapsibleHeader onClick={toggleSources}>
          <HeaderLeft>
            <HeaderEmoji>📰</HeaderEmoji>
            <CollapsibleTitle>Latest Sources</CollapsibleTitle>
          </HeaderLeft>
          <ChevronIcon $isOpen={showSources}>
            <MdKeyboardArrowDown size={24} />
          </ChevronIcon>
        </CollapsibleHeader>
        <CollapsibleContent isOpen={showSources}>
          <SourceList>
            {sourcesData.sources.map((source, index) => (
              <SourceItem
                key={index}
                onClick={() => handleSourceClick(source)}
                style={{
                  cursor:
                    source.title === "Cal Poly's Organic Farm"
                      ? "pointer"
                      : "default",
                }}
              >
                <SourceImage
                  src={articleImages[source.image]}
                  alt={source.title}
                />
                <SourceTextContent>
                  <SourceTitle>{source.title}</SourceTitle>
                  <SourcePublisher>{source.group}</SourcePublisher>
                </SourceTextContent>
                <SourceChevron />
              </SourceItem>
            ))}
          </SourceList>
        </CollapsibleContent>
      </CollapsibleSection>

      {/* Add the ArticlePopUp component */}
      {selectedArticle && (
        <ArticlePopUp
          article={selectedArticle}
          onClose={() => setSelectedArticle(null)}
        />
      )}

      {/* Collapsible "Customize Tomorrow's Scoop" section */}
      <CollapsibleSection>
        <CollapsibleHeader onClick={toggleCustomize}>
          <HeaderLeft>
            <HeaderEmoji>⚡</HeaderEmoji>
            <CollapsibleTitle>Customize Tomorrow's Scoop</CollapsibleTitle>
          </HeaderLeft>
          <ChevronIcon $isOpen={showCustomize}>
            <MdKeyboardArrowDown size={24} />
          </ChevronIcon>
        </CollapsibleHeader>
        <CustomizeContent isOpen={showCustomize}>
          <SliderLabel>Length</SliderLabel>
          <SliderContainer>
            <SliderInput
              type="range"
              min="2"
              max="10"
              value={lengthValue}
              onChange={(e) => setLengthValue(e.target.value)}
            />
            <SliderValue>{lengthValue} minutes</SliderValue>
          </SliderContainer>

          <SliderLabel>Style</SliderLabel>
          <StyleSection>
            <StyleOptions>
              {styleOptions.map(({ name, icon: Icon }) => (
                <StyleOption
                  key={name}
                  isSelected={selectedStyle === name}
                  onClick={() => handleStyleSelect(name)}
                >
                  <Icon />
                  {name}
                </StyleOption>
              ))}
            </StyleOptions>
          </StyleSection>
        </CustomizeContent>
      </CollapsibleSection>
    </PageContainer>
  );
}

export default Podcast;
