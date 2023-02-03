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
import {
  addAnime,
  getNextAnimePage,
  getPrevAnimePage,
  sortAnimeByDate,
  sortAnimeByDateBack,
  sortAnimeByRank,
  sortAnimeByRankBack,
} from "../redux/reducer/animeSlice/animeSlice";
import { AppDispatch, RootState} from "../redux/store";
import { AnimeItem } from "./animeItem/animeItem";


export const Anime = () => {
  const CurrentAnimePage = useSelector((state: RootState) => state.anime.currAnimePage);
  const CurrentAnimeSort = useSelector((state: RootState) => state.anime.animeCurrSort);
  
  const [fetchingSort, setFetchingSort] = useState<boolean>(true);
  const [loading, isLoading] = useState<boolean>(true);
  const [disablePrevBtn, setDisablePrevBtn] = useState<boolean>(false);
  const [disableNextBtn, setDisableNextBtn] = useState<boolean>(false);

  const dispatch = useDispatch<AppDispatch>();
  const currentTheme = useTheme();

  const getAnime = async () => {
    try {
      isLoading(true);
      const resultAnime = await axiosData.get(
        `/anime?page%5Blimit%5D=20&page%5Boffset%5D=${CurrentAnimePage}&sort=${CurrentAnimeSort}`
      );
      isLoading(false);
      dispatch(addAnime({ newArr: resultAnime.data.data }));
      setFetchingSort(false);
      disableBtns();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAnime();
  }, [CurrentAnimePage, fetchingSort]);

  const SortByIncreasingDate = () => {
    dispatch(sortAnimeByDate());
    setFetchingSort(true);
  };
  const SortByDicreasingDate = () => {
    dispatch(sortAnimeByDateBack());
    setFetchingSort(true);
  };
  const SortByIncreasingRank = () => {
    dispatch(sortAnimeByRank());
    setFetchingSort(true);
  };
  const SortByDicreasingRank = () => {
    dispatch(sortAnimeByRankBack());
    setFetchingSort(true);
  };

  const prev = () => {
    dispatch(getPrevAnimePage());
  };

  const next = () => {
    dispatch(getNextAnimePage());
  };

  const disableBtns = () => {
    CurrentAnimePage === 0 ? setDisablePrevBtn(true) : setDisablePrevBtn(false)
    CurrentAnimePage === 53300 ? setDisableNextBtn(true) : setDisableNextBtn(false)
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
              <SortBtn theme={currentTheme.theme} title="sort by rank" onClick={SortByDicreasingRank}>Rank 🠕</SortBtn>
              <SortBtn theme={currentTheme.theme} title="sort by rank" onClick={SortByIncreasingRank}>Rank 🠗</SortBtn>
            </SortTypeBtns>
            <SortTypeBtns>
              <SortBtn theme={currentTheme.theme} title="sort by date" onClick={SortByIncreasingDate}>Date 🠕</SortBtn>
              <SortBtn theme={currentTheme.theme} title="sort by date" onClick={SortByDicreasingDate}>Date 🠗</SortBtn>
            </SortTypeBtns>
          </AllSortBtns>
            <AllListsPages>
              <AnimeItem/>
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
