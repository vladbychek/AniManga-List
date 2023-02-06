import { NavLink, useNavigate } from "react-router-dom";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import {
  FormWrapper,
  FormTitle,
  FormText,
  FormCard,
  FormInput,
  FormButton,
  LoggedImg,
  LoggedText,
  LoggedWrapper,
} from "./loginForm.Styles";
import { useTheme } from "../../themeContext";
import { useAppDispatch } from "../redux/hooks";
import { loginUser } from "../redux/reducer/auth/actionCreators";
import { useSelector } from "react-redux";
import { IRootState } from "../redux/store";

const Logged = require("../img/logged.png");


export const LoginForm = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const currentTheme = useTheme();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isLoggedIn = useSelector(
    (state: IRootState) => !!state.auth.authData.accessToken
  );

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(loginUser({ login, password }));
    navigate("/manga");
  };

  return (
    <>
      {isLoggedIn ? (
        <LoggedWrapper>
        <LoggedText theme={currentTheme.theme}>You are already logged</LoggedText>
        <LoggedImg src={Logged } alt="" />
        </LoggedWrapper>
      ) : (
        <FormWrapper theme={currentTheme.theme}>
          <FormTitle>Login</FormTitle>
          <FormText>Enter your credentials</FormText>
          <FormCard onSubmit={handleSubmit}>
            <FormInput
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setLogin(event.target.value)
              }
              value={login}
              required
              type="text"
              placeholder="login"
            />
            <FormInput
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setPassword(event.target.value)
              }
              value={password}
              required
              type="password"
              placeholder="Password"
            />
            <FormButton theme={currentTheme.theme}>
              Login
            </FormButton>
          </FormCard>
        </FormWrapper>
      )}
    </>
  );
};
