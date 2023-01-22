import styled from "styled-components";

export const FormWrapper = styled.div`
  width: 400px;
  margin: 100px auto 0;
  padding: 50px 30px 60px;
  border-radius: 24px;
  background-color: ${({ theme }) => (theme === "light" ? "#FFA500" : "white")};
  text-align: center;
`;

export const FormCard = styled.form`
  width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const FormTitle = styled.h2`
  margin: 0 0 12px;
  font-size: 36px;
`;

export const FormText = styled.h3`
  color: rgba(0, 0, 0, 0.75);
`;

export const FormInput = styled.input`
  font-weight: 600;
  height: 56px;
  border-radius: 4px;
  padding: 0 16px;
  font-size: 16px;
  border: 2px solid #ebebeb;
`;
export const FormText2 = styled.div`
  font-size: 16px;
  font-weight: 600;
  text-align: end;
`;

export const FormButton = styled.button`
  width: 100%;
  border: 0;
  color: #f9f9f9;
  background-color: #ff8c00;
  font-weight: 600;
  height: 56px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    color: black;
  }
  &: active {
    color: #f9f9f9;
  }
  &: disabled {
    &: active {
      color: #f9f9f9;
    }
    &:hover {
      color: #f9f9f9;
    }
    background-color: gray;
    cursor: auto;
  }
`;
