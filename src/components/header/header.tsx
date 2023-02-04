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
            <NavLink to={"/login"}>
              <HeaderElement>Login</HeaderElement>
            </NavLink>
          </HeaderLinks>
          <MaterialUISwitch onClick={currentTheme.toggler} />
        </HeaderContent>
      </HeaderWrapper>
    </>
  );
};
