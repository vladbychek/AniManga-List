import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ThreeCircles } from "react-loader-spinner";

import { axiosData } from "../axios/api";
import { getFullAnimeInfo } from "../redux/reducer/animeSlice/animeSlice";

import { FullInfoAbout, FullInfoAll, FullInfoImg, FullInfoImgAndTitleWrapper, FullInfoTitle, FullNotSpan, FullSpan, FullTitleAndAboutWrapper, Loaderrr, MoreInfo } from "../common/fullInfoPage.Styles";
import { useTheme } from "../../themeContext";

export const FullInfoAnime = () => {
  const [loading, isLoading] = useState(true);
  const { id } = useParams();
  const dispatch = useDispatch();

  const FullInfoAnimeStore = useSelector(
    (state: any) => state.anime.fullAnimeInfoArr
  );
  console.log("123", FullInfoAnimeStore);

  const getFullAnimeInformation = async () => {
    try {
      isLoading(true);
      const resultFullInfoAnime = await axiosData.get(`/anime/${id}`);
      isLoading(false);
      dispatch(getFullAnimeInfo({ animeData: resultFullInfoAnime.data }));
      console.log("11", resultFullInfoAnime.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getFullAnimeInformation();
  }, []);
  
  const currentTheme = useTheme();

  return (
    <>
      <Loaderrr>
        <ThreeCircles
          height="200"
          width="200"
          color={currentTheme.theme === "light" ? "#ff8c00" : "white"}
          visible={loading}
          ariaLabel="three-circles-rotating"
        />
      </Loaderrr>
      {!loading && (
        <FullInfoAll>
          <FullInfoImgAndTitleWrapper>
            <FullInfoImg
              src={FullInfoAnimeStore?.data.attributes.posterImage.original}
              alt=""
            />
            <FullTitleAndAboutWrapper theme={currentTheme.theme} >
              <FullInfoTitle>
                {FullInfoAnimeStore?.data.attributes.canonicalTitle}
              </FullInfoTitle>
              <FullInfoAbout>
                {FullInfoAnimeStore?.data.attributes.description}
              </FullInfoAbout>
            </FullTitleAndAboutWrapper>
          </FullInfoImgAndTitleWrapper>
          <MoreInfo >
            <FullNotSpan>
              Type<br></br>
              <FullSpan theme={currentTheme.theme}>{FullInfoAnimeStore?.data.type}</FullSpan>
            </FullNotSpan>
            <FullNotSpan>
              Release date<br></br>
              <FullSpan theme={currentTheme.theme}>
                {FullInfoAnimeStore?.data.attributes.startDate}
              </FullSpan>
            </FullNotSpan>
            <FullNotSpan>
              Title status<br></br>
              <FullSpan theme={currentTheme.theme}>
                {FullInfoAnimeStore?.data.attributes.status}
              </FullSpan>
            </FullNotSpan>
            <FullNotSpan>
              Age rating<br></br>
              <FullSpan theme={currentTheme.theme}>
                {FullInfoAnimeStore?.data.attributes.ageRating}
              </FullSpan>
            </FullNotSpan>
            <FullNotSpan>
              Amount of episodes<br></br>
              <FullSpan theme={currentTheme.theme}>
                {FullInfoAnimeStore?.data.attributes.episodeCount}
              </FullSpan>
            </FullNotSpan>
          </MoreInfo>
        </FullInfoAll>
      )}
    </>
  );
};
