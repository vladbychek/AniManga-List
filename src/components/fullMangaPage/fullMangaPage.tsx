import { useDispatch, useSelector } from "react-redux";
import { getFullMangaInfo } from "../redux/reducer/mangaSlice/mangaSlice";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ThreeCircles } from "react-loader-spinner";
import { axiosData } from "../axios/api";
import {
  FullInfoAll,
  FullInfoImgAndTitleWrapper,
  FullInfoImg,
  FullTitleAndAboutWrapper,
  FullInfoTitle,
  FullInfoAbout,
  RatingIcon,
  RatingWrapper,
} from "../common/fullInfoPage.Styles";
import { useTheme } from "../../themeContext";
import { Loader } from "../common/loader.Styles";
import { MoreInfo } from "./fullMangaPageMoreInfo/fullMangaPageMoreInfo";
import { useAppDispatch } from "../redux/hooks";
import { RootState } from "../redux/store";

const RatingLogo = require("../img/RatingLogo.png");


export const FullInfoManga = () => {
  const FullInfoMangaStore = useSelector(
    (state: RootState) => state.manga.fullMangaInfoArr
  );
  const [loading, isLoading] = useState<boolean>(true);
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const currentTheme = useTheme();

  const getFullMangaInformation = async () => {
    try {
      isLoading(true);
      const resultFullInfoManga = await axiosData.get(`/manga/${id}`);
      isLoading(false);
      dispatch(getFullMangaInfo({ fullInfo: resultFullInfoManga.data.data }));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getFullMangaInformation();
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
              src={FullInfoMangaStore.attributes?.posterImage.original}
            />
            <FullTitleAndAboutWrapper theme={currentTheme.theme}>
                <RatingWrapper>{!FullInfoMangaStore.attributes?.averageRating ? "no rating" : `${FullInfoMangaStore.attributes.averageRating}`} <RatingIcon src={RatingLogo} alt="" /></RatingWrapper>
              <FullInfoTitle>
                {FullInfoMangaStore.attributes?.canonicalTitle}
              </FullInfoTitle>
              <FullInfoAbout>
                {FullInfoMangaStore.attributes?.description}
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
