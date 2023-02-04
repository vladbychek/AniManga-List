import { useEffect, useState } from "react";
import { ThreeCircles } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "../../themeContext";
import { axiosData } from "../axios/api";
import {
  AllSortBtns,
  SortBtn,
  SortTypeBtns,
  AllPaginationBtns,
  PaginationBtn,
  AllListsPages,
  ListsPageContent,
} from "../common/ListsPages.Styles";
import { Loader } from "../common/loader.Styles";
import { useAppDispatch } from "../redux/hooks";
import {
  addManga,
  getNextMangaPage,
  getPrevMangaPage,
  sortMangaByDate,
  sortMangaByDateBack,
  sortMangaByRank,
  sortMangaByRankBack,
} from "../redux/reducer/mangaSlice/mangaSlice";
import { MangaItem } from "./mangaItem/mangaItem";

export const Manga = () => {
  const CurrentMangaPage = useSelector((state: any) => state.manga.currMangaPage);
  const CurrentMangaSort = useSelector((state: any) => state.manga.mangaCurrSort);

  const [loading, isLoading] = useState(true);
  const [disablePrevBtn, setDisablePrevBtn] = useState(false);
  const [disableNextBtn, setDisableNextBtn] = useState(false);
  const [fetchingSort, setFetchingSort] = useState(true);
  const [disableDateSortBtn,setDisableDateSortBtn] = useState(false)
  const [disableDateBackSortBtn,setDisableDateBackSortBtn] = useState(false)
  const [disableRankSortBtn,setDisableRankSortBtn] = useState(false)
  const [disableRankBackSortBtn,setDisableRankBackSortBtn] = useState(false)

  const dispatch = useAppDispatch();
  const currentTheme = useTheme();

  const getManga = async () => {
    try {
      isLoading(true);
      const resultManga = await axiosData.get(
        `/manga?page%5Blimit%5D=20&page%5Boffset%5D=${CurrentMangaPage}&sort=${CurrentMangaSort}`
      );
    
      isLoading(false); 
      setFetchingSort(false);
      dispatch(addManga({ newArr: resultManga.data.data}));
      disableBtns();
      disableSortBtns();
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

  const prev = () => {
    dispatch(getPrevMangaPage());
  };
  
  const next = () => {
    dispatch(getNextMangaPage());
  };

  const disableBtns = () => {
    CurrentMangaPage === 0 ? setDisablePrevBtn(true) : setDisablePrevBtn(false)
    CurrentMangaPage === 53300 ? setDisableNextBtn(true) : setDisableNextBtn(false)
  }

  const disableSortBtns = () => {
    CurrentMangaSort === "startDate" ? setDisableDateSortBtn(true) : setDisableDateSortBtn(false);
    CurrentMangaSort === "-startDate" ? setDisableDateBackSortBtn(true) : setDisableDateBackSortBtn(false);
    CurrentMangaSort === "averageRating" ? setDisableRankSortBtn(true) : setDisableRankSortBtn(false);
    CurrentMangaSort === "-averageRating" ? setDisableRankBackSortBtn(true) : setDisableRankBackSortBtn(false);
  }

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
                <SortBtn disabled={disableRankBackSortBtn} theme={currentTheme.theme} title="sort by rank" onClick={SortByDicreasingRank}>Rank 🠕</SortBtn>
                <SortBtn disabled={disableRankSortBtn} theme={currentTheme.theme} title="sort by rank" onClick={SortByIncreasingRank}>Rank 🠗</SortBtn>
              </SortTypeBtns>
              <SortTypeBtns>
                <SortBtn disabled={disableDateSortBtn} theme={currentTheme.theme} title="sort by date" onClick={SortByIncreasingDate}>Date 🠕</SortBtn>
                <SortBtn disabled={disableDateBackSortBtn} theme={currentTheme.theme} title="sort by date" onClick={SortByDicreasingDate}>Date 🠗</SortBtn>
              </SortTypeBtns>
            </AllSortBtns>
            <AllListsPages>
              <MangaItem/>
            </AllListsPages>
            <AllPaginationBtns>
              <PaginationBtn disabled={disablePrevBtn} theme={currentTheme.theme} title="previous page" onClick={prev}>prev</PaginationBtn>
              <PaginationBtn disabled={disableNextBtn} theme={currentTheme.theme} title="next page" onClick={next}>next</PaginationBtn>
            </AllPaginationBtns>
          </ListsPageContent>
        </>
      )}
    </>
  );
};
