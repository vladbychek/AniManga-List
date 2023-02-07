import { useSelector } from "react-redux";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ThreeCircles } from "react-loader-spinner";


import { MoreInfo } from "./fullMangaPageMoreInfo/fullMangaPageMoreInfo";
import { useTheme } from "../../../themeContext";
import { axiosData } from "../../axios/api";
import { FullInfoAll, FullInfoImgAndTitleWrapper, FullInfoImg, FullTitleAndAboutWrapper, RatingWrapper, RatingIcon, FullInfoTitle, FullInfoAbout, FavBtnsWrapper, FavBtn } from "../../common/fullInfoPage.Styles";
import { Loader } from "../../common/loader.Styles";
import { useAppDispatch } from "../../redux/hooks";
import { AnimeType } from "../../redux/reducer/animeSlice/anime.types";
import { MangaType } from "../../redux/reducer/mangaSlice/manga.types";
import { getFullMangaInfo, addMangaToFavorite, removeMangaFromFavorite } from "../../redux/reducer/mangaSlice/mangaSlice";
import { IRootState } from "../../redux/store";


const RatingLogo = require("../../../img/RatingLogo.png");

export const FullInfoManga = () => {
  const FullInfoMangaStore = useSelector(
    (state: IRootState) => state.manga.fullMangaInfoArr
  );
  const [loading, isLoading] = useState<boolean>(true);
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const currentTheme = useTheme();
  const [disabledAddFav, setDisabledAddFav] = useState<boolean>(false);
  const [disabledRemoveFav, setDisabledRemoveFav] = useState<boolean>(true);
  const FavoriteAnimeStore = useSelector(
    (state: IRootState) => state.anime.favoriteAnimeArr
  );
  const FavoriteMangaStore = useSelector(
    (state: IRootState) => state.manga.favoriteMangaArr
  );

  const favoriteArr = [...FavoriteMangaStore, ...FavoriteAnimeStore].flat();
  const getFullMangaInformation = async () => {
    try {
      isLoading(true);
      const resultFullInfoManga = await axiosData.get(`/manga/${id}`);
      isLoading(false);
      check1(id, FullInfoMangaStore.attributes?.canonicalTitle);
      dispatch(getFullMangaInfo({ fullInfo: resultFullInfoManga.data.data }));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getFullMangaInformation();
  }, []);

  const check1 = (id: string | undefined, name: string | undefined) => {
    let check = favoriteArr.find((item: any) => item.id === id);
    let check2 = favoriteArr.find(
      (item: AnimeType | MangaType | undefined) =>
        item?.attributes?.canonicalTitle === name
    );

    if (check === undefined || check2 === undefined) {
      setDisabledAddFav(false);
      setDisabledRemoveFav(true);
    } else {
      setDisabledAddFav(true);
      setDisabledRemoveFav(false);
    }
  };

  const addToFav = () => {
    dispatch(addMangaToFavorite());
    setDisabledAddFav(true);
    setDisabledRemoveFav(false);
  };

  const removeFromFav = (id: any) => {
    dispatch(removeMangaFromFavorite(id));
    setDisabledAddFav(false);
    setDisabledRemoveFav(true);
  };
  return (
    <>
      <Loader>
        <ThreeCircles
          height="200"
          width="200"
          color={currentTheme.theme === "light" ? "#ff8c00" : "white"}
          visible={loading}
          ariaLabel="three-circles-rotating"
        />
      </Loader>
      {!loading && (
        <FullInfoAll>
          <FullInfoImgAndTitleWrapper>
            <div>
              <FullInfoImg
                src={FullInfoMangaStore.attributes?.posterImage.original}
              />
              <MoreInfo />
            </div>
            <FullTitleAndAboutWrapper theme={currentTheme.theme}>
              <RatingWrapper>
                {!FullInfoMangaStore.attributes?.averageRating
                  ? "no rating"
                  : `${FullInfoMangaStore.attributes.averageRating}`}{" "}
                <RatingIcon src={RatingLogo} alt="" />
              </RatingWrapper>
              <FullInfoTitle>
                {FullInfoMangaStore.attributes?.canonicalTitle}
              </FullInfoTitle>
              <FullInfoAbout>
                {FullInfoMangaStore.attributes?.description}
              </FullInfoAbout>
              <FavBtnsWrapper>
                <FavBtn
                  theme={currentTheme.theme}
                  onClick={() => addToFav()}
                  disabled={disabledAddFav}
                >
                  add to fav
                </FavBtn>
                <FavBtn
                  theme={currentTheme.theme}
                  onClick={() => removeFromFav(FullInfoMangaStore.id)}
                  disabled={disabledRemoveFav}
                >
                  remove from fav
                </FavBtn>
              </FavBtnsWrapper>
            </FullTitleAndAboutWrapper>
          </FullInfoImgAndTitleWrapper>
        </FullInfoAll>
      )}
    </>
  );
};
