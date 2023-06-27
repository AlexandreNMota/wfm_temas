import React, { useState, createContext, useEffect, useContext } from "react";
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
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { RoutesContext, RoutesElement } from "../../../../routes";
const PageContent = ({ selectedTheme, HandleThemeChange, switchColors }) => {
  const routes = useContext(RoutesContext);
  return (
    // <PageContentWrapper>
    <InnerContent>
      <ThemeContainer>
        <RoutesContext.Provider value={routes}>
          <RoutesElement />
        </RoutesContext.Provider>
      </ThemeContainer>
    </InnerContent>
    // </PageContentWrapper>
  );
};

export default PageContent;
