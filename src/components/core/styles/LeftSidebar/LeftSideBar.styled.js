import styled from "styled-components";
import {
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  ListItemButton,
  Collapse,
} from "@mui/material";
import { alpha } from "@mui/material/styles";

export const LeftSidebarWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.header};
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
  cursor:pointer;
`;

export const Logo = styled.img`
  max-height: 100%;
  max-width: 100%;
  cursor:pointer;
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
    color: ${({ theme }) => theme.colors.textContent};
    ${({ showLeftSidebar }) => (showLeftSidebar ? "" : "display: none;")}
  }
  &:hover {
    background-color: ${({ theme }) =>
    alpha(theme.colors.textContent, 0.5)} !important;
  }
`;
export const StyledListSubItemButton = styled(ListItemButton)`
  && {
    padding-bottom: 0;
    padding-left: 32px;
    transition: 0.8s ease;
    background-color: transparent !important;
    color: ${({ theme }) => theme.colors.textContent};
    ${({ showLeftSidebar }) => (showLeftSidebar ? "" : "display: none;")}
  }
  &:hover {
    background-color: ${({ theme }) =>
      alpha(theme.colors.textContent, 0.5)} !important;
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
  color: ${({ theme }) => alpha(theme.colors.textContent, 0.5)} !important;
  ${({ showLeftSidebar }) => (showLeftSidebar ? "" : "display: none;")}
`;

export const StyledListItemText = styled(ListItemText)`
  && {
    color: ${({ theme }) => theme.colors.textContent};
    margin-left: 10px;
  }
  & .MuiTypography-root {
    font-size: 10px !important;
  }
`;
export const StyledCollapse = styled(Collapse)`
min-height:0;
height:auto;
transition: height 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;

