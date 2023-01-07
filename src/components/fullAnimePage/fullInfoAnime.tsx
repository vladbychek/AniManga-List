import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ThreeCircles } from "react-loader-spinner";

import { axiosData } from "../axios/api";
import { getFullAnimeInfo } from "../redux/reducer/animeSlice/animeSlice";
import {
  FullAnimeInfoImgAndTitleWrapper,
  FullAnimeNotSpan,
  FullAnimeSpan,
  FullAnimeTitleAndAboutWrapper,
  FullInfoAnimeAbout,
  FullInfoAnimeAll,
  FullInfoAnimeImg,
  FullInfoAnimeTitle,
  LoaderrrAnime,
  MoreInfoAnime,
} from "./fullAnimeInfo.Styles";

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

  return (
    <>
      <LoaderrrAnime>
        <ThreeCircles
          height="200"
          width="200"
          color="#ff8c00"
          visible={loading}
          ariaLabel="three-circles-rotating"
        />
      </LoaderrrAnime>
      {!loading && (
        <FullInfoAnimeAll>
          <FullAnimeInfoImgAndTitleWrapper>
            <FullInfoAnimeImg
              src={FullInfoAnimeStore?.data.attributes.posterImage.original}
              alt=""
            />
            <FullAnimeTitleAndAboutWrapper>
              <FullInfoAnimeTitle>
                {FullInfoAnimeStore?.data.attributes.canonicalTitle}
              </FullInfoAnimeTitle>
              <FullInfoAnimeAbout>
                {FullInfoAnimeStore?.data.attributes.description}
              </FullInfoAnimeAbout>
            </FullAnimeTitleAndAboutWrapper>
          </FullAnimeInfoImgAndTitleWrapper>
          <MoreInfoAnime>
            <FullAnimeNotSpan>
              Type<br></br>
              <FullAnimeSpan>{FullInfoAnimeStore?.data.type}</FullAnimeSpan>
            </FullAnimeNotSpan>
            <FullAnimeNotSpan>
              Release date<br></br>
              <FullAnimeSpan>
                {FullInfoAnimeStore?.data.attributes.startDate}
              </FullAnimeSpan>
            </FullAnimeNotSpan>
            <FullAnimeNotSpan>
              Title status<br></br>
              <FullAnimeSpan>
                {FullInfoAnimeStore?.data.attributes.status}
              </FullAnimeSpan>
            </FullAnimeNotSpan>
            <FullAnimeNotSpan>
              Age rating<br></br>
              <FullAnimeSpan>
                {FullInfoAnimeStore?.data.attributes.ageRating}
              </FullAnimeSpan>
            </FullAnimeNotSpan>
            <FullAnimeNotSpan>
              Amount of episodes<br></br>
              <FullAnimeSpan>
                {FullInfoAnimeStore?.data.attributes.episodeCount}
              </FullAnimeSpan>
            </FullAnimeNotSpan>
          </MoreInfoAnime>
        </FullInfoAnimeAll>
      )}
    </>
  );
};
