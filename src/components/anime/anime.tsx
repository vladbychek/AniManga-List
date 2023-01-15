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
    (state: any) => state.anime.animeCurrPage
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

  const SortByDicreasingRank = () => {
    dispatch(sortAnimeByDate());
    setFetchingSort(true);
  };
  const SortByIncreasingRank = () => {
    dispatch(sortAnimeByDateBack());
    setFetchingSort(true);
  };
  const SortByDicreasingTitleName = () => {
    dispatch(sortAnimeByRank());
    setFetchingSort(true);
  };
  const SortByIncreasingTitleName = () => {
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
              {AnimeStore?.map((anime: any) => (
                <Link to={`${anime.id}`}>
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
          </MainPageContent>
        </>
      )}
    </>
  );
};
