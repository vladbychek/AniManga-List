import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ThreeCircles } from "react-loader-spinner";

import { axiosData } from "../axios/api";
import {
  addAnimeToFavorite,
  getFullAnimeInfo,
  removeAnimeFromFavorite,
} from "../redux/reducer/animeSlice/animeSlice";

import {
  FavBtn,
  FavBtnsWrapper,
  FullInfoAbout,
  FullInfoAll,
  FullInfoImg,
  FullInfoImgAndTitleWrapper,
  FullInfoTitle,
  FullTitleAndAboutWrapper,
  RatingIcon,
  RatingWrapper,
} from "../common/fullInfoPage.Styles";
import { useTheme } from "../../themeContext";
import { Loader } from "../common/loader.Styles";
import { MoreInfo } from "./fullAnimePageMoreInfo/fullAnimePageMoreInfo";
import { useAppDispatch } from "../redux/hooks";
import { IRootState } from "../redux/store";
import { AnimeType } from "../redux/reducer/animeSlice/anime.types";
import { MangaType } from "../redux/reducer/mangaSlice/manga.types";

const RatingLogo = require("../img/RatingLogo.png");

export const FullInfoAnime = () => {
  const FullInfoAnimeStore = useSelector(
    (state: IRootState) => state.anime.fullAnimeInfoArr
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

  const getFullAnimeInformation = async () => {
    try {
      isLoading(true);
      const resultFullInfoAnime = await axiosData.get(`/anime/${id}`);
      isLoading(false);
      check1(id, FullInfoAnimeStore.attributes?.canonicalTitle);
      dispatch(getFullAnimeInfo({ fullInfo: resultFullInfoAnime.data.data }));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getFullAnimeInformation();
  }, []);

  const check1 = (id: string | undefined, name: string | undefined) => {
    let check = favoriteArr.find((item) => item.id === id);
    let check2 = favoriteArr.find((item: AnimeType | MangaType | undefined) => item?.attributes?.canonicalTitle === name);


    if (check === undefined || check2 === undefined) {
      setDisabledAddFav(false);
      setDisabledRemoveFav(true);
    } else {setDisabledAddFav(true);
    setDisabledRemoveFav(false);
    }
  };

  const addToFav = () => {
    dispatch(addAnimeToFavorite());
    setDisabledAddFav(true);
    setDisabledRemoveFav(false);
  };

  const removeFromFav = (id: any) => {
    dispatch(removeAnimeFromFavorite(id));
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
                src={FullInfoAnimeStore.attributes?.posterImage.original}
              />
              <MoreInfo />
            </div>
            <FullTitleAndAboutWrapper theme={currentTheme.theme}>
              <RatingWrapper>
                {!FullInfoAnimeStore.attributes?.averageRating
                  ? "no rating"
                  : `${FullInfoAnimeStore.attributes.averageRating}`}{" "}
                <RatingIcon src={RatingLogo} alt="" />
              </RatingWrapper>
              <FullInfoTitle>
                {FullInfoAnimeStore.attributes?.canonicalTitle}
              </FullInfoTitle>
              <FullInfoAbout>
                {FullInfoAnimeStore.attributes?.description}
              </FullInfoAbout>
              <FavBtnsWrapper>
                <FavBtn
                  disabled={disabledAddFav}
                  theme={currentTheme.theme}
                  onClick={() => addToFav()}
                >
                  add to fav
                </FavBtn>
                <FavBtn
                  disabled={disabledRemoveFav}
                  theme={currentTheme.theme}
                  onClick={() => removeFromFav(FullInfoAnimeStore.id)}
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
