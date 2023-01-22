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
  addAnime,
  getNextAnimePage,
  getPrevAnimePage,
  sortAnimeByDate,
  sortAnimeByDateBack,
  sortAnimeByRank,
  sortAnimeByRankBack,
} from "../redux/reducer/animeSlice/animeSlice";

export const Anime = () => {
  const AnimeStore = useSelector((state: any) => state.anime.animeArr);

  const CurrentAnimePage = useSelector(
    (state: any) => state.anime.currAnimePage
  );

  const CurrentAnimeSort = useSelector(
    (state: any) => state.anime.animeCurrSort
  );
  const [fetchingSort, setFetchingSort] = useState(true);
  const [loading, isLoading] = useState(true);

  const dispatch = useDispatch();

  const getAnime = async () => {
    try {
      isLoading(true);
      const resultAnime = await axiosData.get(
        `/anime?page%5Blimit%5D=20&page%5Boffset%5D=${CurrentAnimePage}&sort=${CurrentAnimeSort}`
      );
      isLoading(false);
      dispatch(addAnime({ axiosData: resultAnime.data }));
      setFetchingSort(false);
    } catch (err) {
      console.log(err);
    }
  };

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

  useEffect(() => {
    getAnime();
  }, [CurrentAnimePage, fetchingSort]);
  const prev = () => {
    dispatch(getPrevAnimePage());
  };

  const next = () => {
    dispatch(getNextAnimePage());
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
          <MainPageContent>
            <AllMainPages>
              {AnimeStore?.map((anime: any) => (
                <Link key={anime.id} to={`${anime.id}`}>
                  <MainPagesWrapper>
                    <MainPagesLink img={anime.attributes.posterImage?.original}>
                      <MainPagesTitle>
                        {anime.attributes.canonicalTitle}
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
