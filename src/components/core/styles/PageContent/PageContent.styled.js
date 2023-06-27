import styled from "styled-components";

export const PageContentWrapper = styled.div`
  flex: 1;
  position: relative;
  background-color: ${({ theme }) => theme.colors.header};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const InnerContent = styled.div`
  width: calc(100%);
  height: calc(100%);
  background-color: ${({ theme }) => theme.colors.contentWrapper};
  display: flex;
  flex-direction: column;
`;
