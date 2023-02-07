import { useEffect, useState } from "react";
import { ThreeCircles } from "react-loader-spinner";
import { useSelector } from "react-redux";
import { useTheme } from "../../../themeContext";
import { axiosData } from "../../axios/api";
import {
  AllSortBtns,
  SortBtn,
  SortTypeBtns,
  AllPaginationBtns,
  PaginationBtn,
  AllListsPages,
  ListsPageContent,
} from "../../common/ListsPages.Styles";
import { Loader } from "../../common/loader.Styles";
import { useAppDispatch } from "../../redux/hooks";
import {
  addManga,
  getNextMangaPage,
  getPrevMangaPage,
  sortMangaByDate,
  sortMangaByDateBack,
  sortMangaByRank,
  sortMangaByRankBack,
} from "../../redux/reducer/mangaSlice/mangaSlice";
import { IRootState } from "../../redux/store";
import { MangaItem } from "./mangaItem/mangaItem";

export const Manga = () => {
  const CurrentMangaPage = useSelector(
    (state: IRootState) => state.manga.currMangaPage
  );
  const CurrentMangaSort = useSelector(
    (state: IRootState) => state.manga.mangaCurrSort
  );

  const [loading, isLoading] = useState<boolean>(true);
  const [disablePrevBtn, setDisablePrevBtn] = useState<boolean>(false);
  const [disableNextBtn, setDisableNextBtn] = useState<boolean>(false);
  const [disableDateSortBtn, setDisableDateSortBtn] = useState<boolean>(false);
  const [disableDateBackSortBtn, setDisableDateBackSortBtn] =
    useState<boolean>(false);
  const [disableRankSortBtn, setDisableRankSortBtn] = useState<boolean>(false);
  const [disableRankBackSortBtn, setDisableRankBackSortBtn] =
    useState<boolean>(false);

  const dispatch = useAppDispatch();
  const currentTheme = useTheme();

  const getManga = async () => {
    try {
      isLoading(true);
      const resultManga = await axiosData.get(
        `/manga?page%5Blimit%5D=20&page%5Boffset%5D=${CurrentMangaPage}&sort=${CurrentMangaSort}`
      );
      dispatch(addManga({ newArr: resultManga.data.data }));
      disableBtns();
      disableSortBtns();
      isLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getManga();
  }, [CurrentMangaPage, CurrentMangaSort]);

  const SortByIncreasingDate = () => {
    dispatch(sortMangaByDate());
  };
  const SortByDicreasingDate = () => {
    dispatch(sortMangaByDateBack());
  };
  const SortByIncreasingRank = () => {
    dispatch(sortMangaByRank());
  };
  const SortByDicreasingRank = () => {
    dispatch(sortMangaByRankBack());
  };

  const prev = () => {
    dispatch(getPrevMangaPage());
  };

  const next = () => {
    dispatch(getNextMangaPage());
  };

  const disableBtns = () => {
    CurrentMangaPage === 0 ? setDisablePrevBtn(true) : setDisablePrevBtn(false);
    CurrentMangaPage === 53300
      ? setDisableNextBtn(true)
      : setDisableNextBtn(false);
  };

  const disableSortBtns = () => {
    CurrentMangaSort === "startDate"
      ? setDisableDateSortBtn(true)
      : setDisableDateSortBtn(false);
    CurrentMangaSort === "-startDate"
      ? setDisableDateBackSortBtn(true)
      : setDisableDateBackSortBtn(false);
    CurrentMangaSort === "averageRating"
      ? setDisableRankSortBtn(true)
      : setDisableRankSortBtn(false);
    CurrentMangaSort === "-averageRating"
      ? setDisableRankBackSortBtn(true)
      : setDisableRankBackSortBtn(false);
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
        <>
          <ListsPageContent>
            <AllSortBtns>
              <SortTypeBtns>
                <SortBtn
                  disabled={disableRankBackSortBtn}
                  theme={currentTheme.theme}
                  title="sort by rank"
                  onClick={SortByDicreasingRank}
                >
                  Rank 🠕
                </SortBtn>
                <SortBtn
                  disabled={disableRankSortBtn}
                  theme={currentTheme.theme}
                  title="sort by rank"
                  onClick={SortByIncreasingRank}
                >
                  Rank 🠗
                </SortBtn>
              </SortTypeBtns>
              <SortTypeBtns>
                <SortBtn
                  disabled={disableDateSortBtn}
                  theme={currentTheme.theme}
                  title="sort by date"
                  onClick={SortByIncreasingDate}
                >
                  Date 🠕
                </SortBtn>
                <SortBtn
                  disabled={disableDateBackSortBtn}
                  theme={currentTheme.theme}
                  title="sort by date"
                  onClick={SortByDicreasingDate}
                >
                  Date 🠗
                </SortBtn>
              </SortTypeBtns>
            </AllSortBtns>
            <AllListsPages>
              <MangaItem />
            </AllListsPages>
            <AllPaginationBtns>
              <PaginationBtn
                disabled={disablePrevBtn}
                theme={currentTheme.theme}
                title="previous page"
                onClick={prev}
              >
                prev
              </PaginationBtn>
              <PaginationBtn
                disabled={disableNextBtn}
                theme={currentTheme.theme}
                title="next page"
                onClick={next}
              >
                next
              </PaginationBtn>
            </AllPaginationBtns>
          </ListsPageContent>
        </>
      )}
    </>
  );
};
