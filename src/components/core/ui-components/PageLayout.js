import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import {
  Container,
  ContentWrapper,
  Content,
} from "../styles/PageLayout.styled";

import { GlobalStyles } from "../styles/Global";

import { light, dark, blue, green, brown, pink } from "../styles/Theme.styled";
import LeftSideBar from "./LeftSidebar/LeftSideBar";
import TopBar from "./TopBar/TopBar";
import RightSideBar from "./RightSidebar/RightSidebar";
import PageContent from "./PageContent/PageContent";

const PageLayout = () => {
  const [selectedTheme, setSelectedTheme] = useState(light);
  const [showLeftSidebar, setShowLeftSidebar] = useState(true);
  const [showRightSidebar, setShowRightSidebar] = useState(false);
  const [selectedOption, setSelectedOption] = useState("claro");

  const toggleLeftSidebar = () => {
    setShowLeftSidebar(!showLeftSidebar);
  };

  const toggleRightSidebar = () => {
    setShowRightSidebar(!showRightSidebar);
  };

  // const HandleColorChange = (theme) => {
  //   const updatedTheme = { ...theme };

  //   if (selectedOption === "escuro") {
  //     // Swap the values of header and background colors
  //     const tempColor = updatedTheme.colors.header;
  //     updatedTheme.colors.header = updatedTheme.colors.headerDark;
  //     updatedTheme.colors.headerDark = tempColor;

  //     const tempColorBackground = updatedTheme.colors.headerGradient;
  //     updatedTheme.colors.headerGradient =
  //       updatedTheme.colors.headerGradientDark;
  //     updatedTheme.colors.headerGradientDark = tempColorBackground;

  //     const tempColorRightSidebar = updatedTheme.colors.rightSidebarGradient;
  //     updatedTheme.colors.rightSidebarGradient =
  //       updatedTheme.colors.rightSidebarGradientDark;
  //     updatedTheme.colors.rightSidebarGradientDark = tempColorRightSidebar;

  //     const tempColorPageContent = updatedTheme.colors.pageContent;
  //     updatedTheme.colors.pageContent = updatedTheme.colors.pageContentDark;
  //     updatedTheme.colors.pageContentDark = tempColorPageContent;

  //     const tempColorText = updatedTheme.colors.text;
  //     updatedTheme.colors.text = updatedTheme.colors.textDark;
  //     updatedTheme.colors.textDark = tempColorText;

  //     const tempColorContentWrapper = updatedTheme.colors.contentWrapper;
  //     updatedTheme.colors.contentWrapper =
  //       updatedTheme.colors.contentWrapperDark;
  //     updatedTheme.colors.contentWrapperDark = tempColorContentWrapper;
  //   }

  //   setSelectedOption("claro");
  //   setSelectedTheme(updatedTheme);
  // };

  const HandleThemeChange = (theme) => {
    setSelectedTheme(theme);
  };

  const switchColors = (event) => {
    setSelectedOption(event.target.value);
    const updatedTheme = { ...selectedTheme };

    // Swap the values of header and background colors
    const tempColor = updatedTheme.colors.header;
    updatedTheme.colors.header = updatedTheme.colors.headerDark;
    updatedTheme.colors.headerDark = tempColor;

    const tempColorBackground = updatedTheme.colors.headerGradient;
    updatedTheme.colors.headerGradient = updatedTheme.colors.headerGradientDark;
    updatedTheme.colors.headerGradientDark = tempColorBackground;

    const tempColorRightSidebar = updatedTheme.colors.rightSidebarGradient;
    updatedTheme.colors.rightSidebarGradient =
      updatedTheme.colors.rightSidebarGradientDark;
    updatedTheme.colors.rightSidebarGradientDark = tempColorRightSidebar;

    const tempColorPageContent = updatedTheme.colors.pageContent;
    updatedTheme.colors.pageContent = updatedTheme.colors.pageContentDark;
    updatedTheme.colors.pageContentDark = tempColorPageContent;

    const tempColorText = updatedTheme.colors.text;
    updatedTheme.colors.text = updatedTheme.colors.textDark;
    updatedTheme.colors.textDark = tempColorText;

    const tempColorContentWrapper = updatedTheme.colors.contentWrapper;
    updatedTheme.colors.contentWrapper = updatedTheme.colors.contentWrapperDark;
    updatedTheme.colors.contentWrapperDark = tempColorContentWrapper;

    HandleThemeChange(updatedTheme);
  };

  const menuItems = [
    {
      id: "dashboard",
      icon: "DashboardOutlined",
      text: "Dashboard",
      hasSubItems: false,
      route: "/",
      section: "Ferramentas",
    },
    {
      id: "recrutamento",
      icon: "AssignmentIndOutlined",
      text: "Recrutamento",
      hasSubItems: true,
      subItems: [
        {
          id: "recrutamento-teste",
          icon: "StarBorder",
          text: "Starred",
          route: "/user",
        },
      ],
      section: "Departamentos",
    },
    {
      id: "trafego",
      icon: "DataThresholdingOutlined",
      text: "Tráfego",
      hasSubItems: true,
      subItems: [
        {
          id: "trafego-teste",
          icon: "StarBorder",
          text: "Starred",
          route: "/teste",
        },
      ],
      section: "Departamentos",
    },
  ];

  return (
    <ThemeProvider theme={selectedTheme}>
      <Container>
        <GlobalStyles />

        <LeftSideBar
          menuItems={menuItems}
          showLeftSidebar={showLeftSidebar}
        ></LeftSideBar>

        <ContentWrapper>
          <TopBar
            toggleLeftSidebar={toggleLeftSidebar}
            toggleRightSidebar={toggleRightSidebar}
            showRightSidebar={showRightSidebar}
          />
          <Content>
            <PageContent
              selectedTheme={selectedTheme}
              HandleThemeChange={HandleThemeChange}
              switchColors={switchColors}
            />
          </Content>
        </ContentWrapper>
        <RightSideBar
          showRightSidebar={showRightSidebar}
          toggleRightSidebar={toggleRightSidebar}
          selectedTheme={selectedTheme}
          HandleThemeChange={HandleThemeChange}
          switchColors={switchColors}
          selectedOption={selectedOption}
        >
          Right Sidebar Content
        </RightSideBar>
      </Container>
    </ThemeProvider>
  );
};

export default PageLayout;
