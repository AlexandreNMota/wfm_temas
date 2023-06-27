import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import {
  LeftSidebarWrapper,
  Logo,
  StyledList,
  StyledListItemButton,
  StyledListItemText,
  ListSubheaderStyled,
  StyledListSubItemButton,
  StyledCollapse,
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

const LeftSidebar = ({ menuItems, showLeftSidebar, sidebarControl }) => {
  const [selectedRoute, setSelectedRoute] = useState(null);

  const handleClickMenuItem = (item, subItem) => {
    
    handleClick(item, subItem, setSelectedRoute, menuItems);
  };
  const handleClick = (
    item,
    subItem,
    setSelectedRoute,
    menuItems
  ) => {
    if (item === "logo") {
      setSelectedRoute("/");
      return;
    }
  
    if (subItem) {
      if (subItem.route) {
        setSelectedRoute(subItem.route);
      } else {
        setSelectedRoute(null);
      }
    } else {
      setOpenIcons((prevOpenIcons) => ({
        ...prevOpenIcons,
        [item]: !prevOpenIcons[item],
      }));
  
      const menuItem = menuItems?.find((menuItem) => menuItem.id === item);
      if (menuItem && menuItem.route) {
        setSelectedRoute(menuItem.route);
      } else {
        setSelectedRoute(null);
      }
    }
  };

  const sections = Array.from(
    new Set(menuItems?.map((menuItem) => menuItem.section))
  );
  const [openIcons, setOpenIcons] = useState({});
  const handleSubMenuToggle = (itemId) => {
    console.log(itemId);
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
    <LeftSidebarWrapper showLeftSidebar={showLeftSidebar} sidebarControl={sidebarControl}>
      {selectedRoute && <Navigate to={selectedRoute} replace={true} />}
      <Toolbar>
        <Logo
          src={process.env.PUBLIC_URL + "/assets/images/logo.png"}
          alt="Logo"
          onClick={() => handleClickMenuItem("logo", null)}
        />
      </Toolbar>
      <StyledList>
        {menuItems &&
          sections.map((section) => (
            <React.Fragment key={section}>
              <ListSubheaderStyled showLeftSidebar={showLeftSidebar} sidebarControl={sidebarControl}>
                {section}
              </ListSubheaderStyled>
              {menuItems.map((menuItem) => {
                if (menuItem.section === section) {
                  return (
                    <React.Fragment key={menuItem.text}>
                      {menuItem.hasSubItems ? (
                      <StyledListItemButton
                        showLeftSidebar={showLeftSidebar}
                        sidebarControl={sidebarControl}
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
                      ):(
                        <StyledListItemButton
                        showLeftSidebar={showLeftSidebar}
                        sidebarControl={sidebarControl}
                        onClick={() => handleClick(menuItem.id, null,setSelectedRoute, menuItems)}
                        >
                           <IconComponent iconName={menuItem.icon} />
                        <StyledListItemText>{menuItem.text}</StyledListItemText>
                        </StyledListItemButton>
                      )}
                      {menuItem.hasSubItems && (
                        <StyledCollapse
                          in={openIcons?.[menuItem.id]}
                          timeout="auto"
                          unmountOnExit
                        >
                          <StyledList showLeftSidebar={showLeftSidebar} sidebarControl={sidebarControl}>
                            {menuItem.subItems.map((subItem) => (
                              <StyledListSubItemButton
                                key={subItem.text}
                                showLeftSidebar={showLeftSidebar}
                                sidebarControl={sidebarControl}
                                onClick={() => handleClick(menuItem.id, subItem,setSelectedRoute, menuItems)}
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
                        </StyledCollapse>
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
