import styled from "styled-components";

export const NotFoundWrapper = styled.div`
  width: 1170px;
  margin: 100px auto;
`;

export const NotFoundText = styled.div`
  font-family: "PT Serif", serif;
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => (theme === "light" ? "black" : "white")};
`;

export const NotFoundStyledImg = styled.img`
  width: 400px;
  display: block;
  margin: 0 auto;
`;
