

import styled from "styled-components";

export const FavEmptyWrapper = styled.div`
  width: 1170px;
  margin: 100px auto;
`;

export const FavEmptyText = styled.div`
  font-family: "PT Serif", serif;
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => (theme === "light" ? "black" : "white")};
`;

export const FavEmptyStyledImg = styled.img`
  width: 400px;
  display: block;
  margin: 0 auto;
`;
