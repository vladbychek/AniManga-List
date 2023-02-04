import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 85px;
  background-color: ${({ theme }) => (theme === "light" ? "#ff8c00" : "#212529")};
  font-family: "Rubik Bubbles", cursive;
  font-size: 30px;
`;

export const HeaderContent = styled.div`
  width: 70%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const HeaderImg = styled.img`
  width: 130px;
  padding-top: 10px;
`;

export const HeaderLinks = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`;

export const HeaderElement = styled.div`
  color: ${({ theme }) => (theme === "light" ? "black" : "white")};
  &:hover{
    text-shadow: red 2px 5px;
  };
    &:active{
      text-shadow: none;
  };
`