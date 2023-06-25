import React, { useState } from "react";
import {
  LeftSidebarWrapper,
  Logo,
  StyledList,
  StyledListItemButton,
  StyledListItemText,
  ListSubheaderStyled,
  StyledListSubItemButton,
} from "../../styles/LeftSidebar/LeftSideBar.styled";
import { Toolbar, Collapse } from "@mui/material";
import { alpha } from "@mui/material/styles";
import * as Icons from "@mui/icons-material";

const IconComponent = ({ iconName }) => {
  const Icon = Icons[iconName];
  return (
    <Icon
      sx={{
        minWidth: "0",
        width: "12%",
        maxWidth: "50px",
        height: "5%",
      }}
    />
  );
};

const LeftSidebar = ({ menuItems, showLeftSidebar }) => {
  const sections = Array.from(
    new Set(menuItems?.map((menuItem) => menuItem.section))
  );
  const [openIcons, setOpenIcons] = useState({});
  const handleSubMenuToggle = (itemId) => {
    setOpenIcons((prevOpenIcons) => {
      const updatedOpenIcons = { ...prevOpenIcons };
      Object.keys(updatedOpenIcons).forEach((key) => {
        if (key !== itemId) {
          updatedOpenIcons[key] = false;
        }
      });
      updatedOpenIcons[itemId] = !prevOpenIcons[itemId];
      return updatedOpenIcons;
    });
  };

  return (
    <LeftSidebarWrapper showLeftSidebar={showLeftSidebar}>
      <Toolbar>
        <Logo
          src={process.env.PUBLIC_URL + "/assets/images/logo.png"}
          alt="Logo"
        />
      </Toolbar>
      <StyledList>
        {menuItems &&
          sections.map((section) => (
            <React.Fragment key={section}>
              <ListSubheaderStyled showLeftSidebar={showLeftSidebar}>
                {section}
              </ListSubheaderStyled>
              {menuItems.map((menuItem) => {
                if (menuItem.section === section) {
                  return (
                    <React.Fragment key={menuItem.text}>
                      <StyledListItemButton
                        showLeftSidebar={showLeftSidebar}
                        onClick={() => handleSubMenuToggle(menuItem.id)}
                      >
                        {menuItem.hasSubItems &&
                          (openIcons?.[menuItem.id] ? (
                            <Icons.ExpandLess
                              sx={{
                                minWidth: 0,
                              }}
                            />
                          ) : (
                            <Icons.ChevronRight
                              sx={{
                                minWidth: 0,
                              }}
                            />
                          ))}
                        <IconComponent iconName={menuItem.icon} />
                        <StyledListItemText>{menuItem.text}</StyledListItemText>
                      </StyledListItemButton>
                      {menuItem.hasSubItems && (
                        <Collapse
                          in={openIcons?.[menuItem.id]}
                          timeout="auto"
                          unmountOnExit
                        >
                          <StyledList showLeftSidebar={showLeftSidebar}>
                            {menuItem.subItems.map((subItem) => (
                              <StyledListSubItemButton
                                key={subItem.text}
                                showLeftSidebar={showLeftSidebar}
                              >
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "flex-end",
                                    width: "100%",
                                  }}
                                >
                                  <IconComponent iconName={subItem.icon} />
                                  <StyledListItemText>
                                    {subItem.text}
                                  </StyledListItemText>
                                </div>
                              </StyledListSubItemButton>
                            ))}
                          </StyledList>
                        </Collapse>
                      )}
                    </React.Fragment>
                  );
                }
                return null;
              })}
            </React.Fragment>
          ))}
      </StyledList>
    </LeftSidebarWrapper>
  );
};

export default LeftSidebar;
