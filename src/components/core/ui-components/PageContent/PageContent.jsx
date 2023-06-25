import React from "react";
import {
  PageContentWrapper,
  InnerContent,
} from "../../styles/PageContent/PageContent.styled";
import { ThemeContainer, ThemeButton } from "../../styles/ThemeSwitcher.styled";
import {
  light,
  dark,
  blue,
  green,
  brown,
  pink,
} from "../../styles/Theme.styled";
const PageContent = ({ selectedTheme, HandleThemeChange, switchColors }) => {
  return (
    <PageContentWrapper>
      <InnerContent>
        <ThemeContainer>
          <h1>HOME</h1>
        </ThemeContainer>
      </InnerContent>
    </PageContentWrapper>
  );
};

export default PageContent;
