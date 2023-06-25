import styled from "styled-components";
import {
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  ListItemButton,
} from "@mui/material";
import { alpha } from "@mui/material/styles";

export const LeftSidebarWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.header};
  background-image: ${({ theme }) => theme.colors.headerGradient};
  width: ${({ showLeftSidebar }) => (showLeftSidebar ? "200px" : "0")};
  transition: width 0.3s ease;
`;

export const LogoContainer = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 200px;
  z-index: 2;
`;

export const Logo = styled.img`
  max-height: 100%;
  max-width: 100%;
`;
export const StyledList = styled(List)`
  margin-top: 60px;
  background-color: transparent !important;
`;

export const StyledListItemButton = styled(ListItemButton)`
  && {
    padding-bottom: 0;
    padding-left: 10px;
    transition: 0.8s ease;
    background-color: transparent !important;
    color: ${({ theme }) => theme.colors.text};
    ${({ showLeftSidebar }) => (showLeftSidebar ? "" : "display: none;")}
  }
  &:hover {
    background-image: ${({ theme }) => theme.colors.rightSidebarGradient};
  }
`;
export const StyledListSubItemButton = styled(ListItemButton)`
  && {
    padding-bottom: 0;
    padding-left: 32px;
    transition: 0.8s ease;
    background-color: transparent !important;
    color: ${({ theme }) => theme.colors.text};
    ${({ showLeftSidebar }) => (showLeftSidebar ? "" : "display: none;")}
  }
  &:hover {
    background-image: ${({ theme }) => theme.colors.rightSidebarGradient};
  }
`;
// border-bottom: 1px solid ${({ theme }) => alpha(theme.colors.text, 0.5)};
export const ListSubheaderStyled = styled(ListSubheader)`
  background-color: transparent !important;
  font-size: 12px;
  line-height: 1.2;
  padding-top: 12px;
  padding-bottom: 4px;
  text-align: left;
  color: ${({ theme }) => alpha(theme.colors.text, 0.5)} !important;
  ${({ showLeftSidebar }) => (showLeftSidebar ? "" : "display: none;")}
`;

export const StyledListItemText = styled(ListItemText)`
  && {
    color: ${({ theme }) => theme.colors.text};
    margin-left: 10px;
  }
  & .MuiTypography-root {
    font-size: 10px !important;
  }
`;
