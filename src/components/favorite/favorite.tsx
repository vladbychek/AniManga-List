import { useSelector } from "react-redux";
import { useTheme } from "../../themeContext";
import { RootState } from "../redux/store";
import {
  FavEmptyWrapper,
  FavEmptyText,
  FavEmptyStyledImg,
} from "./favorite.Styles";

const favimg = require("../img/favimg.png");

export const Favorite = () => {
  const FavoriteAnimeStore = useSelector((state: RootState) => state.anime.favoriteAnimeArr);
  const FavoriteMangaStore = useSelector((state: RootState) => state.manga.favoriteMangaArr);

  const favoriteArr = [...FavoriteMangaStore, ...FavoriteAnimeStore];

  console.log(favoriteArr)
  const currentTheme = useTheme();

  return (
    <>
      {favoriteArr.length ? (
        <div>123</div>
      ) : (
        <FavEmptyWrapper>
          <FavEmptyText theme={currentTheme.theme}>
            here will be your favorite anime and manga<br></br>now it's empty
          </FavEmptyText>
          <FavEmptyStyledImg src={favimg} alt="" />
        </FavEmptyWrapper>
      )}
    </>
  );
};
