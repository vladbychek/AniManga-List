import { NavLink } from "react-router-dom";
import { HeaderImg, HeaderLinks, HeaderWrapper } from "./header.Styles";


export const Header = () => {
  return (
    <>
      <HeaderWrapper>
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
      </HeaderWrapper>
    </>
  );
};
