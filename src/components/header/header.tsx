import { NavLink } from "react-router-dom";
import { useTheme } from "../../themeContext";
import { MaterialUISwitch } from "../switch/switch";
import {
  HeaderContent,
  HeaderElement,
  HeaderImg,
  HeaderLinks,
  HeaderWrapper,
} from "./header.Styles";
const HeaderLogo = require("../img/logo.png");

export const Header = () => {
  const currentTheme = useTheme();

  return (
    <>
      <HeaderWrapper theme={currentTheme.theme}>
        <HeaderContent>
          <NavLink to={"/"}> <HeaderImg src={HeaderLogo} alt="" /></NavLink>
          <HeaderLinks>
            <NavLink style={{ textDecoration: "none" }} to={"/manga"}>
              <HeaderElement>Manga</HeaderElement>
            </NavLink>
            <NavLink style={{ textDecoration: "none" }} to={"/anime"}>
              <HeaderElement>Anime</HeaderElement>
            </NavLink>
            <NavLink to={"/login"}>
              <HeaderElement>Login</HeaderElement>
            </NavLink>
            <NavLink to={"/signUp"}>
              <HeaderElement>SignUp</HeaderElement>
            </NavLink>
          </HeaderLinks>
          <MaterialUISwitch onClick={currentTheme.toggler} />
        </HeaderContent>
      </HeaderWrapper>
    </>
  );
};
