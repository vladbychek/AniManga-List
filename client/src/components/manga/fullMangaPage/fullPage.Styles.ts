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
export const FullTitleAndAboutWrapper = styled.div<{ theme: string }>`
  margin: 20px 15px 0;
  color: ${({ theme }) => (theme === "light" ? "black" : "white")};
`;

export const RatingIcon = styled.img`
  width: 20px;
`;

export const RatingWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

export const FavBtn = styled.button`
  background: ${({ theme }) =>
    theme === "light"
      ? "linear-gradient(90deg, #ff7b00, #ffa53d)"
      : "linear-gradient(to bottom, #F2F3F4 0%, #E3E4E5 100%);"};
  border: none;
  font-weight: bold;
  width: 100px;
  font-family: "Lato", sans-serif;
  padding: 5px 0;
  border-radius: 5px;
  color: black;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => (theme === "light" ? "#f9f9f9" : "#ff8c00")};
  }
  &:active {
    color: black;
  }
  &:disabled {
    cursor: auto;
    background: gray;
    &: hover {
      color: black;
    }
  }
`;
export const FavBtnsWrapper = styled.div`
  gap: 30px;
  display: flex;
  justify-content: center;
  padding-top: 30px;
`;
