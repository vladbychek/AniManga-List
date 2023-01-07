import { useDispatch, useSelector } from "react-redux";
import { getFullMangaInfo } from "../redux/reducer/mangaSlice/mangaSlice";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ThreeCircles } from "react-loader-spinner";
import {
  FullInfoMangaAbout,
  FullInfoMangaAll,
  FullInfoMangaImg,
  FullInfoMangaTitle,
  FullMangaInfoImgAndTitleWrapper,
  FullMangaNotSpan,
  FullMangaSpan,
  FullMangaTitleAndAboutWrapper,
  LoaderrrManga,
  MoreInfoManga,
} from "./fullMangaInfo.Styles";
import { axiosData } from "../axios/api";

export const FullInfoManga = () => {
  const [loading, isLoading] = useState(true);
  const { id } = useParams();
  const dispatch = useDispatch();

  const FullInfoMangaStore = useSelector(
    (state: any) => state.manga.fullMangaInfoArr
  );

  const getFullMangaInformation = async () => {
    try {
      isLoading(true);
      const resultFullInfoManga = await axiosData.get(`/manga/${id}`);
      console.log(resultFullInfoManga.data.data)
      isLoading(false);
      dispatch(getFullMangaInfo({ mangaData: resultFullInfoManga.data }));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getFullMangaInformation();
  }, []);

  return (
    <>
    <LoaderrrManga>
        <ThreeCircles
        height="200"
        width="200"
        color="#ff8c00"
        visible={loading}
        ariaLabel="three-circles-rotating"
      />
      </LoaderrrManga>
      {!loading && (
        <FullInfoMangaAll>
          <FullMangaInfoImgAndTitleWrapper>
            <FullInfoMangaImg
              src={FullInfoMangaStore.data.attributes.posterImage.original}
              alt=""
            />
            <FullMangaTitleAndAboutWrapper>
              <FullInfoMangaTitle>{`${FullInfoMangaStore.data.attributes.canonicalTitle}`}</FullInfoMangaTitle>
              <FullInfoMangaAbout>{`${FullInfoMangaStore.data.attributes.description}`}</FullInfoMangaAbout>
            </FullMangaTitleAndAboutWrapper>
          </FullMangaInfoImgAndTitleWrapper>
          <MoreInfoManga>
            <FullMangaNotSpan>
              Type<br></br>
              <FullMangaSpan>
                {FullInfoMangaStore.data.attributes.subtype}
              </FullMangaSpan>
            </FullMangaNotSpan>
            <FullMangaNotSpan>
              Release date<br></br>
              <FullMangaSpan>
                {FullInfoMangaStore.data.attributes.startDate}
              </FullMangaSpan>
            </FullMangaNotSpan>
            <FullMangaNotSpan>
              Title status<br></br>
              <FullMangaSpan>
                {FullInfoMangaStore.data.attributes.status}
              </FullMangaSpan>
            </FullMangaNotSpan>
            <FullMangaNotSpan>
              Published in<br></br>
              <FullMangaSpan>
                {FullInfoMangaStore.data.attributes.serialization}
              </FullMangaSpan>
            </FullMangaNotSpan>
            <FullMangaNotSpan>
              Amount of volumes<br></br>
              <FullMangaSpan>
                {FullInfoMangaStore.data.attributes.volumeCount}
              </FullMangaSpan>
            </FullMangaNotSpan>
            <FullMangaNotSpan>
              Amount of chapters<br></br>
              <FullMangaSpan>
                {FullInfoMangaStore.data.attributes.chapterCount}
              </FullMangaSpan>
            </FullMangaNotSpan>
          </MoreInfoManga>
        </FullInfoMangaAll>
      )}
    </>
  );
};
