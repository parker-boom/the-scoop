import React, { useState } from "react";
import articlesData from "./articles.json";
import {
  Container,
  GradientSection,
  Subtitle,
  CategoriesContainer,
  CategoryButton,
  ArticlesGrid,
  ArticleCard,
  ArticleTitle,
  SearchContainer,
  SearchIcon,
  SearchInput,
  PodcastContent,
  StyledPodcastIcon,
  ChevronRight,
  PodcastText,
  SubtitleContainer,
  StoryEmoji,
  ClearButton,
  CategoriesWrapper,
  PublisherLogo,
} from "./home.styles";
import { useNavigate } from "react-router-dom";
import { MdClose } from "react-icons/md";
import articleImages from "../Assets/ArticleImages/images";
import { MdEvent, MdGroups, MdWarning } from "react-icons/md";
import mnLogo from "../Assets/mnLogo.png";
import asiLogo from "../Assets/asiLogo.png";

// Category icon mapping
const categoryIcons = {
  1: MdEvent, // Events
  2: MdGroups, // Organizations
  3: MdWarning, // Breaking News
};

// Add a publisher logo mapping
const publisherLogos = {
  MustangNews: mnLogo,
  ASI: asiLogo,
};

const Home = () => {
  const navigate = useNavigate();

  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Extract categories from JSON, excluding "General" so it doesn't show as a button
  const categories = Object.keys(articlesData).filter(
    (cat) => cat !== "General"
  );

  // Filter articles based on both search and category
  const getFilteredArticles = () => {
    let articles = selectedCategory
      ? articlesData[selectedCategory]
      : articlesData["General"];

    if (searchText.trim() === "") return articles;

    return articles.filter((article) =>
      article.title.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <Container>
      {/* Podcast Section */}
      <GradientSection onClick={() => navigate("/podcast")}>
        <PodcastContent>
          <StyledPodcastIcon />
          <PodcastText>
            <span>Check out your</span>
            <span>personalized podcast</span>
          </PodcastText>
        </PodcastContent>
        <ChevronRight style={{ fontSize: "38px", fontWeight: "bold" }} />
      </GradientSection>

      {/* Title */}
      <SubtitleContainer>
        <StoryEmoji>📰</StoryEmoji>
        <Subtitle>Stories for you</Subtitle>
      </SubtitleContainer>

      {/* Search */}
      <SearchContainer>
        <SearchIcon />
        <SearchInput
          type="text"
          placeholder="Search stories..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </SearchContainer>

      {/* Categories */}
      <CategoriesContainer>
        <CategoriesWrapper>
          {categories.map((category, index) => {
            const Icon = categoryIcons[index + 1];
            return (
              <CategoryButton
                key={category}
                onClick={() => handleCategoryClick(category)}
                $isSelected={selectedCategory === category}
              >
                <Icon />
                {category}
              </CategoryButton>
            );
          })}
        </CategoriesWrapper>
        {selectedCategory && (
          <ClearButton onClick={() => setSelectedCategory(null)}>
            <MdClose style={{ fontSize: "20px" }} />
          </ClearButton>
        )}
      </CategoriesContainer>

      {/* Articles Grid */}
      <ArticlesGrid>
        {getFilteredArticles().map((article, index) => (
          <ArticleCard
            key={index}
            style={{
              backgroundImage: `url(${articleImages[article.image]})`,
            }}
          >
            <ArticleTitle>{article.title}</ArticleTitle>
            <PublisherLogo
              src={publisherLogos[article.publisher]}
              alt={article.publisher}
            />
          </ArticleCard>
        ))}
      </ArticlesGrid>
    </Container>
  );
};

export default Home;
