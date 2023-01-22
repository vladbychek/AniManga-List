import styled from "styled-components";
interface Props {
  img: any;
}

export const MainPagesLink = styled.a<Props>`
  background-image: url(${(p) => p.img});
  background-size: cover;
  background-position: center;
  text-decoration: none;
  display: flex;
  color: white;
  width: 200px;
  height: 300px;
  flex-direction: column-reverse;
  border-radius: 5px 5px 5px 5px;
`;

export const AllMainPages = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  gap: 30px;
`;

export const MainPagesTitle = styled.div`
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

export const MainPagesWrapper = styled.div`
  border-radius: 5px 5px 5px 5px;
  box-shadow: 0 0 10px 5px rgba(221, 221, 221, 1);
`;

export const MainPageContent = styled.div`
  width: 1170px;
  margin: 0 auto;
`;

export const AllSortBtns = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin: 30px 0;
`;

export const SortBtn = styled.button`
  background: linear-gradient(90deg, #ff7b00, #ffa53d);
  border: none;
  font-weight: bold;
  width: 100px;
  font-family: "Lato", sans-serif;
  padding: 5px 0;
  border-radius: 5px;
  color: black;
  cursor: pointer;
  &:hover {
    text-shadow: #fc0 1px 0 10px;
  }
  &:active {
  }
`;


export const SortTypeBtns = styled.div`
  gap: 10px;
  display: flex;

`
export const AllPaginationBtns = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin: 40px 0;
`;

export const PaginationBtn = styled.button`
  background: linear-gradient(90deg, #ff7b00, #ffa53d);
  border: none;
  font-weight: bold;
  width: 100px;
  font-family: "Lato", sans-serif;
  padding: 5px 0;
  border-radius: 5px;
  color: black;
  cursor: pointer;
  &:hover {
  }
  &:active {
  }
`;