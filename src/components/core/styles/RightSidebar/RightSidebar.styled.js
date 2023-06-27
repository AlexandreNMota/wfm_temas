import styled from "styled-components";
import { IconButton } from "@mui/material";
import { alpha } from "@mui/material/styles";

export const RightSidebar = styled.div`
  background-color: ${({ theme }) => theme.colors.header};
  width: ${({ showRightSidebar }) => (showRightSidebar ? "250px" : "0")};
  transition: width 0.3s ease;
  display: flex;
  flex-direction: column;
  box-shadow: ${({ showRightSidebar }) =>
    showRightSidebar
      ? "0px 8px 10px -5px rgba(0, 0, 0, 0.2),0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12)"
      : "none"};

  & .MuiTypography-root {
    color: ${({ theme }) => theme.colors.textContent};
  }
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
  border-bottom: 1px solid ${({ theme }) => theme.colors.textContent};
`;

export const CloseRightSideBarButton = styled(IconButton)`
  align-self: flex-end;
  margin-top: 10px;

  &:hover {
    background-color: transparent !important;
  }

  & .MuiSvgIcon-root {
    color: ${({ theme }) => theme.colors.textContent};
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
  color: ${({ theme }) => theme.colors.textContent};
`;

export const RadioInput = styled.input`
  margin-right: 8px;
`;
export const LabelSection = styled.div`
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.colors.textContent};
`;

export const PersonalizarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.textContent};
  border-bottom: 1px solid ${({ theme }) => theme.colors.textContent};
  height: 50px;

  & .MuiIconButton-root {
    padding: 5px;
    display: inline-block;
  }
`;
