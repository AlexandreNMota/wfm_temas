import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import {
  Container,
  ContentWrapper,
  Content,
} from "../styles/PageLayout.styled";
import { useDispatch, useSelector } from "react-redux";
import { setMenu } from "../../../store/features/Menu";

import { GlobalStyles } from "../styles/Global";

import { light, dark, blue, green, brown, pink } from "../styles/Theme.styled";
import LeftSideBar from "./LeftSidebar/LeftSideBar";
import TopBar from "./TopBar/TopBar";
import RightSideBar from "./RightSidebar/RightSidebar";
import PageContent from "./PageContent/PageContent";
import api from "../../../axios";

 const useMenu = () => {
  const [error, setError] = useState(null);
  const menuItems = useSelector((state) => state.menu.list);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.login.isAuthenticated)
  useEffect(() => {
    getMenu();
  }, []);

  const getMenu = async () => {
    const options = {
      url: `sidebar/fillMenu`,
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: token ? `Bearer ${token}` : '',
      },
    };

    try {
      const response = await api(options);
      dispatch(setMenu(response.data));
    } catch (error) {
      console.error("Error fetching menu:", error.response);
      setError(
        "Falha ao montar o menu. Entre em contato com o time de desenvolvimento."
      );
    }
  };

  return { menuItems, error };
};



const PageLayout = ({getSelectedTheme}) => {
  const [selectedTheme, setSelectedTheme] = useState(light);
  const [showLeftSidebar, setShowLeftSidebar] = useState(true);
  const [showRightSidebar, setShowRightSidebar] = useState(false);
  const [selectedOption, setSelectedOption] = useState("claro");
  const { menuItems, error } = useMenu();

  const toggleLeftSidebar = () => {
    setShowLeftSidebar(!showLeftSidebar);
  };

  const toggleRightSidebar = () => {
    setShowRightSidebar(!showRightSidebar);
  };



  const HandleThemeChange = (theme) => {
    setSelectedTheme(theme);
    getSelectedTheme(theme);
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

    const tempColorTextContent = updatedTheme.colors.textContent;
    updatedTheme.colors.textContent = updatedTheme.colors.textContentDark;
    updatedTheme.colors.textContentDark = tempColorTextContent;

    const tempColorContentWrapper = updatedTheme.colors.contentWrapper;
    updatedTheme.colors.contentWrapper = updatedTheme.colors.contentWrapperDark;
    updatedTheme.colors.contentWrapperDark = tempColorContentWrapper;

    HandleThemeChange(updatedTheme);
    getSelectedTheme(updatedTheme);
  };


  

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
