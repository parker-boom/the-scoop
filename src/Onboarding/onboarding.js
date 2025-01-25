import React, { useState, useEffect } from "react";
import options from "./options.json";
import logo from "../Assets/logo512.png";
import {
  Container,
  Message,
  Section,
  SectionHeader,
  SectionContent,
  ButtonGrid,
  SelectButton,
  InputGroup,
  Input,
  StartButton,
  LogoContainer,
  Select,
  StyleButton,
  InterestButton,
  PublisherButton,
} from "./onboarding.styles";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Chevron } from "./onboarding.styles";

function Onboarding({ onComplete }) {
  const [activeSection, setActiveSection] = useState("personal");
  const [selections, setSelections] = useState({
    personal: { name: "", major: "", year: "" },
    style: [],
    interests: [],
    publishers: [],
  });

  const sections = [
    {
      id: "personal",
      title: "👤 Personal Info",
      message: "Welcome to NAME! Let's get to know you better.",
    },
    {
      id: "style",
      title: "🎭 Podcast Style",
      message: "How do you want your podcast hosts to be?",
    },
    {
      id: "interests",
      title: "🎯 Your Interests",
      message: "What are you most interested in here?",
    },
    {
      id: "publishers",
      title: "📰 News Sources",
      message: "Who do you want to hear from the most?",
    },
  ];

  useEffect(() => {
    if (selections.style.length === 1) {
      setTimeout(() => {
        setActiveSection("interests");
      }, 300);
    }
  }, [selections.style]);

  const handleToggle = (sectionId) => {
    setActiveSection(activeSection === sectionId ? null : sectionId);
  };

  const handleSelect = (section, item) => {
    setSelections((prev) => ({
      ...prev,
      [section]: prev[section].includes(item)
        ? prev[section].filter((i) => i !== item)
        : [...prev[section], item],
    }));
  };

  const handleInputChange = (field, value) => {
    setSelections((prev) => ({
      ...prev,
      personal: { ...prev.personal, [field]: value },
    }));
  };

  const handleStyleSelect = (item) => {
    setSelections((prev) => ({
      ...prev,
      style: [item],
    }));
  };

  const isComplete = () => {
    const { personal, style, interests, publishers } = selections;
    return (
      personal.name &&
      personal.major &&
      personal.year &&
      style.length > 0 &&
      interests.length > 0 &&
      publishers.length > 0
    );
  };

  const renderContent = (section) => {
    if (section.id === "personal") {
      return (
        <InputGroup>
          <Input
            placeholder="Name"
            value={selections.personal.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
          />
          <Input
            placeholder="Major"
            value={selections.personal.major}
            onChange={(e) => handleInputChange("major", e.target.value)}
          />
          <Select
            value={selections.personal.year}
            onChange={(e) => handleInputChange("year", e.target.value)}
          >
            <option value="">Select Year</option>
            <option value="Freshman">Freshman</option>
            <option value="Sophomore">Sophomore</option>
            <option value="Junior">Junior</option>
            <option value="Senior">Senior</option>
            <option value="Graduate">Graduate</option>
          </Select>
        </InputGroup>
      );
    }

    const ButtonComponent = {
      style: StyleButton,
      interests: InterestButton,
      publishers: PublisherButton,
    }[section.id];

    return (
      <ButtonGrid>
        {options[section.id].map((item) => (
          <ButtonComponent
            key={item}
            $isSelected={selections[section.id].includes(item)}
            onClick={() =>
              section.id === "style"
                ? handleStyleSelect(item)
                : handleSelect(section.id, item)
            }
          >
            {item}
          </ButtonComponent>
        ))}
      </ButtonGrid>
    );
  };

  return (
    <Container>
      <LogoContainer>
        <img src={logo} alt="Logo" />
        <Message>
          {sections.find((s) => s.id === activeSection)?.message}
        </Message>
      </LogoContainer>

      {sections.map((section) => (
        <Section key={section.id} $isActive={activeSection === section.id}>
          <SectionHeader
            onClick={() => handleToggle(section.id)}
            $isActive={activeSection === section.id}
          >
            <h2>{section.title}</h2>
            <Chevron $isActive={activeSection === section.id} />
          </SectionHeader>
          <SectionContent $isActive={activeSection === section.id}>
            {renderContent(section)}
          </SectionContent>
        </Section>
      ))}

      <StartButton
        $isEnabled={isComplete()}
        onClick={() => isComplete() && onComplete()}
      >
        Get Started
      </StartButton>
    </Container>
  );
}

export default Onboarding;
