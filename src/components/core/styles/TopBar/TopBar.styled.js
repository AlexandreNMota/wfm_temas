import styled from "styled-components";
import { IconButton, InputBase, Button, Avatar } from "@mui/material";
import { alpha } from "@mui/material/styles";

// Container da topbar
export const Topbar = styled.div`
  background-color: ${({ theme }) => theme.colors.header};
  background-image: ${({ theme }) => theme.colors.headerGradient};
`;

// Botão para abrir ou fechar a leftsidebar
export const ViewLeftSideBarButton = styled(IconButton)`
  background-color: inherit !important;

  &:hover {
    background-color: ${({ theme }) =>
      alpha(theme.colors.text, 0.5)} !important;
  }

  & .MuiSvgIcon-root {
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const ViewRightSideBarButton = styled(IconButton)`
  background-color: inherit !important;

  &:hover {
    background-color: ${({ theme }) =>
      alpha(theme.colors.text, 0.5)} !important;
  }

  & .MuiSvgIcon-root {
    color: ${({ theme }) => theme.colors.text};
  }
`;

// SearchBar
export const Search = styled.div`
  position: relative !important;
  padding: 20px !important;
  border-radius: 16px !important;
  background-color: ${({ theme }) =>
    alpha(theme.colors.header, 0.5)} !important;
  margin-left: 0 !important;
  width: ${({ isFocused }) => (isFocused ? "70%" : "50%")};
  display: flex !important;
  align-items: center !important;
  transition: width 0.3s ease;

  &:hover {
    background-color: ${({ theme }) =>
      alpha(theme.colors.header, 1)} !important;
  }
`;

export const SearchIconWrapper = styled.div`
  height: 100% !important;
  width: 100% !important;
  position: absolute !important;
  display: flex !important;
  align-items: center !important;
  justify-content: flex-start !important;
`;

export const StyledInputBase = styled(InputBase)`
  color: inherit !important;
  width: 100% !important;
  & .MuiInputBase-input {
    width: 100% !important;
  }
  &:focus ~ ${Search} {
    width: 80% !important;
  }
`;

export const NotificationsButton = styled(IconButton)`
  &:hover {
    background-color: ${({ theme }) =>
      alpha(theme.colors.text, 0.5)} !important;
  }

  & .MuiSvgIcon-root {
    color: ${({ theme }) => theme.colors.text};
  }
`;
export const ProfileContainer = styled.div`
  display: inline-block;
  position: relative;
  transition: opacity 0.3s ease !important;

  &:hover {
    background-color: ${({ theme }) =>
      alpha(theme.colors.textDark, 0.5)} !important;
  }
`;
export const ProfileName = styled.h4`
  opacity: 0;
  color: ${({ theme }) => theme.colors.text} !important;
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
  color: ${({ theme }) => theme.colors.text} !important;
  transition: opacity 0.3s ease !important;
  background-color: ${({ theme }) => alpha(theme.colors.text, 0.1)} !important;
  &:hover {
    background-color: ${({ theme }) =>
      alpha(theme.colors.textDark, 0.1)} !important;
  }
  ${ProfileContainer}:hover & {
    opacity: 0;
  }
`;
