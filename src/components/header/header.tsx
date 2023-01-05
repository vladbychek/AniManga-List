import { NavLink } from "react-router-dom";
import { HeaderImg, HeaderLinks, HeaderWrapper } from "./header.Styles";
// const animeImg = require("../../img/anime.png")

export const Header = () => {
  return (
    <>
      <HeaderWrapper>
        {/* <HeaderImg src={animeImg} alt="" /> */}
        <HeaderLinks>
          <NavLink to={"/manga"}>
            <div>Manga</div>
          </NavLink>
          <NavLink to={"/anime"}>
            <div>Anime</div>
          </NavLink>
        </HeaderLinks>
      </HeaderWrapper>
    </>
  );
};
