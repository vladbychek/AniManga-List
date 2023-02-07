import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { IRootState } from "../redux/store";

import { useTheme } from "../../themeContext";

import {
  FavEmptyWrapper,
  FavEmptyText,
  FavEmptyStyledImg,
  FavAllListsPages,
  FavPageContent,
  FavPages,
  FavPagesTitle,
  FavPagesWrapper,
} from "./favorite.Styles";

const favimg = require("../../img/favimg.png");

export const Favorite = () => {
  const FavoriteAnimeStore = useSelector(
    (state: IRootState) => state.anime.favoriteAnimeArr
  );
  const FavoriteMangaStore = useSelector(
    (state: IRootState) => state.manga.favoriteMangaArr
  );

  const favoriteArr = [...FavoriteMangaStore, ...FavoriteAnimeStore].flat();

  const currentTheme = useTheme();

  return (
    <>
      {favoriteArr.length ? (
        <FavPageContent>
          <FavAllListsPages>
            {favoriteArr?.map((item: any) => (
              <>
                <Link
                  style={{ textDecoration: "none" }}
                  title={item.attributes?.canonicalTitle}
                  key={item.id}
                  to={
                    item.type === "manga"
                      ? `manga/${item.id}`
                      : `anime/${item.id}`
                  }
                >
                  <FavPagesWrapper>
                    <FavPages img={item.attributes?.posterImage?.original}>
                      <FavPagesTitle>
                        {item.attributes?.canonicalTitle}
                      </FavPagesTitle>
                    </FavPages>
                  </FavPagesWrapper>
                </Link>
              </>
            ))}
          </FavAllListsPages>
        </FavPageContent>
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
