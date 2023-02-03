import styled from "styled-components";

export const MoreInfoContent = styled.div`
  border-radius: 5px;
  width: 279.5px;
  margin-top: 15px;
  font-family: "Poppins", sans-serif;
  color: ${({ theme }) => (theme === "light" ? "black" : "white")};
`;

export const MoreInfoTitle = styled.div`
  color: #808080;
  padding-bottom: 5px;
`;

export const MoreInfoTitleText = styled.div`
  color: ${({ theme }) => (theme === "light" ? "black" : "white")};
`;