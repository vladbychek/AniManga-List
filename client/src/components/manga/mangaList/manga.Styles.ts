import styled from "styled-components";

export const AllListsPages = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  gap: 30px;
  justify-content: center;
`;

export const ListsPageContent = styled.div`
  width: 60%;
  margin: 0 auto;
`;

export const AllSortBtns = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin: 30px 0;
`;

export const SortBtn = styled.button`
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
  &:disabled {
    cursor: auto;
    background: gray;
    &: hover {
      color: black;
      text-shadow: none;
    }
  }
`;

export const SortTypeBtns = styled.div`
  gap: 10px;
  display: flex;
`;
export const AllPaginationBtns = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin: 40px 0;
`;

export const PaginationBtn = styled.button`
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
  }
  &:active {
  }
  &:disabled {
    cursor: auto;
    background: gray;
    &: hover {
      color: black;
      text-shadow: none;
    }
  }
`;
