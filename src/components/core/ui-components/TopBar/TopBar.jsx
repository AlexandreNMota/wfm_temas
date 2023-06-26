import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import api from "../../../../axios"
import { Toolbar, Badge } from "@mui/material";
import ViewSidebarOutlinedIcon from "@mui/icons-material/ViewSidebarOutlined";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";
import InputAdornment from "@mui/material/InputAdornment";
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
} from "../../styles/TopBar/TopBar.styled";

import {setUser} from "../../../../store/features/User";

const TopBar = ({
  toggleLeftSidebar,
  toggleRightSidebar,
  showRightSidebar,
}) => {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.login.isAuthenticated)
  const user = useSelector((state) => state.user.user);
  const fullName = user ? user.nome : '';
    const nameParts = fullName.split(" ");
    const firstName = nameParts[0];
    const lastName = nameParts[nameParts.length - 1];
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  useEffect(() => {
    getUser()
}, []);

const getUser = async () => {
    const options = {
        url: `/auth/me`,
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': '*',
            Authorization: token ? `Bearer ${token}` : '',
        }
    }
    return await api(options)
        .then((response) => {
            dispatch(setUser(response.data))
        })
        .catch((error) => {
            console.error('Erro ao buscar o usuário:', error.response);
        })
}
  const handleSearchFocus = () => {
    setIsSearchFocused(true);
  };

  const handleSearchBlur = () => {
    setIsSearchFocused(false);
  };
  return (
    <Topbar>
      <Toolbar
        sx={{ width: "100%", display: "flex", justifyContent: "space-between" }}
      >
        <ViewLeftSideBarButton
          edge="start"
          onClick={toggleLeftSidebar}
          sx={{ mr: 2 }}
        >
          <ViewSidebarOutlinedIcon sx={{ transform: "scaleX(-1)" }} />
        </ViewLeftSideBarButton>
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

        <div>
          <ProfileContainer>
            <ProfileButton>
              <ProfileName> {user ? `${firstName} ${lastName}` : ''}</ProfileName>
              <ProfileAvatar
                src="/static/images/avatar/2.jpg"
                alt="Avatar"
              ></ProfileAvatar>
            </ProfileButton>
          </ProfileContainer>
          {!showRightSidebar && (
            <>
              <ViewRightSideBarButton onClick={toggleRightSidebar}>
                <SettingsIcon></SettingsIcon>
              </ViewRightSideBarButton>
              <NotificationsButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={17} color="error">
                  <NotificationsIcon />
                </Badge>
              </NotificationsButton>
            </>
          )}
        </div>
      </Toolbar>
    </Topbar>
  );
};
export default TopBar;
