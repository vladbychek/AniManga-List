import { NavLink } from "react-router-dom";
import { useTheme } from "../../themeContext";
import { MaterialUISwitch } from "../switch/switch";
import { HeaderContent, HeaderImg, HeaderLinks, HeaderWrapper } from "./header.Styles";
// import Logo from "../img/logo.png";
const HeaderLogo = require("../img/logo.png");

export const Header = () => {
  const currentTheme = useTheme();

  return (
    <>
      <HeaderWrapper theme={currentTheme.theme}>
        <HeaderContent>
          <HeaderImg src={HeaderLogo} alt="" />
          <HeaderLinks>
            <NavLink to={"/manga"}>
              <div>Manga</div>
            </NavLink>
            <NavLink to={"/anime"}>
              <div>Anime</div>
            </NavLink>
            <NavLink to={"/login"}>
              <div>Login</div>
            </NavLink>
            <NavLink to={"/signUp"}>
              <div>SignUp</div>
            </NavLink>
          </HeaderLinks>
          <MaterialUISwitch onClick={currentTheme.toggler} />
        </HeaderContent>
      </HeaderWrapper>
    </>
  );
};
