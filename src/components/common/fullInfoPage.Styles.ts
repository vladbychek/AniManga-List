import styled from "styled-components";

export const FullInfoTitle = styled.div`
  padding-bottom: 30px;
  text-align: center;
  font-weight: bold;
  font-size: 30px;
`;

export const FullInfoAbout = styled.div`
  text-align: center;
  font-size: 17px;
`;

export const FullInfoAll = styled.div`
  margin: 20px auto 0;
  width: 1170px;
`;

export const MoreInfo = styled.div`
  border-radius: 5px;
  width: 279.5px;
  margin-top: 15px;
  font-family: "Poppins", sans-serif;
  color: ${({ theme }) => (theme === "light" ? "black" : "white")};
`;

export const FullInfoImg = styled.img`
  width: 300px;
  height: 400px;
  border-radius: 5px;
  box-shadow: 0 0 10px 5px rgba(221, 221, 221, 1);
`;

export const FullInfoImgAndTitleWrapper = styled.div`
  display: flex;
`;
export const FullTitleAndAboutWrapper = styled.div<{theme: string}>`
  margin: 20px 15px 0;
  color:  ${({ theme }) => (theme === "light" ? "black" : "white")};
`;

export const FullNotSpan = styled.div`
  color: #808080;
  padding-bottom: 5px;
`;

export const FullSpan = styled.div`
  color: ${({ theme }) => (theme === "light" ? "black" : "white")};
`;

export const Loaderrr = styled.div`
  display: flex;
  justify-content: center;
`;
