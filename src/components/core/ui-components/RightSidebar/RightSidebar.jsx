import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import {
  RightSidebar,
  CloseRightSideBarButton,
  RightSideBarInnerContainer,
  RightSideBarContent,
  RadioContainer,
  RadioLabel,
  RadioInput,
} from "../../styles/RightSidebar/RightSidebar.styled";
import {
  light,
  dark,
  blue,
  green,
  brown,
  pink,
} from "../../styles/Theme.styled";
import { ThemeContainer, ThemeButton } from "../../styles/ThemeSwitcher.styled";

const RightSideBar = ({
  showRightSidebar,
  toggleRightSidebar,
  selectedTheme,
  HandleThemeChange,
  switchColors,
  selectedOption,
}) => {
  return (
    <RightSidebar showRightSidebar={showRightSidebar}>
      {showRightSidebar && (
        <>
          <RightSideBarInnerContainer>
            <CloseRightSideBarButton onClick={toggleRightSidebar}>
              <CloseIcon></CloseIcon>
            </CloseRightSideBarButton>
          </RightSideBarInnerContainer>
          <RightSideBarContent>
            <h3>Personalizar Sistema</h3>
          </RightSideBarContent>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h3 style={{ marginTop: "10px" }}>Modo</h3>
          </div>
          <RightSideBarContent>
            <RadioContainer>
              <RadioLabel>
                <RadioInput
                  type="radio"
                  value="claro"
                  checked={selectedOption === "claro"}
                  onChange={switchColors}
                />
                Claro
              </RadioLabel>
              <RadioLabel>
                <RadioInput
                  type="radio"
                  value="escuro"
                  checked={selectedOption === "escuro"}
                  onChange={switchColors}
                />
                Escuro
              </RadioLabel>
            </RadioContainer>
          </RightSideBarContent>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h3 style={{ marginTop: "10px" }}>Temas</h3>
          </div>
          <RightSideBarContent>
            <ThemeContainer>
              <ThemeButton
                className={`light ${selectedTheme === light ? "active" : ""}`}
                onClick={() => HandleThemeChange(light)}
              ></ThemeButton>
              <ThemeButton
                className={`dark ${selectedTheme === dark ? "active" : ""}`}
                onClick={() => HandleThemeChange(dark)}
              ></ThemeButton>
              <ThemeButton
                className={`blue ${selectedTheme === blue ? "active" : ""}`}
                onClick={() => HandleThemeChange(blue)}
              ></ThemeButton>
              <ThemeButton
                className={`green ${selectedTheme === green ? "active" : ""}`}
                onClick={() => HandleThemeChange(green)}
              ></ThemeButton>
              <ThemeButton
                className={`brown ${selectedTheme === brown ? "active" : ""}`}
                onClick={() => HandleThemeChange(brown)}
              ></ThemeButton>
              <ThemeButton
                className={`pink ${selectedTheme === pink ? "active" : ""}`}
                onClick={() => HandleThemeChange(pink)}
              ></ThemeButton>
            </ThemeContainer>
          </RightSideBarContent>
        </>
      )}
    </RightSidebar>
  );
};
export default RightSideBar;
