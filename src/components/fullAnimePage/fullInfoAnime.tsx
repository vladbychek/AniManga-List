import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ThreeCircles } from "react-loader-spinner";

import { axiosData } from "../axios/api";
import { getFullAnimeInfo } from "../redux/reducer/animeSlice/animeSlice";

import {
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
import { RootState } from "../redux/store";

const RatingLogo = require("../img/RatingLogo.png");
const loda = require("lodash");

export const FullInfoAnime = () => {
  const FullInfoAnimeStore = useSelector(
    (state: RootState) => state.anime.fullAnimeInfoArr
  );

  const [loading, isLoading] = useState<boolean>(true);
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const currentTheme = useTheme();

  const getFullAnimeInformation = async () => {
    try {
      isLoading(true);
      const resultFullInfoAnime = await axiosData.get(`/anime/${id}`);
      isLoading(false);
      dispatch(getFullAnimeInfo({ fullInfo: resultFullInfoAnime.data.data }));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getFullAnimeInformation();
  }, []);

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
            <FullInfoImg
              src={FullInfoAnimeStore.attributes?.posterImage.original}
              alt=""
            />
            <FullTitleAndAboutWrapper theme={currentTheme.theme}>
              <RatingWrapper>{!FullInfoAnimeStore.attributes?.averageRating ? "no rating" : `${FullInfoAnimeStore.attributes.averageRating}`} <RatingIcon src={RatingLogo} alt="" /></RatingWrapper>
              <FullInfoTitle>
                {FullInfoAnimeStore.attributes?.canonicalTitle}
              </FullInfoTitle>
              <FullInfoAbout>
                {FullInfoAnimeStore.attributes?.description}
              </FullInfoAbout>
            </FullTitleAndAboutWrapper>
          </FullInfoImgAndTitleWrapper>
          <>
            <MoreInfo />
          </>
        </FullInfoAll>
      )}
    </>
  );
};
