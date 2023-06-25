import styled from "styled-components";

export const PageContentWrapper = styled.div`
  flex: 1;
  position: relative;
  background-color: ${({ theme }) => theme.colors.header};
  background-image: ${({ theme }) => theme.colors.pageContent};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const InnerContent = styled.div`
  width: calc(100% - 20px);
  height: calc(100% - 20px);
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.contentWrapper};
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
