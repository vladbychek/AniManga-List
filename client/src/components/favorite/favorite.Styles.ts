import styled from "styled-components";
interface Props {
  img: string | undefined;
}
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

export const FavPageContent = styled.div`
  width: 60%;
  margin: 50px auto;
`;

export const FavAllListsPages = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  gap: 30px;
  justify-content: center;
`;

export const FavPagesWrapper = styled.div`
  border-radius: 5px 5px 5px 5px;
  box-shadow: 0 0 10px 5px rgba(221, 221, 221, 1);
`;

export const FavPages = styled.div<Props>`
  background-image: url(${(p) => p.img});
  background-size: cover;
  background-position: center;
  display: flex;
  color: white;
  width: 200px;
  height: 300px;
  flex-direction: column-reverse;
  border-radius: 5px 5px 5px 5px;
`;

export const FavPagesTitle = styled.div`
  font-family: "PT Serif", serif;
  background-image: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.8) 0,
    rgba(0, 0, 0, 0.01)
  );
  text-shadow: 0 1px rgb(0 0 0 / 70%);
  padding-top: 40%;
  padding-bottom: 5px;
  padding-left: 5px;
  border-radius: 0 0 5px 5px;
`;
