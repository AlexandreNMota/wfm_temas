import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import api from "../../../../axios";
import {
  Toolbar,
  Badge,
  Grid,
  Typography,
  Box,
  ButtonGroup,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import ViewSidebarOutlinedIcon from "@mui/icons-material/ViewSidebarOutlined";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";
import InputAdornment from "@mui/material/InputAdornment";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import {
  ExpandLess,
  ExpandMore,
  ChevronRight,
  Person,
} from "@mui/icons-material";
import {
  Topbar,
  ViewLeftSideBarButton,
  ViewRightSideBarButton,
  Search,
  SearchIconWrapper,
  StyledInputBase,
  NotificationsButton,
  ProfileContainer,
  ProfileButton,
  ProfileAvatar,
  ProfileName,
  MenuStyled,
  MenuItemStyled,
} from "../../styles/TopBar/TopBar.styled";

import { setUser } from "../../../../store/features/User";
import { setLogout } from "../../../../store/features/Login";
import { setOrientation } from "../../../../store/features/SideBarControl";

const TopBar = ({
  toggleLeftSidebar,
  toggleRightSidebar,
  showRightSidebar,
  showLeftSidebar,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.login.isAuthenticated);
  const user = useSelector((state) => state.user.user);
  const sidebarControl = useSelector(
    (state) => state.sidebarControl.orientation
  );
  const menuItems = useSelector((state) => state.menu.list);
  const sections = menuItems
    .map((menuItem) => menuItem.section)
    .filter((value, index, self) => self.indexOf(value) === index);
  const fullName = user ? user.nome : "";
  const nameParts = fullName.split(" ");
  const firstName = nameParts[0];
  const lastName = nameParts[nameParts.length - 1];
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [anchorNotification, setAnchorNotification] = React.useState(null);
  const [openMenus, setOpenMenus] = useState([]);
  const openNotification = Boolean(anchorNotification);
  const isMenuOpen = Boolean(anchorEl);
  const menuId = "primary-search-account-menu";

  const handleMenuTopOpen = (section) => {
    if (!openMenus.includes(section)) {
      setOpenMenus((prevOpenMenus) => [...prevOpenMenus, section]);
    }
  };
  const handleMenuTopClose = (section) => {
    setOpenMenus((prevOpenMenus) =>
      prevOpenMenus.filter((menu) => menu !== section)
    );
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  const handleLogout = async () => {
    await dispatch(setLogout());
    navigate("/login");
  };

  const renderMenu = (
    <MenuStyled
      anchorEl={anchorEl}
      id={menuId}
      keepMounted
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {/* <Divider /> */}
      <MenuItemStyled onClick={handleMenuClose}>
        <ListItemIcon>
          <AccountCircleIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Perfil</ListItemText>
      </MenuItemStyled>
      <MenuItemStyled onClick={handleLogout}>
        <ListItemIcon>
          <LogoutIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Sair</ListItemText>
      </MenuItemStyled>
    </MenuStyled>
  );
  const handleClickNotification = (event) => {
    console.log(event.currentTarget);
    setAnchorNotification(event.currentTarget);
  };
  const handleCloseNotification = () => {
    setAnchorNotification(null);
  };
  const renderMenuNotification = (
    <MenuStyled
      anchorEl={anchorNotification}
      id="notification"
      open={openNotification}
      onClose={handleCloseNotification}
      onClick={handleCloseNotification}
      PaperProps={{
        elevation: 0,
        sx: {
          mt: 1.5,
          "& .MuiAvatar-root": {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          "&:before": {
            content: '""',
            display: "block",
            position: "absolute",
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            transform: "translateY(-50%) rotate(45deg)",
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      <Grid
        container
        sx={{ display: "flex", alignItems: "center", padding: "10px" }}
      >
        <Grid item xs={12} md={12} sx={{ display: "flex" }}>
          <NotificationsIcon />
          <Typography>Notificações</Typography>
        </Grid>
      </Grid>
    </MenuStyled>
  );

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const options = {
      url: `/auth/me`,
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: token ? `Bearer ${token}` : "",
      },
    };
    return await api(options)
      .then((response) => {
        dispatch(setUser(response.data));
      })
      .catch((error) => {
        console.error("Erro ao buscar o usuário:", error.response);
      });
  };
  const handleSearchFocus = () => {
    setIsSearchFocused(true);
  };

  const handleSearchBlur = () => {
    setIsSearchFocused(false);
  };

  return (
    <Topbar>
      <Toolbar
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          boxShadow: "rgba(0, 0, 0, 0.45) 0px 20px 20px -15px",
        }}
      >
        <ViewLeftSideBarButton
          edge="start"
          onClick={toggleLeftSidebar}
          sx={{ mr: 2 }}
        >
          <ViewSidebarOutlinedIcon sx={{ transform: "scaleX(-1)" }} />
        </ViewLeftSideBarButton>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            width: "80%",
          }}
        >
          <Search isFocused={isSearchFocused}>
            <SearchIconWrapper>
              <SearchIcon></SearchIcon>
              <StyledInputBase
                placeholder="Search…"
                onFocus={handleSearchFocus}
                onBlur={handleSearchBlur}
                inputProps={{
                  "aria-label": "search",
                  endadornment: (
                    <InputAdornment position="end">⌘/</InputAdornment>
                  ),
                }}
              ></StyledInputBase>
            </SearchIconWrapper>
          </Search>
          <ProfileContainer>
            <ProfileButton
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
            >
              <ProfileAvatar
                src="/static/images/avatar/2.jpg"
                alt="Avatar"
              ></ProfileAvatar>
              <ProfileName>
                {" "}
                {user ? `${firstName} ${lastName}` : ""}
              </ProfileName>
            </ProfileButton>
          </ProfileContainer>
          {!showRightSidebar && (
            <>
              <ViewRightSideBarButton onClick={toggleRightSidebar}>
                <SettingsIcon></SettingsIcon>
              </ViewRightSideBarButton>
              <NotificationsButton
                id="notification"
                onClick={handleClickNotification}
                aria-controls={openNotification ? "notification" : undefined}
                aria-haspopup="true"
                aria-expanded={openNotification ? "true" : undefined}
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={17} color="error">
                  <NotificationsIcon />
                </Badge>
              </NotificationsButton>
              {renderMenuNotification}
            </>
          )}
        </div>
      </Toolbar>
      <>
        {showLeftSidebar && sidebarControl === "horizontal" ? (
          <div style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
            {console.log(menuItems)}

            <Box sx={{ display: "flex", marginLeft: "15px" }}>
              {sections.map((section) => (
                <React.Fragment key={section}>
                  <Button
                    color="secondary"
                    id={section}
                    aria-controls={
                      openMenus.includes(section) ? section : undefined
                    }
                    aria-haspopup="true"
                    aria-expanded={
                      openMenus.includes(section) ? "true" : undefined
                    }
                    onClick={() => handleMenuTopOpen(section)}
                  >
                    {section}
                    {openMenus.includes(section) ? (
                      <ExpandLess />
                    ) : (
                      <ExpandMore />
                    )}
                  </Button>
                  <MenuStyled
                    key={section}
                    id={section}
                    anchorEl={
                      openMenus.includes(section)
                        ? document.getElementById(section)
                        : null
                    }
                    open={openMenus.includes(section)}
                    onClose={() => handleMenuTopClose(section)}
                    MenuListProps={{
                      "aria-labelledby": section,
                    }}
                  >
                    <ButtonGroup
                      orientation="vertical"
                      sx={{ backgroundColor: "transparent" }}
                    >
                      {menuItems
                        .filter((menu) => menu.section === section)
                        .map((menu) => {
                          return menu.hasSubItems ? (
                            <div>
                              <Button
                                sx={{ width: "100%", mb: 1 }}
                                id={`${menu.id}-button`}
                                aria-controls={`${menu.id}-menu`}
                                aria-haspopup="true"
                                aria-expanded={
                                  openMenus.includes(menu.id)
                                    ? "true"
                                    : undefined
                                }
                                onClick={() => handleMenuTopOpen(menu.id)}
                              >
                                {menu.id}
                                <Box sx={{ flexGrow: 1 }}></Box>
                                {openMenus.includes(menu.id) ? (
                                  <ChevronRight />
                                ) : (
                                  <ExpandMore />
                                )}
                              </Button>
                              <MenuStyled
                                id={`${menu.id}-menu`}
                                aria-labelledby={`${menu.id}-button`}
                                anchorEl={
                                  openMenus.includes(menu.id)
                                    ? document.getElementById(
                                        `${menu.id}-button`
                                      )
                                    : null
                                }
                                open={openMenus.includes(menu.id)}
                                onClose={() => handleMenuTopClose(menu.id)}
                                anchorOrigin={{
                                  vertical: "center",
                                  horizontal: "right",
                                }}
                                transformOrigin={{
                                  vertical: "top",
                                  horizontal: "left",
                                }}
                              >
                                {menu.subItems.map((subItem) => (
                                  <MenuItem
                                    key={subItem.text}
                                    onClick={() =>
                                      handleMenuTopClose(subItem.text)
                                    }
                                  >
                                    {subItem.text}
                                  </MenuItem>
                                ))}
                              </MenuStyled>
                            </div>
                          ) : (
                            <div>
                              <Button
                                id={menu.id}
                                aria-controls={"demo-positioned-menu"}
                                aria-haspopup="true"
                                aria-expanded={"true"}
                              >
                                {menu.id}
                              </Button>
                            </div>
                          );
                        })}
                    </ButtonGroup>
                  </MenuStyled>
                </React.Fragment>
              ))}
            </Box>
          </div>
        ) : (
          false
        )}
      </>
      {renderMenu}
    </Topbar>
  );
};
export default TopBar;
