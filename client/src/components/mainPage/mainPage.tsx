import { useEffect, useState } from "react";
import { ThreeCircles } from "react-loader-spinner";
import { useTheme } from "../../themeContext";
import { axiosData } from "../axios/api";
import { Loader } from "../common/loader.Styles";
import { useAppDispatch } from "../redux/hooks";
import { addMainPageAnime } from "../redux/reducer/animeSlice/animeSlice";
import { addMainPageManga } from "../redux/reducer/mangaSlice/mangaSlice";
import { AllMainPages, MainPageContent, MainPageText } from "./mainPage.Styles";
import { AnimeMainPageItem } from "./mainPageItems/mainPageAnimeItem";
import { MangaMainPageItem } from "./mainPageItems/mainPageMangaItem";

export const MainPage = () => {
  const [loading, isLoading] = useState<boolean>(true);

  const dispatch = useAppDispatch();
  const currentTheme = useTheme();

  const getMainPage = async () => {
    try {
      isLoading(true);
      const resultMainPageManga = await axiosData.get(
        `/trending/manga?page%5Blimit%5D=5&page%5Boffset%5D=0`
      );
      const resultMainPageAnime = await axiosData.get(
        `/trending/anime?page%5Blimit%5D=5&page%5Boffset%5D=0`
      );
      isLoading(false);
      dispatch(
        addMainPageManga({ mainPageArr: resultMainPageManga.data.data })
      );
      dispatch(
        addMainPageAnime({ mainPageArr: resultMainPageAnime.data.data })
      );
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMainPage();
  }, []);

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
        <MainPageContent>
          <MainPageText theme={currentTheme.theme}>
            The most popular manga now:
          </MainPageText>
          <AllMainPages>
            <>
              <MangaMainPageItem />
            </>
          </AllMainPages>
          <MainPageText theme={currentTheme.theme}>
            The most popular anime now:
          </MainPageText>
          <AllMainPages>
            <>
              <AnimeMainPageItem />
            </>
          </AllMainPages>
        </MainPageContent>
      )}
    </>
  );
};
