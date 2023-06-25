import styled from "styled-components";
import { IconButton } from "@mui/material";
import { alpha } from "@mui/material/styles";
export const RightSidebar = styled.div`
  background-color: ${({ theme }) => theme.colors.header};
  background-image: ${({ theme }) => theme.colors.rightSidebarGradient};
  width: ${({ showRightSidebar }) => (showRightSidebar ? "240px" : "0")};
  transition: width 0.3s ease;
  display: flex;
  flex-direction: column;
`;

export const RightSideBarInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 64px;
  padding-top: 10px;
  padding-bottom: 20px;
  justify-content: "space-around";
  align-items: center;
`;
export const RightSideBarContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-bottom: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.text};
`;

export const CloseRightSideBarButton = styled(IconButton)`
  align-self: flex-end;
  margin-top: 10px;

  &:hover {
    background-color: transparent !important;
  }

  & .MuiSvgIcon-root {
    color: ${({ theme }) => theme.colors.text};
  }
`;
export const RadioContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const RadioInput = styled.input`
  margin-right: 8px;
`;
