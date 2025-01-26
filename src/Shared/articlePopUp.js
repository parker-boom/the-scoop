import React from "react";
import styled from "styled-components";
import { BsLink45Deg } from "react-icons/bs";
import mnLogo from "../Assets/mnLogo2.png";

const PopUpOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const PopUpContent = styled.div`
  background: white;
  padding: 24px;
  border-radius: 16px;
  width: calc(100% - 48px);
  max-width: 400px;
  height: calc(100% - 200px);
  margin: 0 20px;
  overflow-y: auto;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: var(--text);
  padding: 8px;
  z-index: 1;
`;

const ArticleTitle = styled.h1`
  margin: 0 0 16px 0;
  color: var(--text-primary);
  font-family: var(--font-display);
  font-size: 28px;
  line-height: var(--line-height-tight);
`;

const InterestTag = styled.span`
  background-color: var(--primary-light);
  color: var(--primary);
  padding: 6px 12px;
  border-radius: 20px;
  font-size: var(--font-size-small);
  font-weight: var(--font-weight-medium);
  display: inline-block;
  margin-bottom: 20px;
  width: 60px;
`;

const ArticleImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 12px;
`;

const ArticleSummary = styled.p`
  color: var(--text-primary);
  line-height: var(--line-height-relaxed);
  font-size: var(--font-size-body);
  margin-bottom: 24px;
  flex: 1;
`;

const PublisherContainer = styled.div`
  background-color: #f8f9fa;
  border-radius: 12px;
  padding: 16px;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const PublisherLogo = styled.img`
  height: 30px;
  margin-right: 12px;
`;

const PublisherInfo = styled.div`
  flex: 1;
`;

const PublisherName = styled.div`
  font-weight: var(--font-weight-semibold);
  color: var(--text-primary);
  display: flex;
  align-items: center;
  gap: 6px;
`;

const JournalistName = styled.div`
  color: var(--text-secondary);
  font-size: var(--font-size-small);
  margin-top: 4px;
`;

const ReadMoreButton = styled.a`
  background-color: var(--primary);
  color: white;
  padding: 14px 24px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: var(--font-weight-medium);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.2s;
  margin-top: auto;

  &:hover {
    background-color: #1b666b;
  }
`;

function ArticlePopUp({ article, onClose }) {
  if (!article) return null;

  return (
    <PopUpOverlay onClick={onClose}>
      <PopUpContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>

        <ArticleTitle>{article.title}</ArticleTitle>
        <InterestTag>{article.interests}</InterestTag>

        <ArticleImage src={article.image} alt={article.title} />
        <ArticleSummary>{article.summary}</ArticleSummary>

        <PublisherContainer>
          <PublisherLogo src={mnLogo} alt="Mustang News" />
          <PublisherInfo>
            <PublisherName>
              {article.group}
              <BsLink45Deg size={20} color="var(--primary)" />
            </PublisherName>
            <JournalistName>By {article.journalist}</JournalistName>
          </PublisherInfo>
        </PublisherContainer>

        <ReadMoreButton
          href={article.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Read Full Article
        </ReadMoreButton>
      </PopUpContent>
    </PopUpOverlay>
  );
}

export default ArticlePopUp;
