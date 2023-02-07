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

export const FormButton = styled.button`
  width: 100%;
  border: 0;
  color: ${({ theme }) => (theme === "light" ? "black" : "#f9f9f9")};
  background-color: ${({ theme }) => (theme === "light" ? "white" : "#ff8c00")};
  font-weight: 600;
  height: 56px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => (theme === "light" ? "#ff8c00" : "black")};
  }
  &: active {
    color: ${({ theme }) => (theme === "light" ? "black" : "#f9f9f9")};
  }
`;

export const LoggedWrapper = styled.div`
  width: 1170px;
  margin: 100px auto;
`;

export const LoggedText = styled.div`
  font-family: "PT Serif", serif;
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => (theme === "light" ? "black" : "white")};
`;

export const LoggedImg = styled.img`
  width: 400px;
  display: block;
  margin: 0 auto;
`;
