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
  width: 60%;
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

export const RatingIcon = styled.img`
  width: 20px;
`

export const RatingWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
`