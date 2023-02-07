import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { ThreeCircles } from "react-loader-spinner";

import { AnimeItem } from "./animeItem/animeItem";
import { useTheme } from "../../../themeContext";
import { axiosData } from "../../axios/api";
import { ListsPageContent, AllSortBtns, SortTypeBtns, SortBtn, AllListsPages, AllPaginationBtns, PaginationBtn } from "../../common/ListsPages.Styles";
import { Loader } from "../../common/loader.Styles";
import { useAppDispatch } from "../../redux/hooks";
import { addAnime, sortAnimeByDate, sortAnimeByDateBack, sortAnimeByRank, sortAnimeByRankBack, getPrevAnimePage, getNextAnimePage } from "../../redux/reducer/animeSlice/animeSlice";
import { IRootState } from "../../redux/store";




export const Anime = () => {
  const CurrentAnimePage = useSelector(
    (state: IRootState) => state.anime.currAnimePage
  );
  const CurrentAnimeSort = useSelector(
    (state: IRootState) => state.anime.animeCurrSort
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

  const getAnime = async () => {
    try {
      isLoading(true);
      const resultAnime = await axiosData.get(
        `/anime?page%5Blimit%5D=20&page%5Boffset%5D=${CurrentAnimePage}&sort=${CurrentAnimeSort}`
      );
      dispatch(addAnime({ newArr: resultAnime.data.data }));
      disableBtns();
      disableSortBtns();
      isLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAnime();
  }, [CurrentAnimePage, CurrentAnimeSort]);

  const SortByIncreasingDate = () => {
    dispatch(sortAnimeByDate());
  };
  const SortByDicreasingDate = () => {
    dispatch(sortAnimeByDateBack());
  };
  const SortByIncreasingRank = () => {
    dispatch(sortAnimeByRank());
  };
  const SortByDicreasingRank = () => {
    dispatch(sortAnimeByRankBack());
  };

  const prev = () => {
    dispatch(getPrevAnimePage());
  };

  const next = () => {
    dispatch(getNextAnimePage());
  };

  const disableBtns = () => {
    CurrentAnimePage === 0 ? setDisablePrevBtn(true) : setDisablePrevBtn(false);
    CurrentAnimePage === 53300
      ? setDisableNextBtn(true)
      : setDisableNextBtn(false);
  };

  const disableSortBtns = () => {
    CurrentAnimeSort === "startDate"
      ? setDisableDateSortBtn(true)
      : setDisableDateSortBtn(false);
    CurrentAnimeSort === "-startDate"
      ? setDisableDateBackSortBtn(true)
      : setDisableDateBackSortBtn(false);
    CurrentAnimeSort === "averageRating"
      ? setDisableRankSortBtn(true)
      : setDisableRankSortBtn(false);
    CurrentAnimeSort === "-averageRating"
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
              <AnimeItem />
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
