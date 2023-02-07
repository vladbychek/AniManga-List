import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useTheme } from "../../themeContext";
import { useAppDispatch } from "../redux/hooks";
import { logoutUser } from "../redux/reducer/auth/actionCreators";
import { IRootState } from "../redux/store";
import { MaterialUISwitch } from "./switch/switch";
import {
  HeaderContent,
  HeaderElement,
  HeaderImg,
  HeaderLinks,
  HeaderLogoutBtn,
  HeaderWrapper,
} from "./header.Styles";
const HeaderLogo = require("../../img/logo.png");

export const Header = () => {
  const dispatch = useAppDispatch();


  const isLoggedIn = useSelector(
    (state: IRootState) => !!state.auth.authData.accessToken
  );

  const currentTheme = useTheme();

  return (
    <>
      <HeaderWrapper theme={currentTheme.theme}>
        <HeaderContent>
          <NavLink to={"/"}>
            <HeaderImg title="main page" src={HeaderLogo} alt="logo" />
          </NavLink>
          <HeaderLinks>
            <NavLink style={{ textDecoration: "none" }} to={"/manga"}>
              <HeaderElement theme={currentTheme.theme}>Manga</HeaderElement>
            </NavLink>
            <NavLink style={{ textDecoration: "none" }} to={"/anime"}>
              <HeaderElement theme={currentTheme.theme}>Anime</HeaderElement>
            </NavLink>
            <NavLink style={{ textDecoration: "none" }} to={"/favorite"}>
              <HeaderElement theme={currentTheme.theme}>Favorite</HeaderElement>
            </NavLink>
            {isLoggedIn ? (
              <HeaderLogoutBtn onClick={() => dispatch(logoutUser())} theme={currentTheme.theme}>Logout</HeaderLogoutBtn>
            ) : (
              <NavLink style={{ textDecoration: "none" }} to={"/loginForm"}>
                <HeaderElement theme={currentTheme.theme}>Login</HeaderElement>
              </NavLink>
            )}
          </HeaderLinks>
          <MaterialUISwitch onClick={currentTheme.toggler} />
        </HeaderContent>
      </HeaderWrapper>
    </>
  );
};

