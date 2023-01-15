import { useDispatch, useSelector } from "react-redux";
import { getFullMangaInfo } from "../redux/reducer/mangaSlice/mangaSlice";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ThreeCircles } from "react-loader-spinner";
import { axiosData } from "../axios/api";
import { Loaderrr, FullInfoAll, FullInfoImgAndTitleWrapper, FullInfoImg, FullTitleAndAboutWrapper, FullInfoTitle, FullInfoAbout, MoreInfo, FullSpan, FullNotSpan } from "../common/fullInfoPage.Styles";
import { useTheme } from "../../themeContext";

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
      isLoading(false);
      dispatch(getFullMangaInfo({ mangaData: resultFullInfoManga.data }));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getFullMangaInformation();
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
              src={FullInfoMangaStore.data.attributes.posterImage?.original}
            />
            <FullTitleAndAboutWrapper theme={currentTheme.theme}>
              <FullInfoTitle>{FullInfoMangaStore.data.attributes.canonicalTitle}</FullInfoTitle>
              <FullInfoAbout>{FullInfoMangaStore.data.attributes.description}</FullInfoAbout>
            </FullTitleAndAboutWrapper>
          </FullInfoImgAndTitleWrapper>
          <MoreInfo >
            <FullNotSpan>
              Type<br></br>
              <FullSpan theme={currentTheme.theme}>
                {FullInfoMangaStore.data.attributes.subtype}
              </FullSpan>
            </FullNotSpan>
            <FullNotSpan>
              Release date<br></br>
              <FullSpan theme={currentTheme.theme}>
                {FullInfoMangaStore.data.attributes.startDate}
              </FullSpan>
            </FullNotSpan>
            <FullNotSpan>
              Title status<br></br>
              <FullSpan theme={currentTheme.theme}>
                {FullInfoMangaStore.data.attributes.status}
              </FullSpan>
            </FullNotSpan>
            <FullNotSpan>
              Published in<br></br>
              <FullSpan theme={currentTheme.theme}>
                {FullInfoMangaStore.data.attributes.serialization}
              </FullSpan>
            </FullNotSpan>
            <FullNotSpan>
              Amount of volumes<br></br>
              <FullSpan theme={currentTheme.theme}>
                {FullInfoMangaStore.data.attributes.volumeCount}
              </FullSpan>
            </FullNotSpan>
            <FullNotSpan>
              Amount of chapters<br></br>
              <FullSpan theme={currentTheme.theme}>
                {FullInfoMangaStore.data.attributes.chapterCount}
              </FullSpan>
            </FullNotSpan>
          </MoreInfo>
        </FullInfoAll>
      )}
    </>
  );
};
