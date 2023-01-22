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
  AllSortBtns,
  SortBtn,
  SortTypeBtns,
  AllPaginationBtns,
  PaginationBtn,
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
    (state: any) => state.manga.currMangaPage
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
      setFetchingSort(false);
      dispatch(addManga({ axiosData: resultManga.data }));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getManga();
  }, [CurrentMangaPage, fetchingSort]);

  const SortByIncreasingDate = () => {
    dispatch(sortMangaByDate());
    setFetchingSort(true);
  };
  const SortByDicreasingDate = () => {
    dispatch(sortMangaByDateBack());
    setFetchingSort(true);
  };
  const SortByIncreasingRank = () => {
    dispatch(sortMangaByRank());
    setFetchingSort(true);
  };
  const SortByDicreasingRank = () => {
    dispatch(sortMangaByRankBack());
    setFetchingSort(true);
  };

  const currentTheme = useTheme();

  const prev = () => {
    dispatch(getPrevMangaPage());
  };

  const next = () => {
    dispatch(getNextMangaPage());
  };
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
          <MainPageContent>
            <AllSortBtns>
              <SortTypeBtns>
                <SortBtn onClick={SortByDicreasingRank}>Rank 🠕</SortBtn>
                <SortBtn onClick={SortByIncreasingRank}>Rank 🠗</SortBtn>
              </SortTypeBtns>
              <SortTypeBtns>
                <SortBtn onClick={SortByIncreasingDate}>Date 🠕</SortBtn>
                <SortBtn onClick={SortByDicreasingDate}>Date 🠗</SortBtn>
              </SortTypeBtns>
            </AllSortBtns>
            <AllMainPages>
              {MangaStore?.map((manga: any) => (
                <Link key={manga.id} to={`${manga.id}`}>
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
            <AllPaginationBtns>
              <PaginationBtn onClick={prev}>prev</PaginationBtn>
              <PaginationBtn onClick={next}>next</PaginationBtn>
            </AllPaginationBtns>
          </MainPageContent>
        </>
      )}
    </>
  );
};
