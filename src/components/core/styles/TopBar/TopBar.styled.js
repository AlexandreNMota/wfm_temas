import styled from "styled-components";
import {
  IconButton,
  InputBase,
  Button,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import { alpha } from "@mui/material/styles";

// Container da topbar
export const Topbar = styled.div`
  background-color: ${({ theme }) => theme.colors.header};
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
`;

// Botão para abrir ou fechar a leftsidebar
export const ViewLeftSideBarButton = styled(IconButton)`
  background-color: inherit !important;

  &:hover {
    background-color: ${({ theme }) =>
      alpha(theme.colors.textContent, 0.5)} !important;
  }

  & .MuiSvgIcon-root {
    color: ${({ theme }) => theme.colors.textContent};
  }
`;

export const ViewRightSideBarButton = styled(IconButton)`
  background-color: inherit !important;

  &:hover {
    background-color: ${({ theme }) =>
      alpha(theme.colors.textContent, 0.5)} !important;
  }

  & .MuiSvgIcon-root {
    color: ${({ theme }) => theme.colors.textContent};
  }
`;

// SearchBar
export const Search = styled.div`
  position: relative !important;
  padding: 20px !important;
  border-radius: 5px !important;
  background-color: ${({ theme }) =>
    alpha(theme.colors.auxiliarCor, 0.3)} !important;
  margin-left: 0 !important;
  width: ${({ isFocused }) => (isFocused ? "60%" : "20%")};
  display: flex !important;
  align-items: center !important;
  transition: width 0.3s ease;

  &:hover {
    background-color: ${({ theme }) =>
      alpha(theme.colors.auxiliarCor, 0.5)} !important;
  }
`;

export const SearchIconWrapper = styled.div`
  color: ${({ theme }) => theme.colors.textContent} !important;
  height: 100% !important;
  width: 100% !important;
  position: absolute !important;
  display: flex !important;
  align-items: center !important;
  justify-content: flex-start !important;
`;

export const StyledInputBase = styled(InputBase)`
  color: ${({ theme }) => theme.colors.textContent} !important;
  width: 100% !important;
  & .MuiInputBase-input {
    color: ${({ theme }) => theme.colors.textContent} !important;
    width: 100% !important;
  }
  &:focus ~ ${Search} {
    width: 80% !important;
  }
`;

export const NotificationsButton = styled(IconButton)`
  &:hover {
    background-color: ${({ theme }) =>
      alpha(theme.colors.textContent, 0.5)} !important;
  }

  & .MuiSvgIcon-root {
    color: ${({ theme }) => theme.colors.textContent};
  }
`;
export const ProfileContainer = styled.div`
  display: inline-block;
  position: relative;
  transition: opacity 0.3s ease !important;
  margin-left: 20px;

  &:hover {
    background-color: ${({ theme }) =>
      alpha(theme.colors.auxiliarCor, 0.5)} !important;
  }
`;
export const ProfileName = styled.h4`
  opacity: 1;
  color: ${({ theme }) => theme.colors.textContent} !important;
  margin-left: 20px;
  transition: opacity 0.3s ease;

  ${ProfileContainer}:hover & {
    opacity: 1;
  }
`;

export const ProfileButton = styled(Button)`
  color: inherit;
  transition: opacity 0.3s ease !important;
  &:hover {
    background-color: ${({ theme }) =>
      alpha(theme.colors.textDark, 0.1)} !important;
  }
`;
export const ProfileAvatar = styled(Avatar)`
  color: ${({ theme }) => theme.colors.textContent} !important;
  transition: opacity 0.3s ease !important;
  background-color: ${({ theme }) =>
    alpha(theme.colors.textContent, 0.1)} !important;
  &:hover {
    background-color: ${({ theme }) =>
      alpha(theme.colors.textDark, 0.1)} !important;
  }
`;

export const MenuStyled = styled(Menu)`
  & .MuiPaper-root {
    overflow: visible;
    filter: drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.32));
    background-color: ${({ theme }) => theme.colors.header};
    color: ${({ theme }) => theme.colors.textContent} !important;

    &:before {
      background-color: ${({ theme }) => theme.colors.header};
    }
  }
`;

export const MenuItemStyled = styled(MenuItem)`
  & .MuiListItemIcon-root {
    color: ${({ theme }) => theme.colors.textContent} !important;
  }
`;
