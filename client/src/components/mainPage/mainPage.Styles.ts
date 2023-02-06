import styled from "styled-components";


export const AllMainPages = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  gap: 25px;
  justify-content: center;
`;

export const MainPageContent = styled.div`
  width: 92%;
  margin: 70px auto;
`;

export const MainPageText = styled.div`
font-weight: bold;
color: ${({ theme }) => (theme === "light" ? "black" : "white")};
   padding: 15px 0; 
   font-family: "PT Serif", serif;
`