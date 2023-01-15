import { useEffect, useState } from "react";
import { ThreeCircles } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useTheme } from "../../themeContext";
import { axiosData } from "../axios/api";
import { Loaderrr } from "../common/fullInfoPage.Styles";
import {
  AllMainPages,
  MainPagesWrapper,
  MainPagesLink,
  MainPagesTitle,
  MainPageContent,
} from "../common/mainPages.Styles";
import {
  addManga,
  getNextMangaPage,
  getPrevMangaPage,
  sortMangaByDate,
  sortMangaByDateBack,
  sortMangaByRank,
  sortMangaByRankBack,
} from "../redux/reducer/mangaSlice/mangaSlice";

export const Manga = () => {
  const MangaStore = useSelector((state: any) => state.manga.mangaArr);
  const CurrentMangaPage = useSelector(
    (state: any) => state.manga.mangaCurrPage
  );
  const CurrentMangaSort = useSelector(
    (state: any) => state.manga.mangaCurrSort
  );

  const [loading, isLoading] = useState(true);

  const [fetchingSort, setFetchingSort] = useState(true);
  const dispatch = useDispatch();

  const getManga = async () => {
    try {
      isLoading(true);
      const resultManga = await axiosData.get(
        `/manga?page%5Blimit%5D=20&page%5Boffset%5D=${CurrentMangaPage}&sort=${CurrentMangaSort}`
      );
      isLoading(false);
      dispatch(addManga({ axiosData: resultManga.data }));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getManga();
  }, [CurrentMangaPage, fetchingSort]);

  const SortByDicreasingRank = () => {
    dispatch(sortMangaByDate());
    setFetchingSort(true);
  };
  const SortByIncreasingRank = () => {
    dispatch(sortMangaByDateBack());
    setFetchingSort(true);
  };
  const SortByDicreasingTitleName = () => {
    dispatch(sortMangaByRank());
    setFetchingSort(true);
  };
  const SortByIncreasingTitleName = () => {
    dispatch(sortMangaByRankBack());
    setFetchingSort(true);
  };

  const prev = () => {
    dispatch(getPrevMangaPage());
  };

  const next = () => {
    dispatch(getNextMangaPage());
  };
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
        <>
          <div>
            <button onClick={SortByDicreasingRank}>re rating</button>
            <button onClick={SortByIncreasingRank}>rating</button>
            <button onClick={SortByDicreasingTitleName}>re name</button>
            <button onClick={SortByIncreasingTitleName}>name</button>
          </div>
          <div>
            <button onClick={prev}>prev</button>
            <button onClick={next}>next</button>
          </div>
          <MainPageContent>
            <AllMainPages>
              {MangaStore?.map((manga: any) => (
                <Link to={`${manga.id}`}>
                  <MainPagesWrapper>
                    <MainPagesLink img={manga.attributes.posterImage.original}>
                      <MainPagesTitle>
                        {manga.attributes.canonicalTitle}
                      </MainPagesTitle>
                    </MainPagesLink>
                  </MainPagesWrapper>
                </Link>
              ))}
            </AllMainPages>
          </MainPageContent>
        </>
      )}
    </>
  );
};
